import {Module} from '../core/module'

export class ClicksModule extends Module {
  constructor() {
    super('clicks_counter', 'Clicks counter');
  }
  trigger() {
    if (!document.querySelector('.module')) {
      const div = document.createElement('div');
      div.className = 'module';
      div.innerText = 'You choosed Clicks counter module';
      document.body.append(div);
    } else {
      const div = document.querySelector('.module')
      div.innerText = 'You choosed Clicks counter module';
    }
  }
}