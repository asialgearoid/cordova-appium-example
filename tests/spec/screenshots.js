const fs = require('fs');

describe('Screenshots', () => {
  it('shows text is visible', () => {
    browser.timeouts('implicit', 5000);

    // We need to switch to the native context for the screenshot to work
    browser.context('NATIVE_APP');

    // browser.screenshot returns the screenshot as a base64 string
    const textVisibleScreenshot = browser.screenshot();
    fs.writeFileSync('screenshot-1.png', textVisibleScreenshot.value, 'base64');
  })
});