import { Button } from '@/components/atoms';
import type { ContactChannel, WithClassName } from '@/types';
import { cx } from '@/utils';
import './ContactChannels.css';

export interface ContactChannelsProps extends WithClassName {
  readonly channels: readonly ContactChannel[];
}

export const ContactChannels = ({ channels, className }: ContactChannelsProps) => (
  <div className={cx('contact-channels', className)}>
    {channels.map((channel) => (
      <Button key={channel.id} href={channel.href} variant="pill" isExternal={channel.external}>
        {channel.label}
      </Button>
    ))}
  </div>
);
