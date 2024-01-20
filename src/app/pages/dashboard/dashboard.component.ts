import { Component, OnInit } from '@angular/core';
import { CharacterService, Character, AlertService } from '@app/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectDetail, selectLoading, loadItemsLoading, deleteDetailList } from '@app/state';

type RequestInfo = {
  next: string | null;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  public characters: Character[] = [];
    info: RequestInfo = {
    next: null
  };
  private pageNum = 1;
  private query = '';
  private hideScrollHeight = 200;
  private showScrollHeight = 500;
  public detailObservable$: Observable<any> = new Observable();
  public loading$: Observable<boolean> = new Observable();
  private detail: Character[] = [];
  public showDetail: boolean = false;

  constructor(
    private service: CharacterService,
    private store: Store<any>,
    private alertSvc: AlertService
  ) {
    this.loading$ = this.store.select(selectLoading);
    this.detailObservable$ = this.store.select(selectDetail);
  }

  ngOnInit() {

    this.detailObservable$.subscribe((detail: Character[]) => {
      this.detail = detail;
    });

    this.store.dispatch(loadItemsLoading())
  }

  public viewDetails(){
    if (this.detail.length < 1) {
      this.alertSvc.shorAlert(4, '', 'No has seleccionado ningun personaje');
      return;
    }

    if (this.detail.length > 3) {
      this.alertSvc.shorAlert(3, '', 'Solo puedes seleccionar 3 personajes');
      return;
    }

    this.showDetail = true;

  }

  public cleanDetail() {
    this.store.dispatch(deleteDetailList());
    this.showDetail = false;
  }

}
