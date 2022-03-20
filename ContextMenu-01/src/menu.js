import {Menu} from './core/menu';
import {BackgroundModule} from '../src/modules/background.module';
import {ClicksModule} from '../src/modules/clicks.module';
import {ShapeModule} from '../src/modules/shape.module';

export class ContextMenu extends Menu {
  constructor() {
    super('.menu');

    //Registration modules
    this.modules = [
      new BackgroundModule(),
      new ClicksModule(),
      new ShapeModule(),
    ];

    //Add ContextMenu items (Add in order by registraton)
    this.modules.forEach( item => {
      this.add(item);
    });

    // Add event listener on body - reaction on right mouse button
    document.body.addEventListener('contextmenu', event => {
      event.preventDefault();

      // Open (show) ContextMenu
      this.open();

      // Adjust ContextMenu position
      const pageWidth = document.documentElement.scrollWidth;
      const pageHeight = document.documentElement.scrollHeight;

      this.el.style.left = (event.clientX + this.el.scrollWidth) <= pageWidth
        ? `${event.clientX}px`
        : `${event.clientX - this.el.scrollWidth}px`;

      this.el.style.top = (event.clientY + this.el.scrollHeight) <= pageHeight
        ? `${event.clientY}px`
        : `${event.clientY - this.el.scrollHeight}px`;
    });

    // Add event listener on body - reaction on left mouse button
    document.body.addEventListener('click', event => {
      this.modules.find( module => module.type === event.target.dataset.type)?.trigger();

      //Close ContextMenu after select
      this.close();
    });

  }
  open() {
    this.el.classList.add('open')
  }

  close() {
    this.el.classList.remove('open')
  }

  add(module){
    this.el.innerHTML += module.toHTML();
  }
}