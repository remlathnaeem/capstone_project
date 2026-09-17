const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('OrangeHRM Capstone - Login Test with POM and .env', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  
  // Direct correct credentials - no .env confusion
  await loginPage.login('Admin', 'admin123');
  
  await page.waitForTimeout(4000);
  await expect(page).toHaveURL(/.*dashboard/, { timeout: 15000 });
});

test('Invalid Login Test - Should show error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('WrongUser', 'WrongPass123');
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});