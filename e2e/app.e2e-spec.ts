import { Net.Mobilewebapp.JbmdlfesappPage } from './app.po';

describe('net.mobilewebapp.jbmdlfesapp App', function() {
  let page: Net.Mobilewebapp.JbmdlfesappPage;

  beforeEach(() => {
    page = new Net.Mobilewebapp.JbmdlfesappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
