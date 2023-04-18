import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("not-found-page")
export class NotFoundPage extends LitElement {
  render() {
    return html`<h1>404 Page</h1> `;
  }

  static styles = css`
    :host {
      max-width: 900px;
      min-width: 600px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
  `;
}
