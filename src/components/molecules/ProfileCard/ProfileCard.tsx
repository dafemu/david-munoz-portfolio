import { LocationBadge } from '@/components/atoms';
import type { ProfilePhoto, WithClassName } from '@/types';
import { cx } from '@/utils';
import './ProfileCard.css';

export interface ProfileCardProps extends WithClassName {
  readonly photo: ProfilePhoto;
  readonly locationLabel: string;
}

export const ProfileCard = ({ photo, locationLabel, className }: ProfileCardProps) => (
  <figure className={cx('profile-card', className)}>
    <span className="profile-card__glow" aria-hidden="true" />
    <span className="profile-card__frame">
      <img
        className="profile-card__image"
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading="eager"
        fetchPriority="high"
      />
      <span className="profile-card__wash" aria-hidden="true" />
    </span>
    <figcaption>
      <LocationBadge className="profile-card__location" label={locationLabel} />
    </figcaption>
  </figure>
);
