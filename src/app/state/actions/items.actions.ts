import { createAction, props } from '@ngrx/store';
import { Character } from '@app/core';

export const loadItemsLoading = createAction(
  '[Character List] Load character'
);

export const loadItemsSuccess = createAction(
  '[Character List] Load character Success',
  props<{ characters: Character[] }>()
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
  'Character List] Delete Detail character',
);

export const toggleDetailChecked = createAction(
  '[Character List] Toggle Detail Checked',
  props<{ detail: Character }>()
);
