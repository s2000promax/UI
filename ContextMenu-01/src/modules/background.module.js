import {Module} from '../core/module';
import {random} from '../utils'

export class BackgroundModule extends Module {
  constructor() {
    super('background', 'Fill background');
  }
  trigger() {
    if (!document.querySelector('.module')) {
      const div = document.createElement('div');
      div.className = 'module';
      div.innerText = 'You choosed Background module';
      document.body.append(div);
    } else {
      const div = document.querySelector('.module')
      div.innerText = 'You choosed Background module';
    }

    document.body.style.backgroundColor = `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, ${random(0, 10) / 10})`;
  }
}