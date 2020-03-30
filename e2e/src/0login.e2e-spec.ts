import { LoginPage } from './0login.po';
import { browser, logging, element, by } from 'protractor';

describe('Login module', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should log in', () => {
    page.navigateTo();
    browser.driver.manage().window().setSize(1920, 1040);
    element(by.css('li:nth-of-type(8)>a')).click();
    element(by.css('fieldset>div:nth-of-type(1)>input')).clear().then(() => {
      element(by.css('fieldset>div:nth-of-type(1)>input')).sendKeys('palina');
    });
    element(by.css('div:nth-of-type(2)>input')).clear().then(() => {
      element(by.css('div:nth-of-type(2)>input')).sendKeys('hola');
    });
    element(by.css('fieldset>button:nth-of-type(1)')).click();
    expect(element(by.css('nav>div:nth-of-type(1)>ul>li:nth-of-type(2)>a')).getText()).toEqual('Crianza');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});