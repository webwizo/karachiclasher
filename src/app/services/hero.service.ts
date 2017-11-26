import { Injectable } from '@angular/core';
import { Observable } from "rxjs/observable";
import { of } from 'rxjs/observable/of'
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Jsonp, Response } from '@angular/http';

import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  private heroesUrl = 'http://localhost:8002/heroes.php';

  constructor(private jsonp: Jsonp, private http: HttpClient, private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add("HeroService: " + message);
  }

  getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    //return of(HEROES);
    //return this.http.get<Hero[]>(this.heroesUrl);
    return this.jsonp.get(this.heroesUrl)
      .map((res: Response) => {
        return res.json() || {};
      });
  }

  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
