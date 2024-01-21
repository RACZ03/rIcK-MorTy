import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CharacterService, Character, AlertService } from '@app/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectDetail, selectLoading, deleteDetailList, loadNextPage, cleanAllCharacters } from '@app/state';

type RequestInfo = {
  next: string | null;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  @ViewChild('content') contentElement!: ElementRef;
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
  showBtn: boolean = false;

  constructor(
    private service: CharacterService,
    private store: Store<any>,
    private alertSvc: AlertService
  ) {
    this.loading$ = this.store.select(selectLoading);
    this.detailObservable$ = this.store.select(selectDetail);
  }

  ngOnInit() {
    this.getDataFromService(this.query, this.pageNum);
  }

  private getDataFromService(query: string, page: number): void {
    this.service.searchCharacter(query, page).subscribe((res: any) => {
      const { info, results } = res;
      this.characters = [...this.characters, ...results];
      this.info = info;
      this.loadData(false);
    }, (error: any) => {
      console.log('No data found');
      }
    );
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition > this.showScrollHeight) {
      this.pageNum++;
      this.loadData();
    }

    if (scrollPosition > this.hideScrollHeight) {
      this.showBtn = true;
    } else {
      this.showBtn = false;
    }
  }

  private shouldLoadNextPage(): boolean {
    return this.info.next !== null && !this.loading();
  }

  private loading(): boolean {
    let loading = false;
    this.loading$.subscribe((load: boolean) => {
      loading = load;
    });
    return loading;
  }

  private loadData(band: boolean = true): void {
    if (this.shouldLoadNextPage()) {
      this.store.dispatch(loadNextPage({ page: this.pageNum, query: this.query }));
      if (!band) return;

      this.service.searchCharacter(this.query, this.pageNum).subscribe((res: any) => {
        const { info, results } = res;
        this.characters = [...this.characters, ...results];
        this.info = info;
      }, (error: any) => {
        this.info.next = null;
      });
    }
  }

  public search(event: any): void {
    // console.log(event.target.value);
    this.query = event.target.value;
    this.store.dispatch(cleanAllCharacters());
    this.characters = [];
    // clean state
    this.getDataFromService(this.query, this.pageNum);
  }

  public viewDetails(){
    this.detailObservable$.subscribe((detail: Character[]) => {
      this.detail = detail;
      console.log(this.detail);
    });

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

  public back() {
    this.contentElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
