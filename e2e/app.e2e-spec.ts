import { NgLanguagesPage } from './app.po';

describe('ng-languages App', () => {
  let page: NgLanguagesPage;

  beforeEach(() => {
    page = new NgLanguagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
