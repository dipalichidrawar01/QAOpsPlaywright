import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly successHeader: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.successHeader = page.getByRole('heading', { name: 'Logged In Successfully' });
    this.logoutButton = page.getByRole('link', { name: 'Log out' });
  }

  async isLoadedSuccessfully(): Promise<boolean> {
    return this.successHeader.isVisible();
  }

  async logout() {
    await this.logoutButton.click();
  }
}
