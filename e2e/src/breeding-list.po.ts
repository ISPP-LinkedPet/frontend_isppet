import { browser, by, element } from 'protractor';

export class BreedingPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }
}