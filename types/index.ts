import { ReactElement, ReactNode } from "react";

export type Item = {
  $id?: string;
  /**
   * @internal
   */
  $ref?: {
    file: string;
  };
  type: "page";
  name: ReactNode;
  url: string;
  external?: boolean;
  description?: ReactNode;
  icon?: ReactElement;
};
