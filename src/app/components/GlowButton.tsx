import React from 'react';

interface GlowButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const GlowButton: React.FC<GlowButtonProps> = ({ children, className, ...props }) => {
  return (
    <a
      {...props}
      className={`glow-on-hover ${className || ''}`}
    >
      {children}
    </a>
  );
};

export default GlowButton;