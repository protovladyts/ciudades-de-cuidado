import { ReactNode } from 'react';
import { focusFont } from '../config';

export const Paragraph = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={`${focusFont.className} py-2 text-xl lg:text-3xl text-center drop-shadow-2xl ${
        className ?? ""
      }`}
    >
      {children}
    </p>
  );
};
