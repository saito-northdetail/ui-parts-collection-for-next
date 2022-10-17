import { TPartsDatas } from "../../types/parts";
const data: TPartsDatas = require('../../public/data/parts.json');

export const getAllData = () => {
  return data;
};

export const getParts = (type: string) => {
  return data ? data.find((part) => part.type === type) : null;
};

export const getPart = (type: string, partId: number) => {
  const partsForType = getParts(type);
  return partsForType
    ? partsForType.parts.find((part: { id: number }) => part.id === partId)
    : null;
};
