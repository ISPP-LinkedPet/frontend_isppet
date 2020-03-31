import { LoginPage } from './0login.po';
import { browser, logging, element, by } from 'protractor';

describe('Breeding module', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should list', () => {
    page.navigateTo();
    browser.driver.manage().window().setSize(1920, 1040);
    element(by.css('nav>div:nth-of-type(1)>ul>li:nth-of-type(2)>a')).click();
    expect(element(by.css('h1')).getText()).toEqual('Lista de crianza');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.WARNING,
    } as logging.Entry));
  });
});