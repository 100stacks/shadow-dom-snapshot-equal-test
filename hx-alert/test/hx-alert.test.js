import { html, fixture, expect } from '@open-wc/testing';

import '../hx-alert.js';

describe('HxAlert', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`
      <hx-alert></hx-alert>
    `);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`
      <hx-alert></hx-alert>
    `);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`
      <hx-alert title="attribute title"></hx-alert>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <hx-alert></hx-alert>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });

  it('[TEST FAILS] shadow DOM should equal snapshot', async () => {
    const el = await fixture(html`
      <hx-alert title="foo"></hx-alert>
    `);

    // test fails to generate and test snapshot equal check
    expect(el).shadowDom.to.equalSnapshot();
  });

  it('shadow DOM should FAIL arbitrary value check', async () => {
    const el = await fixture(html`
      <hx-alert title="foo"></hx-alert>
    `);

    expect(el).shadowDom.to.equal('bazz');
  });

  it('chai rendered Shadow DOM should equal element Shadow Root DOM', async () => {
    const el = await fixture(html`
      <hx-alert title="foo"></hx-alert>
    `);
    const sr = el.shadowRoot.innerHTML;

    expect(el).shadowDom.to.equal(sr);
  });
});
