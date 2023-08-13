import { browser } from "@wdio/globals";

export default class Page {
  open(path) {
    return browser.url(`https://eduki.com/de/${path}`);
  }

  async acceptCookies() {
    const acceptCookieButton = await $("#usercentrics-root").shadow$(
      'button[data-testid="uc-save-button"]'
    );
    await acceptCookieButton.waitForClickable();
    await acceptCookieButton.click();
    await browser.pause(3000);
  }
}
