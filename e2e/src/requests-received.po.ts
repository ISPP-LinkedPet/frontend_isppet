import { browser, by, element } from 'protractor';

export class RequestPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }
}