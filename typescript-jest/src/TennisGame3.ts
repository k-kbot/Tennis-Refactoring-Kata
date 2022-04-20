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
    if (this.player1.score < 4 && this.player2.score < 4 && !(this.player1.score + this.player2.score === 6)) {
      const points: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
      return (this.isTie()) ? points[this.player1.score] + '-All' : points[this.player1.score] + '-' + points[this.player2.score];
    } else {
      if (this.isTie()) return 'Deuce';
      const leadingPlayerName: string = this.player1.score > this.player2.score ? this.player1.name : this.player2.name;
      return (((this.player1.score - this.player2.score) ** 2) === 1) ? 'Advantage ' + leadingPlayerName : 'Win for ' + leadingPlayerName;
    }
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.player1.wonPoint();
    else
      this.player2.wonPoint();
  }

  private isTie(): boolean {
    return this.player1.score === this.player2.score;
  }
}
