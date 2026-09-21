import { test, expect } from '@playwright/test';

test.only("Find the product from search", async ({ page }) => {

  await page.goto("https://www.amazon.com/");

  await page.waitForLoadState()
  const titleBeforeSearch = await page.title();
  console.log('This is page title before search:', titleBeforeSearch);

  await page.getByRole("searchbox", { name: "Search Amazon" }).fill("yoga mat");
  await page.keyboard.press("Enter"); // Search and enter the Product name

  // Wait for navigation/results to load before reading anything post-search
  await page.waitForLoadState("load");

  const titleAfterSearch = await page.title();
  console.log('This is page title after search:', titleAfterSearch);

  // const secondprod = page.getByRole("link", { name: "Sponsored Ad - Retrospec Solana Yoga Mat Thick 1/2in Non-Slip Workout Mat with Nylon Strap - 72x24in Exercise Mat for Pilates, Stretching & Fitness - BPA Free, Easy Clean" });

  await expect(page).toHaveTitle(/yoga mat/i);

  // await secondprod.click();
});