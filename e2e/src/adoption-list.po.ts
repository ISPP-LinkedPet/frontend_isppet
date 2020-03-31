import { browser, by, element } from 'protractor';

export class AdoptionPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }
}