import { StravaAppPage } from './app.po';

describe('strava-app App', () => {
  let page: StravaAppPage;

  beforeEach(() => {
    page = new StravaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
