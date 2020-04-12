import { LoginPage } from './0login.po';
import { browser, logging, element, by } from 'protractor';

describe('Login module', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should log in', () => {
    page.navigateTo();

    browser.driver.manage().window().setSize(1536, 824);
    element(by.css('ul:nth-of-type(4)>li:nth-of-type(1)>a')).click();
    element(by.css('fieldset>div:nth-of-type(1)>input')).click();
    // @ts-ignore
    element(by.css('fieldset>div:nth-of-type(1)>input')).clear().sendKeys('palinaParticular');
    // @ts-ignore
    element(by.css('div:nth-of-type(2)>input')).clear().sendKeys('hola');
    element(by.css('fieldset>button:nth-of-type(1)')).click();

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
