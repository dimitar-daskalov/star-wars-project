export interface StarWarsCharacter {
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
}

export interface StarWarsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: StarWarsCharacter[];
}
