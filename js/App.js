import About from './components/About';

class App {
  constructor() {
    // data (private and from constructor params) and new classes declared above this.render()
    this.about = new About();

    this.render();
    
    // DOM listeners declared below this.render()
  }

  render() {
    let html = this.about.render();    
    document.getElementById('view').innerHTML = html;
  }
}

new App();