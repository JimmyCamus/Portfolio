import { ReactNode } from "react";

type GlowContainerType = {
  children: ReactNode;
  from: string;
  to: string;
};

const GlowContainer = ({ children, from, to }: GlowContainerType) => {
  return (
    <div className="relative">
      <div
        className={`absolute rounded-full -inset-1 bg-gradient-to-bl from-${from} to-${to} blur opacity-40`}
      ></div>
      <div className="relative bg-transparent">{children}</div>
    </div>
  );
};

export default GlowContainer;
