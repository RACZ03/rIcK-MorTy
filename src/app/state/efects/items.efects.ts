import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { mergeMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { CharacterService } from '@app/core';
import { Store, select } from '@ngrx/store';
import { loadItemsLoading, loadItemsSuccess, loadNextPage, selectCharacterState } from '@app/state';

@Injectable()
export class CharacterEffects {

  loadNextPage$ = createEffect(() => this.actions$.pipe(
    ofType(loadNextPage),
    withLatestFrom(this.store.pipe(select(selectCharacterState))),
    mergeMap(([action, characterState]) => {
      const { page, query } = action;
      return this.characterService.searchCharacter(query, page)
        .pipe(
          map(({ results, info }) => loadItemsSuccess({ characters: results, info })),
          catchError(() => EMPTY)
        );
    })
  ));

  constructor(
    private actions$: Actions,
    private characterService: CharacterService,
    private store: Store
  ) {}
}
