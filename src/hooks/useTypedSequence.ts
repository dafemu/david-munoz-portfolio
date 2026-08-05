import { useEffect, useMemo, useState } from 'react';

/** Per-character cadence while typing a line. */
const CHARACTER_INTERVAL_MS = 42;
/** Beat held at the end of each line before the next one starts. */
const LINE_PAUSE_MS = 280;

export interface TypedSequence {
  /** Each source line truncated to however much has been typed so far. */
  readonly typedLines: readonly string[];
  /** Index of the line the caret currently sits on. */
  readonly caretLineIndex: number;
  readonly isComplete: boolean;
}

/**
 * Types a list of lines out one character at a time.
 *
 * Progress is a single character count across the whole sequence rather than
 * per-line state, which keeps the caret position derivable instead of stored,
 * and means `isEnabled: false` can jump straight to the end in one assignment.
 */
export const useTypedSequence = (
  lines: readonly string[],
  isEnabled: boolean,
): TypedSequence => {
  const totalCharacters = useMemo(
    () => lines.reduce((total, line) => total + line.length, 0),
    [lines],
  );

  /** Cumulative character count at the end of each line. */
  const lineEndOffsets = useMemo(() => {
    let running = 0;
    return lines.map((line) => (running += line.length));
  }, [lines]);

  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    if (!isEnabled) {
      setTypedCount(totalCharacters);
      return;
    }

    if (typedCount >= totalCharacters) return;

    /* Landing exactly on a line end means the next tick starts a new line. */
    const isAtLineEnd = typedCount > 0 && lineEndOffsets.includes(typedCount);
    const delay = isAtLineEnd ? LINE_PAUSE_MS : CHARACTER_INTERVAL_MS;

    const timeoutId = setTimeout(() => setTypedCount((count) => count + 1), delay);
    return () => clearTimeout(timeoutId);
  }, [typedCount, totalCharacters, lineEndOffsets, isEnabled]);

  return useMemo(() => {
    let remaining = typedCount;
    const typedLines = lines.map((line) => {
      const visible = Math.max(0, Math.min(line.length, remaining));
      remaining -= line.length;
      return line.slice(0, visible);
    });

    /* The caret sits on the first unfinished line, or the last once done. */
    const unfinishedIndex = typedLines.findIndex(
      (typed, index) => typed.length < (lines[index]?.length ?? 0),
    );
    const caretLineIndex = unfinishedIndex === -1 ? lines.length - 1 : unfinishedIndex;

    return { typedLines, caretLineIndex, isComplete: typedCount >= totalCharacters };
  }, [lines, typedCount, totalCharacters]);
};
