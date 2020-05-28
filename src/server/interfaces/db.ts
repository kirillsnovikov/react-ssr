export interface IBase {
  id: number;
  title: string;
}

export interface IPost {
  description: string;
  shortDescription: string;
  enabled: boolean;
  publishedAt: string;
}

export interface IMeta {
  title: string;
  description: string;
  robots: string;
  yandex: string;
  googlebot: string;
  google: string;
  googleSiteVerification: string;
}

export interface ITimestamps {
  createdAt: Date;
  updatedAt: Date;
}
