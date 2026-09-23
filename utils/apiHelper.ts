import { APIRequestContext } from '@playwright/test';

// Centralizes API calls so both API specs and UI specs (for data setup)
// can reuse the same request logic instead of duplicating fetch code.
export class ApiHelper {
  constructor(private request: APIRequestContext) {}

  async getUser(userId: number) {
    const response = await this.request.get(`https://reqres.in/api/users/${userId}`);
    return response;
  }

  async createUser(name: string, job: string) {
    const response = await this.request.post('https://reqres.in/api/users', {
      data: { name, job },
    });
    return response;
  }
}
