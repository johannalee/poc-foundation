import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

import * as puppeteer from 'puppeteer';

describe('ButtonComponent', () => {
  describe('DOM', () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ButtonComponent]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ButtonComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Image Snapshot', () => {
    let browser;

    beforeEach(async () => {
      browser = await puppeteer.launch();
    });

    it('should take an image snapshot', async () => {
      const page = await browser.newPage();
      await page.goto('http://localhost:6006/?path=/story/button--with-text');
      await page.waitForSelector('#button--with-text');
      const image = await page.screenshot();

      expect(image).toMatchImageSnapshot();
    });

    afterAll(async () => {
      await browser.close();
    });
  });
});
