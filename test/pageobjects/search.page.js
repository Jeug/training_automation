import { $ } from "@wdio/globals";
import Page from "./page.js";

class SearchPage extends Page {
  get addToCartButtonSelectors() {
    return $$(".material-long button");
  }
  get continueShoppingButtonSelector() {
    return $("button.custom-button.transparent-yellow.float-right");
  }
  get openCartButtonSelector() {
    return $(".warenkorb-menu");
  }
  async pickOptionsFromFilter(option) {
    const filterOption = await $(`[for="${option}"]`);
    await filterOption.waitForClickable();
    await filterOption.click();
    await expect(await $(`[id="${option}"]`)).toBeChecked();
  }

  async addToCartMultipleProducts(count) {
    for (let i = 0; i <= count; i++) {
      await (await this.addToCartButtonSelectors[i]).click();
      await (await this.continueShoppingButtonSelector).click();
    }
  }

  async clickProductByTitle(productTitle) {
    await $(`[title="${productTitle}"]`).waitForClickable();
    await $(`[title="${productTitle}"]`).click();
  }

  async open() {
    await super.open("suchergebnisse?query=17537");
  }
}

export default new SearchPage();
