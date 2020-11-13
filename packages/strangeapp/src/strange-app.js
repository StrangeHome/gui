import {LitElement, html} from '@polymer/element';

export class StrangeApp extends LitElement {

    render() {
        return html`<p>Hello World!</p>`;
    }
};

customElements.define('strange-app', StrangeApp);