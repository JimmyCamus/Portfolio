import { ReactNode } from "react";

export type GlowContainerType = {
  children: ReactNode;
  from: string;
  to: string;
};

export type SectionTitleType = {
  children: ReactNode;
  gradientFrom: string;
  gradientTo: string;
};
