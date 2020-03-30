import { browser, by, element } from 'protractor';

export class VetPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }
}