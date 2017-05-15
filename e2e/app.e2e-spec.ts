import { FmsPage } from './app.po';

describe('fms App', () => {
  let page: FmsPage;

  beforeEach(() => {
    page = new FmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
