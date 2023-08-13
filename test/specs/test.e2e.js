import { driver } from "@wdio/globals";
import SearchPage from "../pageobjects/search.page.js";
import ProductPage from "../pageobjects/product.page.js";

describe("Search page", () => {
  beforeEach(async () => {
    await SearchPage.open();
  });
  it("should redirect on product page after click on product", async () => {
    await SearchPage.acceptCookies();
    await SearchPage.clickProductByTitle(
      "Mutmacher - Kärtchen (kleines Geschenk für den Schulstart oder zwischendurch)"
    );
    await ProductPage.assertUrlByMaterialId("893829");
  });

  it("should add to cart product after click Material ansehen button", async () => {
    await driver.pause(3000);
    await SearchPage.addToCartMultipleProducts(4);
  });
});
