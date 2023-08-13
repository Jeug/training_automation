import { $ } from "@wdio/globals";
import Page from "./page.js";

class SearchPage extends Page {
  get addToCartButtonSelectors() {
    return $$(".material-long button");
  }
  get continueShoppingButtonSelector() {
    return $("button.custom-button.transparent-yellow.float-right");
  }
  async clickMultipleProducts(count) {
    for (let i = 0; i < count; i++) {
      (await this.addToCartButtonSelectors[i]).click();
      await this.continueShoppingButtonSelector.click();
    }
  }

  async clickProductByTitle(productTitle) {
    await $(`[title="${productTitle}"]`).click();
  }

  async open() {
    await super.open("suchergebnisse");
  }
}

export default new SearchPage();
