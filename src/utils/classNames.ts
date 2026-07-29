/** Joins BEM class names, dropping falsy entries. */
export const cx = (...classNames: readonly (string | false | undefined)[]): string =>
  classNames.filter(Boolean).join(' ');
