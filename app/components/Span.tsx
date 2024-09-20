import { ReactNode } from 'react';

export const Span = ({
  children,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <span className="font-bold text-yellow-400 italic">
      {children}
    </span>
  );
};
