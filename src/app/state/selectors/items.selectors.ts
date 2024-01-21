import { CharacterState } from "@app/core";
import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectAllCharactersFeature = (state: AppState) => state.allCharacters;

export const selectListCharacters = createSelector(
  selectAllCharactersFeature,
  (state: CharacterState) => state.characters
);

export const selecAlltListCharacters = createSelector(
  selectAllCharactersFeature,
  (state: CharacterState) => state.allCharacters
);

export const selectLoading = createSelector(
  selectAllCharactersFeature,
  (state: CharacterState) => state.loading
);

export const selectDetail = createSelector(
  selectAllCharactersFeature,
  (state: CharacterState) => state.details
);
