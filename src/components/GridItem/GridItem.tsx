import React, { PropsWithChildren } from "react";

const GridItem = ({ children }: PropsWithChildren<Record<string, unknown>>) => (
  <div className="flex flex-row justify-between p-4 shadow">{children}</div>
);

export default GridItem;
