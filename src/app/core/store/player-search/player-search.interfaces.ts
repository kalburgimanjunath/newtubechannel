export interface IQueryParam {
  preset: string;
  duration: number;
}
export interface IPlayerSearch {
  query: string;
  filter: string;
  searchType: string;
  queryParams: IQueryParam;
  presets: IPresetParam[];
  pageToken: {
    next: string;
    prev: string;
  };
  isSearching: boolean;
  results: any[];
}

export interface ISearchQueryParam {
  [property: string]: any;
}

export interface IPresetParam {
  label: string;
  value: CPresetTypes | string;
}

export class CSearchTypes {
  static VIDEO =  'video';
  static PLAYLIST = 'playlist';
}

export class CPresetTypes {
  static FULL_ALBUMS = 'full albums';
  static LIVE = 'live';
  static DANCE = 'dance';
  static ZUMBA = 'Zumba';
  static MOTIVATIONAL = 'Motivational';
  static STRONGBYZUMBA = 'Strong zumba';
  static BOLLYWOOD = 'Bollybeats';
  static CULT = 'Cult fit';
  static WORKOUT = 'Workout';
  // static SEX = 'Erotic sex';
  static SITAR = 'Sitar';
  static VEDIC = 'Vedic chants';
  static KIDS = 'For Kids';
  static IELTS = 'ielts';
  static CBSE = 'cbse ise ices icis';
  static LOCKINGDANCE = 'Locking dance';
  static POPPINGDANCE = 'Popping Dance';
  static HIPPOP = 'hip pop';
  static TML = 'TML Crew';
  static SALSA = 'Salsa';
  static HISTORY = 'Indian History';
}
