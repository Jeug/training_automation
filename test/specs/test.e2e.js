import { expect, driver } from "@wdio/globals";
import SearchPage from "../pageobjects/search.page.js";
import HomePage from "../pageobjects/home.page.js";
import ProductPage from "../pageobjects/product.page.js";
import Page from "../pageobjects/page.js";

describe("Search page", () => {
  // beforeEach(async () => {
  //   console.log("beforeEach");
  // });
  // before(async () => {
  //   console.log("before");

  //   // await SearchPage.open();
  //   // await SearchPage.acceptCookies();
  // });
  it("should redirect on product page after click on product", async () => {
    // await SearchPage.open();
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
    // await driver.pause(3000);
    await SearchPage.clickMultipleProducts(4);
    await driver.pause(3000);
  });
});
