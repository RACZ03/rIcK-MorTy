import { createReducer, on } from '@ngrx/store';
import { CharacterState } from '@app/core';
import { addDetailList, cleanAllCharacters, deleteDetailList, loadItemsLoading, loadItemsSuccess, loadNextPage, removeDetailList } from '../actions/items.actions';

export const initialState: CharacterState = {
  loading: false,
  allCharacters: [],
  characters: [],
  details: [],
  info: null,
  currentPage: 1
};

export const characterReducer = createReducer(
  initialState,
  on(loadItemsLoading, (state) => {
    return { ...state, loading: true };
  }),
  on(loadItemsSuccess, (state, { characters, info }) => {
    return {
      ...state,
      loading: false,
      characters: characters,
      allCharacters: [...state.allCharacters, ...characters],
      info: info
    };
  }),
  on(addDetailList, (state, { detail }) => {
    return { ...state, details: [...state.details, detail] };
  }),
  on(removeDetailList, (state, { detail }) => {
    return { ...state, details: state.details.filter((item: any) => item.id !== detail.id) };
  }),
  on(deleteDetailList, (state) => {
    return { ...state, details: [] };
  }),
  on(cleanAllCharacters, (state) => {
    return { ...state, allCharacters: [], characters: [], info: null, currentPage: 1, query: '', details: [] };
  }),
  on(loadNextPage, (state) => {
    const nextPage = state.currentPage + 1;
    return { ...state, currentPage: nextPage };
  }),
);
