import {Module} from '../core/module'

export class ShapeModule extends Module {
  constructor() {
    super('random_shape', 'Random shape');
  }
  trigger() {
    if (!document.querySelector('.module')) {
      const div = document.createElement('div');
      div.className = 'module';
      div.innerText = 'You choosed Random shape module';
      document.body.append(div);
    } else {
      const div = document.querySelector('.module')
      div.innerText = 'You choosed Random shape module';
    }
  }
}