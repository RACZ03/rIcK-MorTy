import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '@app/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient
  ) { }

  searchCharacter(value: string = '', page: number = 1 ): Observable<any> {
    try {
      const filter = `${ environment.baseUrlAPI }/character/?name=${value}&page=${page}`;
      return this.http.get<Character[]>(filter);
    } catch (error) {
      return new Observable();
    }
  }

  getCharacterDetails(id: number) {
    return this.http.get<Character>(`${ environment.baseUrlAPI }/character/${id}`);
  }

}
