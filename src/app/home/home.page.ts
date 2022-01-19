import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @Input()
  rangeValue: number = 50
  winValue: number = this.randomRange(1, 100)
  maxPoints: number = 500
  points: number = 0
  umbral: number = 10
  trys: number = 5

  constructor() {}

  play() {
    this.computePoints()
    this.winValue = this.randomRange(1, 100)
    this.trys--
    if (this.trys <= 0) this.reset()
  }

  reset() {
    this.rangeValue = 50
    this.points = 0
    this.trys = 5
    this.winValue = this.randomRange(1, 100)
  }

  computePoints() {
    const distance = Math.abs(this.winValue - this.rangeValue)
    if (distance <= this.umbral) {
      this.points += Math.floor(this.maxPoints * (this.umbral - distance) / this.umbral)
    }
  }

  randomRange(from: number, to: number): number {
    return Math.floor(Math.random() * (to + 1 - from)) + from
  }

}
