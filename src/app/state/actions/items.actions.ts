import { createAction, props, createFeatureSelector, createSelector } from '@ngrx/store';
import { Character, CharacterState } from '@app/core';

export interface LoadNextPagePayload {
  page: number;
  query: string;
}

export const loadItemsLoading = createAction('[Character List] Load character');

export const loadItemsSuccess = createAction(
  '[Character List] Load character Success',
  props<{ characters: Character[], info: any }>()
);

export const addDetailList = createAction(
  '[Character List] Add Detail character',
  props<{ detail: Character }>()
);

export const removeDetailList = createAction(
  '[Character List] Remove Detail character',
  props<{ detail: Character }>()
);

export const deleteDetailList = createAction(
  'Character List] Delete Detail character'
);

export const cleanAllCharacters = createAction(
  '[Character List] Clean All character'
);

export const loadNextPage = createAction(
  '[Character] Load Next Page',
  props<LoadNextPagePayload>()
);

export const selectCharacterState = createFeatureSelector<CharacterState>('character');

export const selectCharacters = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.characters,
);


