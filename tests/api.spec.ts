import { test, expect } from '@playwright/test';
import { ApiHelper } from '../utils/apiHelper';

test.describe('User API', () => {
  let apiHelper: ApiHelper;

  test.beforeEach(async ({ request }) => {
    apiHelper = new ApiHelper(request);
  });

  test('GET user returns 200 and correct id', async () => {
    const response = await apiHelper.getUser(2);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data.id).toBe(2);
  });

  test('POST creates a new user', async () => {
    const response = await apiHelper.createUser('John Doe', 'QA Engineer');
    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.name).toBe('John Doe');
    expect(body.job).toBe('QA Engineer');
  });
});
