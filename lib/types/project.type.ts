export type Project = {
  id: string;
  name: string;
  description: string;
  type: ProjectType;
  stack: string[];
  link: string;
  image: string;
  repos: ProjectRepo
};

export type ProjectRepo = {
  front?: string;
  back?: string;
};

export enum ProjectType {
  Back = 0,
  Front = 1,
  Full = 2,
}
