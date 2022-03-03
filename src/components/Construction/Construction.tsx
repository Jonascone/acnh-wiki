import React from "react";
import { Construction } from "../../types/construction";
import constructionRaw from "../../data/construction.json";
import { useSearchParams } from "react-router-dom";
import GridItem from "../GridItem";

const construction = constructionRaw as Construction[];

type DataParams = {
  page: number;
  perPage: number;
};

const Item = ({ name, buy, image }: Construction) => {
  return (
    <GridItem key={name}>
      <div className="flex flex-col">
        <p>{name}</p>
        <p>Buy for: {buy}</p>
      </div>
      {image && <img alt={name} src={image} />}
    </GridItem>
  );
};

const getData = ({ page, perPage = 50 }: DataParams) => {
  return construction.slice((page - 1) * perPage, page * perPage);
};

const Grid = () => {
  const [searchParams] = useSearchParams({
    page: "1",
    perPage: "50",
  });

  const page = Number(searchParams.get("page"));
  const perPage = Number(searchParams.get("perPage"));

  const creaturesData = getData({
    page,
    perPage,
  });

  return (
    <div className="grid grid-cols-2 gap-4">{creaturesData.map(Item)}</div>
  );
};

export default Grid;
