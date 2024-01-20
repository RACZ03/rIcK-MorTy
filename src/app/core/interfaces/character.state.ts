import { Character } from '@app/core';

export interface CharacterState{
  loading: boolean;
  characters: ReadonlyArray<Character>;
  details: Array<Character>;
}
