import * as puppeteer from 'puppeteer';

describe('jest-image-snapshot', async () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  })

  it('default', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:6006');
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
})
