class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>Hello Angular from plain WC</h1>`;
  }
}

customElements.define('my-component', MyComponent);
