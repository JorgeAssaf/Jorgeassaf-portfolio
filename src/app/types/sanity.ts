export interface Projects {
  image: string;
  technologies: Technology[];
  name: string;
  slug: string;
  github: string;
  url: string;
  content: Content[];
  _id: string;
  _createdAt: Date;
}

export interface Content {
  markDefs: any[];
  children: Child[];
  _type: string;
  style: string;
  _key: string;
}

export interface Child {
  _type: string;
  marks: any[];
  text: string;
  _key: string;
}

export interface Technology {
  name: string;
  image: string;
}
