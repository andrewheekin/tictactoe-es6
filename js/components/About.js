class About {
  constructor() {
    this.data = 'some data';
  }

  render() {
    let html = `
      <h1>Simple page with ${ this.data }</h1>
    `;
    return html;
  }
}

export default About;