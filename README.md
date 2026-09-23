# Mini Playwright + TypeScript Framework

A small practice framework demonstrating Page Object Model, custom fixtures,
data-driven UI testing, and API testing — built to have real, explainable
code for interview discussions.

## Structure
```
playwright-framework/
├── tests/              # *.spec.ts test files
│   ├── login.spec.ts   # UI test using POM + fixtures + JSON test data
│   └── api.spec.ts     # API test using Playwright's request context
├── pages/               # Page Object classes
│   ├── LoginPage.ts
│   └── DashboardPage.ts
├── fixtures/            # Custom fixtures extending base `test`
│   └── pageFixtures.ts
├── utils/                # Reusable helpers (API calls)
│   └── apiHelper.ts
├── test-data/            # External test data (JSON)
│   └── users.json
└── playwright.config.ts  # Central config (baseURL, retries, reporter, etc.)
```

## How to run
```bash
npm install
npx playwright install     # installs browsers
npm test                   # run all tests
npm run test:headed        # run with browser visible
npm run report              # open HTML report
```

## Design choices (talking points for interview)

- **Page Object Model**: each page has its own class with locators + actions,
  so if the UI changes, only the page object needs updating — not every test.
- **Locators**: uses `getByLabel` / `getByRole` (Playwright's recommended
  locator strategy) instead of brittle CSS/XPath selectors.
- **Fixtures**: `pageFixtures.ts` extends Playwright's base `test` to
  auto-provide `loginPage` and `dashboardPage` objects, removing repeated
  setup code from every test.
- **Test data separation**: credentials/data live in `test-data/users.json`,
  not hardcoded in the test — makes it data-driven and easy to extend.
- **Web-first assertions**: `expect(locator).toBeVisible()` auto-retries
  until the condition is true or times out, avoiding flaky `sleep()` calls.
- **API testing**: uses Playwright's built-in `request` context (no need
  for a separate tool like REST Assured) via `ApiHelper`, demonstrating
  GET/POST calls and status/body assertions.
- **Config**: `playwright.config.ts` centralizes baseURL, retries, and
  reporting (HTML report) — a real project would add multiple environments
  (QA/Staging) and CI project configs here.

## CI/CD (GitHub Actions)

`.github/workflows/playwright.yml` runs the full suite automatically:
- On every push and pull request to `main`
- On manual trigger from the GitHub Actions tab (`workflow_dispatch`)

Steps: checkout code → set up Node 20 → `npm ci` (clean install from
`package-lock.json`) → install Playwright browsers → run tests → upload the
HTML report as a downloadable artifact (even on failure, so a failing run is
debuggable from GitHub without re-running locally).

**Talking point:** "Once tests are pushed, GitHub Actions runs them headless
on every PR before merge, and I can review the HTML report artifact directly
from the Actions tab — no need to reproduce failures locally first."

## What I'd add next (good to mention if asked "how would you extend this")
- Environment-based `.env` config for QA/Staging/Prod, injected via GitHub Secrets
- Combined UI + API tests (e.g., create data via API, then verify in UI)
- Allure reporting for richer test reports
- Slack/Teams notification step on CI failure
- Test sharding across multiple CI jobs for faster runs
