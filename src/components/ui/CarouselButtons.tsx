// components/CarouselButtons.tsx
import React from 'react';

type ButtonProps = {
  onClick: () => void;
  enabled: boolean;
};

export const PrevButton: React.FC<ButtonProps> = ({ onClick, enabled }) => (
  <button
    onClick={onClick}
    disabled={!enabled}
    className="embla__button embla__button--prev"
    aria-label="Previous"
  >
    <svg className="embla__button__svg" viewBox="0 0 24 24">
      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
    </svg>
  </button>
);

export const NextButton: React.FC<ButtonProps> = ({ onClick, enabled }) => (
  <button
    onClick={onClick}
    disabled={!enabled}
    className="embla__button embla__button--next"
    aria-label="Next"
  >
    <svg className="embla__button__svg" viewBox="0 0 24 24">
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
    </svg>
  </button>
);