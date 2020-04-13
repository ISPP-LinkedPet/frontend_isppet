import {IndexPage} from './index.po';
import {browser, by, element, logging} from 'protractor';

// browser.executeScript('window.scrollTo(0, document.body.scrollHeight)');

describe('Login', () => {
  let page: IndexPage;

  beforeEach(() => {
    page = new IndexPage();
  });

  it('Debe iniciar sesion', () => {
    page.navigateTo();

    browser.driver.manage().window().setSize(1536, 824);
    element(by.css('ul:nth-of-type(4)>li:nth-of-type(1)>a')).click();
    element(by.css('fieldset>div:nth-of-type(1)>input')).click();
    // @ts-ignore
    element(by.css('fieldset>div:nth-of-type(1)>input')).clear().sendKeys('palinaParticular');
    // @ts-ignore
    element(by.css('div:nth-of-type(2)>input')).clear().sendKeys('hola');
    element(by.css('fieldset>button:nth-of-type(1)')).click();

    page.navigateTo();
    browser.sleep(20000); // Espera para que arranque heroku en el caso de estar dormido el servidor
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.WARNING,
    } as logging.Entry));
  });
});
