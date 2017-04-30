import { FireBaseApplicationPage } from './app.po';

describe('fire-base-application App', () => {
  let page: FireBaseApplicationPage;

  beforeEach(() => {
    page = new FireBaseApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
