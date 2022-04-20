import { TennisGame } from './TennisGame';
import { Player } from './Player';

export class TennisGame3 implements TennisGame {
  player1: Player;
  player2: Player;

  constructor(player1Name: string, player2Name: string) {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
  }

  getScore(): string {
    let s: string;
    if (this.player1.score < 4 && this.player2.score < 4 && !(this.player1.score + this.player2.score === 6)) {
      const p: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
      s = p[this.player1.score];
      return (this.player1.score === this.player2.score) ? s + '-All' : s + '-' + p[this.player2.score];
    } else {
      if (this.player1.score === this.player2.score)
        return 'Deuce';
      s = this.player1.score > this.player2.score ? this.player1.name : this.player2.name;
      return (((this.player1.score - this.player2.score) * (this.player1.score - this.player2.score)) === 1) ? 'Advantage ' + s : 'Win for ' + s;
    }
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.player1.wonPoint();
    else
      this.player2.wonPoint();
  }
}
