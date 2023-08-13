import { $ } from "@wdio/globals";
import Page from "./page.js";

class HomePage extends Page {
  get flashAlert() {
    return $("#flash");
  }
}

export default new HomePage();
