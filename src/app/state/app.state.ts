import { ActionReducerMap } from "@ngrx/store";
import { CharacterState } from "../core/interfaces/character.state";
import { itemsReducer } from "./reducers/items.reducers";

export interface AppState{
  characters: CharacterState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  characters: itemsReducer
}

