import { CharacterState } from "@app/core";
import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectCharactersFeature = (state: AppState) => state.characters;

export const selectListCharacters = createSelector(
  selectCharactersFeature,
  (state: CharacterState) => state.characters
);

export const selectLoading = createSelector(
  selectCharactersFeature,
  (state: CharacterState) => state.loading
);

export const selectDetail = createSelector(
  selectCharactersFeature,
  (state: CharacterState) => state.details
);
