import SearchPage from "../pageobjects/search.page.js";
import ProductPage from "../pageobjects/product.page.js";

describe("Search page", () => {
  it("should redirect on product page after click on product", async () => {
    await SearchPage.open();
    await SearchPage.acceptCookies();
    await SearchPage.clickProductByTitle(
      "Mutmacher - Kärtchen (kleines Geschenk für den Schulstart oder zwischendurch)"
    );
    await ProductPage.fetchTitle(
      "Mutmacher - Kärtchen (kleines Geschenk für den Schulstart oder zwischendurch)",
      "893829"
    );
  });

  it("should add to cart product after click Material ansehen button", async () => {
    await SearchPage.open();
    await SearchPage.addToCartMultipleProducts(4);
  });
});
