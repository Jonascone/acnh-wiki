import React from "react";
import { Items, Category as SourceSheet } from "../../types/items";
import itemsRaw from "../../data/items.json";
import { useParams, useSearchParams } from "react-router-dom";
import GridItem from "../GridItem";

const items: Items[] = itemsRaw as Items[];

type DataParams = {
  sourceSheet?: SourceSheet;
  page: number;
  perPage: number;
};

const SourceSheetEntries = Object.entries(SourceSheet);
const lookupSourceSheetValue = (key: string) => {
  const entry = SourceSheetEntries.find(([_key]) => _key === key);
  return entry && entry[1];
};

const Item = ({
  name,
  sourceSheet,
  variants: [{ sell, image, closetImage, storageImage, inventoryImage }],
}: Items) => {
  const itemImage = image || closetImage || storageImage || inventoryImage;
  return (
    <GridItem key={name}>
      <div className="flex flex-col">
        <p>{name}</p>
        <p>Sells for: {sell}</p>
        <span className="p-2 bg-pink-100 rounded-lg">{sourceSheet}</span>
      </div>
      {itemImage && <img className="w-32" alt={name} src={itemImage} />}
    </GridItem>
  );
};

const getCreaturesData = ({ sourceSheet, page, perPage = 50 }: DataParams) => {
  return items
    .filter(({ sourceSheet: _sourceSheet }) => _sourceSheet === sourceSheet)
    .slice((page - 1) * perPage, page * perPage);
};

type GridParams = {
  sourceSheet: SourceSheet;
};

const Grid = () => {
  const { sourceSheet: sourceSheetKey } = useParams<GridParams>();
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {creaturesData.map(Item)}
    </div>
  );
};

export default Grid;
