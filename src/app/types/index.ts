import { ReactNode } from "react";

//Card component
export type CardProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description?: string;
  annualPlan: ReactNode;
};

//AnnualPlan component
export type AnnualPlanProps = {
  value: string;
  link: string;
};

//Button component
export type ButtonProps = {
  description: string;
};
