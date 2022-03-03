import React from "react";
import { Link } from "react-router-dom";
import { SourceSheet } from "../../types/all";
import { Category as Items } from "../../types/items";
import { SourceSheet as Creatures } from "../../types/creatures";

type GridItemProps = {
  sourceSheet: string;
  name: string;
};

const CreatureKeys = Object.keys(Creatures);
const ItemKeys = Object.keys(Items);

const getLinkTo = (sourceSheet: string) => {
  if (CreatureKeys.includes(sourceSheet)) {
    return `creatures/${sourceSheet}`;
  }

  if (ItemKeys.includes(sourceSheet)) {
    return `items/${sourceSheet}`;
  }

  return sourceSheet;
};

const GridItem = ({ sourceSheet, name }: GridItemProps) => (
  <Link to={`/${getLinkTo(sourceSheet)}`}>
    <div className="py-16 border-2">
      <p className="text-xl text-center">{name}</p>
    </div>
  </Link>
);

const SourceSheetKeys = Object.keys(SourceSheet);
const SourceSheetValues = Object.values(SourceSheet);

const TypeGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-2 sm:gap-4">
    {SourceSheetKeys.map((sourceSheet: string, i: number) => (
      <GridItem
        key={sourceSheet}
        sourceSheet={sourceSheet}
        name={SourceSheetValues[i]}
      />
    ))}
  </div>
);

export default TypeGrid;
