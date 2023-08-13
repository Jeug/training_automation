import { $, expect } from "@wdio/globals";
import Page from "./page.js";

class ProductPage extends Page {
  get h1ProductTitle() {
    return $(".title");
  }
  get productInfoBlock() {
    return $(".m-info");
  }

  async fetchTitle(productTitle, materialId) {
    await expect(this.h1ProductTitle).toHaveText(productTitle);
    await expect(this.productInfoBlock).toHaveTextContaining(materialId);
  }
}

export default new ProductPage();
