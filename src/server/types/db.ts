export type Timestamps = {
  createdAt: Date;
  updatedAt: Date;
};

export type Primary = {
  id: number;
  title: string;
};

export type Base = Primary & Timestamps;
