import { UserstorePage } from './app.po';

describe('userstore App', function() {
  let page: UserstorePage;

  beforeEach(() => {
    page = new UserstorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
