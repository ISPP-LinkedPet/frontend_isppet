import {IndexPage} from './index.po';
import {browser, by, element, logging} from 'protractor';

// browser.executeScript('window.scrollTo(0, document.body.scrollHeight)');

describe('Listado crianza', () => {
  let page: IndexPage;

  beforeEach(() => {
    page = new IndexPage();
  });

  it('Debe iniciar sesion, listar las crianzas, filtrar y acceder a un detalle', () => {
    page.navigateTo();

    browser.driver.manage().window().setSize(1536, 824);
    element(by.css('ul:nth-of-type(4)>li:nth-of-type(1)>a')).click();
    element(by.css('fieldset>div:nth-of-type(1)>input')).click();
    // @ts-ignore
    element(by.css('fieldset>div:nth-of-type(1)>input')).clear().sendKeys('palinaParticular');
    // @ts-ignore
    element(by.css('div:nth-of-type(2)>input')).clear().sendKeys('hola');
    element(by.css('fieldset>button:nth-of-type(1)')).click();

    element(by.css('ul:nth-of-type(1)>li:nth-of-type(2)>a')).click();
    element(by.css('form>div:nth-of-type(1)>div:nth-of-type(1)>input')).click();
    // @ts-ignore
    element(by.css('form>div:nth-of-type(1)>div:nth-of-type(1)>input')).clear().sendKeys('23.5');
    element(by.css('slide-panel>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)')).click();

    // IR AL DETALLE
    browser.sleep(500);
    browser.executeScript('window.scrollTo(0, document.body.scrollHeight)');
    browser.sleep(500);

    element(by.css('div:nth-of-type(3)>div>button')).click();
    browser.sleep(1000);
    // FIN

    page.navigateTo();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.WARNING,
    } as logging.Entry));
  });
});
