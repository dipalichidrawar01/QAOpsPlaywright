import { test, expect } from '../fixtures/pageFixtures';
import users from '../test-data/users.json';

test.describe('Login flow', () => {
  test('valid user can log in and see dashboard', async ({ loginPage, dashboardPage }) => {
    await loginPage.login(users.validUser.username, users.validUser.password);

    // Web-first assertion: auto-retries until visible or timeout
    await expect(dashboardPage.successHeader).toBeVisible();
    expect(await dashboardPage.isLoadedSuccessfully()).toBeTruthy();
  });

  test('invalid password shows error message', async ({ loginPage }) => {
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('password');
  });
});
