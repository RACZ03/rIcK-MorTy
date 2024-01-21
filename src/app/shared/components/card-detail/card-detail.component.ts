import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectDetail } from '@app/state';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  public detail$: Observable<any> = new Observable();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.detail$ = this.store.select(selectDetail);

    this.detail$.subscribe((data) => {
      // console.log(data);
    }
    );
  }

}
