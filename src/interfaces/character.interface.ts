export interface Characters {
  characters:  Character[];
  currentPage: number;
  pageSize:    number;
  total:       number;
}

export interface Character {
  id:          number;
  name:        string;
  images:      string[];
  debut:       Debut;
  family:      Family;
  jutsu:       string[];
  natureType?: string[];
  personal:    Personal;
  rank?:       Rank;
  tools?:      string[];
  voiceActors: VoiceActors;
}

export interface Debut {
  manga:     string;
  anime:     string;
  novel?:    string;
  movie?:    string;
  game:      string;
  ova?:      string;
  appearsIn: AppearsIn;
}

export enum AppearsIn {
  AnimeMangaGame = "Anime, Manga, Game",
  AnimeMangaNovelGameMovie = "Anime, Manga, Novel, Game, Movie",
}

export interface Family {
  father?:                      string;
  "great-grandfather"?:         string;
  grandfather?:                 string;
  grandmother?:                 string;
  uncle?:                       string;
  cousin?:                      string;
  "genetic template/parent"?:   string;
  "clone/brother"?:             string;
  "pet "?:                      string;
  son?:                         string;
  grandson?:                    string;
  granddaughter?:               string;
  wife?:                        string;
  granduncle?:                  string;
  "grandmother "?:              string;
  mother?:                      string;
  aunt?:                        string;
  sister?:                      string;
  "first cousin once removed"?: string;
  "adoptive brother"?:          string;
  host?:                        string;
  brother?:                     string;
  niece?:                       string;
  lover?:                       string;
  creator?:                     string;
  "genetic template"?:          string;
}

export interface Personal {
  birthdate?:      string;
  sex:             Sex;
  age?:            Age;
  height?:         Height;
  weight?:         Weight;
  bloodType?:      string;
  occupation?:     string[] | string;
  affiliation:     string[];
  team?:           string[] | string;
  clan?:           string[] | string;
  titles?:         string[];
  species?:        string;
  kekkeiGenkai?:   string[] | string;
  classification?: string[] | string;
  status?:         string;
  tailedBeast?:    string;
  partner?:        string[];
}

export interface Age {
  "Part I"?:           string;
  "Part II"?:          string;
  "Academy Graduate"?: string;
  "Chunin Promotion"?: string;
  "Blank Period"?:     string;
  "Boruto Movie"?:     string;
  "Boruto Manga"?:     string;
}

export interface Height {
  "Part I"?:       string;
  "Part II"?:      string;
  Gaiden?:         string;
  "Blank Period"?: string;
  "Boruto Movie"?: string;
  "Boruto Manga"?: string;
}

export enum Sex {
  Female = "Female",
  Male = "Male",
}

export interface Weight {
  "Part I"?:  string;
  "Part II"?: string;
}

export interface Rank {
  ninjaRank:          NinjaRank;
  ninjaRegistration?: string;
}

export interface NinjaRank {
  "Part I"?:  string;
  "Part II"?: string;
  Gaiden?:    string;
}

export interface VoiceActors {
  japanese: string[] | string;
  english:  string[] | string;
}
