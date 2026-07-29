import './PageBackdrop.css';

/** Fixed decorative layers: the dotted grid and the accent glow orb. */
export const PageBackdrop = () => (
  <div className="page-backdrop" aria-hidden="true">
    <div className="page-backdrop__grid" />
    <div className="page-backdrop__glow" />
  </div>
);
