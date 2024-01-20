import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, catchError, map, EMPTY } from "rxjs";
import { CharacterService } from "@app/core";


@Injectable()
export class ItemsEffects {

  constructor(
    private actions$: Actions,
    private service: CharacterService
  ) { }

  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType('[Character List] Load character'),
    mergeMap(() => this.service.searchCharacter()
    .pipe(
      map(resp => ({type: '[Character List] Load character Success', characters: resp.results})),
      catchError(() => EMPTY)
    ))
  )
  );

}
