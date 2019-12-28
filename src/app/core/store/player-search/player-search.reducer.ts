import { Action } from '@ngrx/store';
import { PlayerSearchActions, AddResultsAction } from './player-search.actions';
import {
  IPlayerSearch,
  CSearchTypes,
  CPresetTypes
} from './player-search.interfaces';

export * from './player-search.interfaces';

const initialState: IPlayerSearch = {
  
  query: '',
  filter: '',
  searchType: CSearchTypes.VIDEO,
  queryParams: {
    preset: '',
    duration: -1
  },
  presets: [
    { label: 'Any', value: '' },
    { label: 'Albums', value: CPresetTypes.FULL_ALBUMS },
    { label: 'Live', value: CPresetTypes.LIVE },
    { label: 'Zumba', value: CPresetTypes.ZUMBA },
    { label: 'Dance', value: CPresetTypes.DANCE },
    { label: 'Strong zumba', value: CPresetTypes.STRONGBYZUMBA },
    { label: 'Motivation', value: CPresetTypes.MOTIVATIONAL },
    { label: 'Sitar', value: CPresetTypes.SITAR },
    { label: 'Vedic chants', value: CPresetTypes.VEDIC },
    { label: 'For Kids', value: CPresetTypes.KIDS },
    { label: 'Bollywood', value: CPresetTypes.BOLLYWOOD } ,
    { label: 'Cult fit', value: CPresetTypes.CULT },
    { label: 'Workout', value: CPresetTypes.WORKOUT },
    { label: 'ielts', value: CPresetTypes.IELTS },
    { label: 'cbsc', value: CPresetTypes.CBSE },
    // { label: 'Sex', value: CPresetTypes.SEX }
    { label: 'Locking', value: CPresetTypes.LOCKINGDANCE },
    { label: 'Popping', value: CPresetTypes.POPPINGDANCE },
    { label: 'Hip pop', value: CPresetTypes.HIPPOP },
    { label: 'TML', value: CPresetTypes.TML },
    { label: 'Salsa', value: CPresetTypes.SALSA },     
    { label: 'History', value: CPresetTypes.HISTORY } 
  ],
  pageToken: {
    next: '',
    prev: ''
  },
  isSearching: false,
  results: []
};
interface UnsafeAction {
  payload: any;
  type?: any;
}

export function search(
  state: IPlayerSearch = initialState,
  action: any
): IPlayerSearch {
  switch (action.type) {
    case PlayerSearchActions.UPDATE_QUERY: {
      return { ...state, query: action.payload };
    }

    case PlayerSearchActions.SEARCH_NEW_QUERY:
      return {
        ...state,
        query: action.payload,
        isSearching: true
      };

    case PlayerSearchActions.UPDATE_QUERY_PARAM:
      const queryParams = { ...state.queryParams, ...action.payload };
      return { ...state, queryParams };

    case PlayerSearchActions.SEARCH_RESULTS_RETURNED:
      const { nextPageToken, prevPageToken } = action.payload;
      const statePageToken = state.pageToken;
      const pageToken = {
        next: nextPageToken || statePageToken.next,
        prev: prevPageToken || statePageToken.prev
      };
      return { ...state, pageToken };

    case PlayerSearchActions.SEARCH_STARTED:
      return { ...state, isSearching: true };

    case AddResultsAction.type:
      return AddResultsAction.handler(state, action.payload);

    case PlayerSearchActions.RESET_RESULTS:
      return { ...state, results: [] };

    case PlayerSearchActions.SEARCH_TYPE_UPDATE: {
      return {
        ...state,
        searchType: action.payload
      };
    }
    case PlayerSearchActions.PLAYLISTS_SEARCH_START.action: {
      return { ...state, isSearching: true };
    }

    default:
      // upgrade policy - for when the initialState has changed
      return { ...initialState, ...state };
  }
}
