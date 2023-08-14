import { expect } from "@wdio/globals";
import Page from "./page.js";

class CartPage extends Page {
  get authorName() {
    return $(".author-name");
  }
  get productTitle() {
    return $(".lmp-h-5");
  }
  get productPrice() {
    return $(".digits");
  }

  async validateMaterialInTheBasket(authorName, productTitle, productPrice) {
    console.log(`Data = ${authorName}, ${productTitle}, ${productPrice}`);
    await expect(await this.authorName).toHaveText(authorName);
    await expect(await this.productTitle).toHaveText(productTitle);
    await expect(await this.productPrice).toHaveText(productPrice);
  }
  async open() {
    await super.open("warenkorb?cartTest=0");
  }
}
export default new CartPage();
