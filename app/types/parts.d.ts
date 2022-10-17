export type TPart = {
  id: number;
  name: string;
  name_ja: string;
  codepen_id: string;
};

export type TParts = TPart[];

export type TPartsData = {
  id: number;
  type: string;
  type_ja: string;
  parts: TPart[];
};

export type TPartsDatas = TPartsData[];
