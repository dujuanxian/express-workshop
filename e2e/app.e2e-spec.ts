import { ExpressPage } from './app.po';

describe('express App', () => {
  let page: ExpressPage;

  beforeEach(() => {
    page = new ExpressPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
