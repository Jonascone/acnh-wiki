import React from "react";
import { Villagers } from "../../types/villagers";
import villagersRaw from "../../data/villagers.json";
import { useSearchParams } from "react-router-dom";
import GridItem from "../GridItem";

const villagers = villagersRaw as Villagers[];

type DataParams = {
  page: number;
  perPage: number;
};

const Item = ({ name, photoImage }: Villagers) => {
  return (
    <GridItem key={name}>
      <div className="flex flex-col">
        <p>{name}</p>
      </div>
      {photoImage && <img alt={name} src={photoImage} />}
    </GridItem>
  );
};

const getData = ({ page, perPage = 50 }: DataParams) => {
  return villagers.slice((page - 1) * perPage, page * perPage);
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
