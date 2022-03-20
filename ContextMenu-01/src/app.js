import './styles.css';
import {ContextMenu} from './menu';

class App {
  init() {
    //Create Context Menu
    new ContextMenu();
  }
}

const app = new App();
app.init();
