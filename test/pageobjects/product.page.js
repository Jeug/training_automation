import { $, expect, driver } from "@wdio/globals";
import Page from "./page.js";

class ProductPage extends Page {
  get addToCartButtonFromProductPageSelector() {
    return $(".price-container .custom-button");
  }
  get goToCartButtonSelector() {
    return $("button.custom-button.yellow.float-right");
  }
  get materialTitle() {
    return $(".title");
  }
  get materialPrice() {
    return $(".current-price");
  }
  get materialAuthor() {
    return $(".ellipsis");
  }
  async assertUrlByMaterialId(materialId) {
    await expect(driver).toHaveUrlContaining(materialId);
  }
  async addProductToCart() {
    await (
      await this.addToCartButtonFromProductPageSelector
    ).waitForClickable();
    await (await this.addToCartButtonFromProductPageSelector).click();
  }
  async goToCart() {
    await (await this.goToCartButtonSelector).waitForClickable();
    await (await this.goToCartButtonSelector).click();
    await expect(driver).toHaveUrlContaining("warenkorb");
  }
  async open() {
    await super.open("material/17537/vorlagen-und-hintergruenden-1");
  }
}

export default new ProductPage();
