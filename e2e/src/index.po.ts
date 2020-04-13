import { browser, by, element } from 'protractor';

export class IndexPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }
}
