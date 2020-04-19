# Shadow DOM Snapshot Equal Test

## Run locally

```bash
$ cd hx-alert
$ yarn test
```

## Test Shadow DOM Snapshot

Add a test to verify `<hx-alert>` Shadow DOM equals Snapshot.

```js
  it('[TEST FAILS] shadow DOM should equal snapshot', async () => {
    const el = await fixture(html`
      <hx-alert title="foo"></hx-alert>
    `);

    // test fails to generate and test snapshot equal check
    expect(el).shadowDom.to.equalSnapshot();
  });
```

### Output

Fails on check.

```
01:14 $ yarn test
yarn run v1.17.3
warning ../../../package.json: No license field
$ karma start --coverage

START:
19 04 2020 01:20:15.316:WARN [filelist]: Pattern "/projects/sandbox/shadow-dom-snapshot-equal-test/hx-alert/__snapshots__/**/*.md" does not match any file.
19 04 2020 01:20:15.343:INFO [karma-server]: Karma v4.4.1 server started at http://0.0.0.0:9876/
19 04 2020 01:20:15.343:INFO [launcher]: Launching browsers ChromeHeadlessNoSandbox with concurrency unlimited
19 04 2020 01:20:15.347:INFO [launcher]: Starting browser ChromeHeadless
19 04 2020 01:20:15.732:INFO [HeadlessChrome 79.0.3945 (Mac OS X 10.13.6)]: Connected on socket zjHZPbb1T8e4MFqaAAAA with id 1407623
  HxAlert
    ✔ has a default title "Hey there" and counter 5
    ✔ increases the counter on button click
    ✔ can override the title via attribute
    ✔ passes the a11y audit
    ✖ [TEST FAILS] shadow DOM should equal snapshot
HeadlessChrome 79.0.3945 (Mac OS X 10.13.6) HxAlert [TEST FAILS] shadow DOM should equal snapshot FAILED
	TypeError: Cannot read property 'type' of null
	    at Proxy.call (node_modules/@open-wc/semantic-dom-diff/chai-dom-diff.js:91:26)
	    at Proxy.equalSnapshot (node_modules/@open-wc/semantic-dom-diff/chai-dom-diff.js:133:37)
	    at Proxy.equalSnapshot (node_modules/chai/chai.js:7824:25)
	    at Context.<anonymous> (test/hx-alert.test.js:46:29)

Finished in 0.163 secs / 0.046 secs @ 01:20:17 GMT-0500 (Central Daylight Time)

SUMMARY:
✔ 4 tests completed
✖ 1 test failed

FAILED TESTS:
  HxAlert
    ✖ [TEST FAILS] shadow DOM should equal snapshot
      HeadlessChrome 79.0.3945 (Mac OS X 10.13.6)
    TypeError: Cannot read property 'type' of null
        at Proxy.call (node_modules/@open-wc/semantic-dom-diff/chai-dom-diff.js:91:26)
        at Proxy.equalSnapshot (node_modules/@open-wc/semantic-dom-diff/chai-dom-diff.js:133:37)
        at Proxy.equalSnapshot (node_modules/chai/chai.js:7824:25)
        at Context.<anonymous> (test/hx-alert.test.js:46:29)

TOTAL: 1 FAILED, 4 SUCCESS
```

```js

=============================== Coverage summary ===============================
Statements   : 100% ( 8/8 )
Branches     : 100% ( 0/0 )
Functions    : 100% ( 5/5 )
Lines        : 100% ( 8/8 )
================================================================================
error Command failed with exit code 1.
```

Test doesn't render or check Shadow DOM Snapshot.

## Test Shadow DOM with arbitrary value

Renders the Shadow DOM.

```html
      + expected - actual

      -<h2>
      -  foo Nr. 5!
      -</h2>
      -<button>
      -  increment
      -</button>
      +bazz
```

### Output

```
19 04 2020 01:36:51.128:INFO [karma-server]: Karma v4.4.1 server started at http://0.0.0.0:9876/
19 04 2020 01:36:51.129:INFO [launcher]: Launching browsers ChromeHeadlessNoSandbox with concurrency unlimited
19 04 2020 01:36:51.131:INFO [launcher]: Starting browser ChromeHeadless
19 04 2020 01:36:51.453:INFO [HeadlessChrome 79.0.3945 (Mac OS X 10.13.6)]: Connected on socket gw5Bhq9DXfurXcEMAAAA with id 7711801
  HxAlert
    ✔ has a default title "Hey there" and counter 5
    ✔ increases the counter on button click
    ✔ can override the title via attribute
    ✔ passes the a11y audit
    ✖ [TEST FAILS] shadow DOM should equal snapshot (skipped)
    ✖ shadow DOM should FAIL arbitrary value check
HeadlessChrome 79.0.3945 (Mac OS X 10.13.6) HxAlert shadow DOM should FAIL arbitrary value check FAILED
	AssertionError: expected '<h2>\n  foo Nr. 5!\n</h2>\n<button>\n  increment\n</button>\n' to equal 'bazz\n'
	    at assertHtmlEquals (node_modules/@open-wc/semantic-dom-diff/chai-dom-diff.js:49:17)
	    at Proxy.handleDom (node_modules/@open-wc/semantic-dom-diff/chai-dom-diff.js:70:9)
	    at Proxy.equal (node_modules/chai/chai.js:9039:33)
	    at Context.<anonymous> (test/hx-alert.test.js:54:29)

Finished in 0.161 secs / 0.047 secs @ 01:36:53 GMT-0500 (Central Daylight Time)

SUMMARY:
✔ 4 tests completed
ℹ 1 test skipped
✖ 1 test failed

FAILED TESTS:
  HxAlert
    ✖ shadow DOM should FAIL arbitrary value check
      HeadlessChrome 79.0.3945 (Mac OS X 10.13.6)
    AssertionError: expected '<h2>\n  foo Nr. 5!\n</h2>\n<button>\n  increment\n</button>\n' to equal 'bazz\n'

      + expected - actual

      -<h2>
      -  foo Nr. 5!
      -</h2>
      -<button>
      -  increment
      -</button>
      +bazz

    at assertHtmlEquals (node_modules/@open-wc/semantic-dom-diff/chai-dom-diff.js:49:17)
    at Proxy.handleDom (node_modules/@open-wc/semantic-dom-diff/chai-dom-diff.js:70:9)
    at Proxy.equal (node_modules/chai/chai.js:9039:33)
    at Context.<anonymous> (test/hx-alert.test.js:54:29)


TOTAL: 1 FAILED, 4 SUCCESS
```

```js
=============================== Coverage summary ===============================
Statements   : 100% ( 8/8 )
Branches     : 100% ( 0/0 )
Functions    : 100% ( 5/5 )
Lines        : 100% ( 8/8 )
================================================================================
error Command failed with exit code 1.
```
