export interface IStarWarsCharacter {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
  [key: string]: string | string[];
}

export interface IStarWarsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IStarWarsCharacter[];
}

export type Validation = "password" | "username";

export interface IInput {
  value: string;
  isTouched: boolean;
  error: string;
  isValid: boolean;
}
