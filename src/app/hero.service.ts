import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  /**
   * Get all heroes.
   */
  public getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage('HeroService: fetched heroes.');
    return of(HEROES);
  }

  /**
   * Get hero by id.
   * @param id The ID of the hero
   */
  public getHero(id: number): Observable<Hero> {
    this.messageService.addMessage('HeroService: fetched hero id=${id}.');
    return of(HEROES.find(hero => hero.id === id));
  }

}
