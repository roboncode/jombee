import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('lit-counter')
export class LitCounter extends LitElement {
  // static override styles = css`
  //   :host {
  //     display: block;
  //     border: solid 1px gray;
  //     padding: 16px;
  //     max-width: 800px;
  //   }
  // `;

  // no shadow dom
  protected override createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  override render() {
    return html`
      <h1>${this.sayHello(this.name)} from Lit!</h1>
      <button @click=${this._onClick} part="button">Lit Count: ${this.count}</button>
      <slot></slot>
    `;
  }

  private _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count'));
  }

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  sayHello(name: string): string {
    return `Hello, ${name}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-counter': LitCounter;
  }
}
