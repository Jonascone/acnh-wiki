import React from "react";
import { Creatures, SourceSheet } from "../../types/creatures";
import creaturesRaw from "../../data/creatures.json";
import { useParams, useSearchParams } from "react-router-dom";
import GridItem from "../GridItem";

const creatures: Creatures[] = creaturesRaw as Creatures[];

type CreaturesDataParams = {
  sourceSheet?: SourceSheet;
  page: number;
  perPage: number;
};

const SourceSheetEntries = Object.entries(SourceSheet);
const lookupSourceSheetValue = (key: string) => {
  const entry = SourceSheetEntries.find(([_key]) => _key === key);
  return entry && entry[1];
};

const CreatureItem = ({
  name,
  sourceSheet,
  critterpediaImage,
  sell,
}: Creatures) => (
  <GridItem key={name}>
    <div className="flex flex-col">
      <p>{name}</p>
      <p>Sells for: {sell}</p>
      <span className="p-2 bg-pink-100 rounded-lg">{sourceSheet}</span>
    </div>
    <img alt={name} src={critterpediaImage} />
  </GridItem>
);

const getCreaturesData = ({
  sourceSheet,
  page,
  perPage = 50,
}: CreaturesDataParams) => {
  return creatures
    .filter(({ sourceSheet: _sourceSheet }) => _sourceSheet === sourceSheet)
    .slice((page - 1) * perPage, page * perPage);
};

type CreaturesGridParams = {
  sourceSheet: SourceSheet;
};

const CreaturesGrid = () => {
  const { sourceSheet: sourceSheetKey } = useParams<CreaturesGridParams>();
  const [searchParams] = useSearchParams({
    page: "1",
    perPage: "50",
  });

  const page = Number(searchParams.get("page"));
  const perPage = Number(searchParams.get("perPage"));
  if (!sourceSheetKey) {
    return null;
  }

  const sourceSheet = lookupSourceSheetValue(sourceSheetKey);

  const creaturesData = getCreaturesData({
    sourceSheet,
    page,
    perPage,
  });

  return (
    <div className="grid grid-cols-4 gap-4">
      {creaturesData.map(CreatureItem)}
    </div>
  );
};

export default CreaturesGrid;
