import { ActionReducerMap } from "@ngrx/store";
import { CharacterState } from "../core/interfaces/character.state";
import { characterReducer } from "./reducers/items.reducers";

export interface AppState{
  allCharacters: CharacterState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  allCharacters: characterReducer
}

