import { $, expect, driver } from "@wdio/globals";
import Page from "./page.js";

class ProductPage extends Page {
  get productMaterialIdField() {
    return $(".m-info").$("*=Material-ID:");
  }

  async assertUrlByMaterialId(materialId) {
    await expect(driver).toHaveUrlContaining(materialId);
  }
}

export default new ProductPage();
