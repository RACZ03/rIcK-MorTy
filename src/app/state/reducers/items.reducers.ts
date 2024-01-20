import { createReducer, on } from '@ngrx/store';
import { Character, CharacterState } from '@app/core';
import { deleteDetailList, loadItemsLoading, loadItemsSuccess, removeDetailList } from '../actions/items.actions';
import { addDetailList } from '../actions/items.actions';

export const initialState: CharacterState = {
  loading: false,
  characters: [],
  details: []
};

export const itemsReducer = createReducer(
  initialState,
  on(loadItemsLoading, (state) => {
    return { ...state, loading: true };
  }),
  on(loadItemsSuccess, (state, { characters }) => {
    const transformedDetails = characters.map(transformDetail);
    return { ...state, loading: false, characters: transformedDetails };

  }),
  on(addDetailList, (state, { detail }) => {
    return { ...state, details: [...state.details, detail] };
  }),
  on(removeDetailList, (state, { detail }) => {
    console.log(state.details);
    return {... state, details: state.details.filter((item: any) => item.id !== detail.id)};
  }),
  on(deleteDetailList, (state) => {
    return { ...state, details: [] };
  }),
);

function transformDetail(detail: any): any {
  return { ...detail, checked: false };
}
