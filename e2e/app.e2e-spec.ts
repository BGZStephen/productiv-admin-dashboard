import { ProductivAdminDashboardPage } from './app.po';

describe('productiv-admin-dashboard App', () => {
  let page: ProductivAdminDashboardPage;

  beforeEach(() => {
    page = new ProductivAdminDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
