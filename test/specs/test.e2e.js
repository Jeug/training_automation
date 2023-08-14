import SearchPage from "../pageobjects/search.page.js";
import ProductPage from "../pageobjects/product.page.js";
import CartPage from "../pageobjects/cart.page.js";

describe("Search page", () => {
  beforeEach(
    "Open website on search page and accept cookies if needed",
    async () => {
      await ProductPage.open();
      await SearchPage.acceptNeededCookies();
    }
  );
  it.skip("should redirect on product page after click on product", async () => {
    await SearchPage.clickProductByTitle(
      "Klassenregeln, soziales Lernen (Wir essen keine Mitschüler)"
    );
    await ProductPage.assertUrlByMaterialId("902299");
  });

  it.skip("should add to cart product after click Material ansehen button from search page", async () => {
    await SearchPage.addToCartMultipleProducts(4);
  });
  it.skip("should choose 3, 5, 6 class in the filter", async () => {
    await SearchPage.pickOptionsFromFilter("c-3. Klasse");
    await SearchPage.pickOptionsFromFilter("c-4. Klasse");
    await SearchPage.pickOptionsFromFilter("c-7. Klasse");
  });
  it("should add product to cart and validate material by author, title and price", async () => {
    await ProductPage.addProductToCart();
    const title = await (await ProductPage.materialTitle).getText();
    const price = await (await ProductPage.materialPrice).getText();
    const author = await (await ProductPage.materialAuthor).getText();
    await ProductPage.goToCart();
    await CartPage.open();
    await CartPage.validateMaterialInTheBasket(author, title, price);
  });
});
