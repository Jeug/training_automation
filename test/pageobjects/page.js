import { browser } from "@wdio/globals";

export default class Page {
  get isCookiePopupDisplayed() {
    return $("#usercentrics-root").shadow$(".sc-csuSiG").isExisting();
  }
  get acceptNeededCookieButtonSelector() {
    return $("#usercentrics-root").shadow$(
      'button[data-testid="uc-save-button"]'
    );
  }

  get acceptAllCookieButtonSelector() {
    return $("#usercentrics-root").shadow$(
      'button[data-testid="uc-accept-all-button"]'
    );
  }

  async open(path) {
    await browser.url(`https://eduki.com/de/${path}`);
    await browser.pause(3000);
  }

  async acceptNeededCookies() {
    if (await this.isCookiePopupDisplayed) {
      await this.acceptNeededCookieButtonSelector.waitForClickable();
      await this.acceptNeededCookieButtonSelector.click();
    } else {
      console.log("No cookie popup");
    }
  }

  async acceptAllCookies() {
    if (this.isCookiePopupDisplayed) {
      await this.acceptAllCookieButtonSelector.waitForDisplayed();
      await this.acceptAllCookieButtonSelector.click();
    } else {
      console.log("No cookie popup");
    }
  }
}
