import { Character } from '@app/core';

export interface CharacterState{
  loading: boolean;
  allCharacters: Character[];
  characters: ReadonlyArray<Character>;
  details: Array<Character>;
  info: any;
  currentPage: number;
}
