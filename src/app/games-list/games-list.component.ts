import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GAMES } from '../mock-games';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  games = GAMES;
  selectedGame: Game;

  constructor() { }

  ngOnInit() {
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
  }

}
