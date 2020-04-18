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

    element(by.css('ul:nth-of-type(1)>li:nth-of-type(2)>a')).click(); // LISTADO DE CRIANZA
    element(by.css('form>div:nth-of-type(1)>div:nth-of-type(1)>input')).click(); // CLICK EN INPUT DE PRECIO
    // @ts-ignore
    element(by.css('form>div:nth-of-type(1)>div:nth-of-type(1)>input')).clear().sendKeys('23.5'); // INTRODUCIR PRECIO
    element(by.css('app-breeding-list')).click(); // CLICK FUERA

    browser.sleep(500);
    browser.executeScript('window.scrollTo(0, document.body.scrollHeight)');
    browser.sleep(500);

    element(by.css('div:nth-of-type(3)>div>button')).click(); // DETALLE ANIMAL
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
