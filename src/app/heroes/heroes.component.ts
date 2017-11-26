import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from './../mock-heroes';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {

  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    //this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.messageService.add("HeroService: clicked hero " + hero.name);
    this.selectedHero = hero;
  }

}
