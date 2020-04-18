import {IndexPage} from './index.po';
import {browser, by, element, logging} from 'protractor';

// browser.executeScript('window.scrollTo(0, document.body.scrollHeight)');

describe('Listado veterinarios', () => {
  let page: IndexPage;

  beforeEach(() => {
    page = new IndexPage();
  });

  it('Debe iniciar sesión y listar los veterinarios', () => {
    page.navigateTo();
    browser.executeScript('window.localStorage.removeItem(\'access_token\')');
    page.navigateTo();

    browser.driver.manage().window().setSize(1536, 824);
    element(by.css('ul:nth-of-type(4)>li:nth-of-type(1)>a')).click();
    element(by.css('input:nth-of-type(1)')).click();
    // @ts-ignore
    element(by.css('input:nth-of-type(1)')).clear().sendKeys('palinaParticular');
    element(by.css('input:nth-of-type(2)')).click();
    // @ts-ignore
    element(by.css('input:nth-of-type(2)')).clear().sendKeys('hola');
    element(by.css('form>button:nth-of-type(1)')).click();


    element(by.css('li:nth-of-type(4)>a')).click(); // LISTADO DE VETERINARIOS

    browser.sleep(1000);
    // FIN
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.WARNING,
    } as logging.Entry));
  });
});
