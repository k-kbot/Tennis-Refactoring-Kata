import { TennisGame } from './TennisGame';
import { Player } from './Player';

export class TennisGame1 implements TennisGame {
  readonly points = ['Love', 'Fifteen', 'Thirty', 'Forty'];
  player1: Player;
  player2: Player;

  constructor(player1Name: string, player2Name: string) {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.player1.wonPoint();
    else
      this.player2.wonPoint();
  }

  getScore(): string {
    let score: string = '';
    let tempScore: number = 0;
    if (this.isTie()) {
      if (this.player1.score <= 2) {
        return `${this.points[this.player1.score]}-All`;
      } else {
        return 'Deuce';
      }
    }
    else if (this.player1.score >= 4 || this.player2.score >= 4) {
      const minusResult: number = this.player1.score - this.player2.score;
      if (minusResult === 1) score = 'Advantage player1';
      else if (minusResult === -1) score = 'Advantage player2';
      else if (minusResult >= 2) score = 'Win for player1';
      else score = 'Win for player2';
    }
    else {
      for (let i = 1; i < 3; i++) {
        if (i === 1) tempScore = this.player1.score;
        else { score += '-'; tempScore = this.player2.score; }

        score += this.points[tempScore];
      }
    }
    return score;
  }

  private isTie(): boolean {
    return this.player1.score === this.player2.score;
  }
}
