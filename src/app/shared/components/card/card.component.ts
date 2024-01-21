import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Character } from '@app/core';
import { Observable } from 'rxjs';
import {
  AppState,
  addDetailList,
  removeDetailList,
  selecAlltListCharacters,
} from '@app/state';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  public characters$: Observable<any> = new Observable();
  public detail$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.characters$ = this.store.select(selecAlltListCharacters);
  }

  ngDuckec() {
    this.characters$ = this.store.select(selecAlltListCharacters);
  }

  public toggleCheckbox(index: number, detail: Character) {
    let checked: boolean;
    const card:any = document.getElementById(`card-${index}`);
    if (card.classList.contains('card-checked')) {
      card.classList.remove('card-checked');
      checked = false;
    } else {
      card.classList.add('card-checked');
      checked = true;
    }

    if (!checked) {
      this.store.dispatch(removeDetailList({ detail }));
    } else {
      console.log('detail', detail);
      this.store.dispatch(addDetailList({ detail }));
    }
  }
}
