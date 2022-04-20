export class Player {
  score: number = 0;
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  wonPoint(): void {
    this.score += 1;
  }
}
