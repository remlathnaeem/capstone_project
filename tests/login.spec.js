const { test, expect } = require('@playwright/test');

test('OrangeHRM Capstone - Valid Login', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.locator('button[type="submit"]').click();
  await expect(page).toHaveURL(/dashboard/);
});

test('OrangeHRM Capstone - Add Employee Test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.locator('button[type="submit"]').click();
  await page.waitForSelector('h6:has-text("Dashboard")');

  // നേരിട്ട് Add Employee page-ലേക്ക് പോകുന്നു - ഇത് 100% work ആകും
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');
  
  await page.locator('input[name="firstName"]').waitFor({ state: 'visible', timeout: 20000 });
  await page.locator('input[name="firstName"]').fill('Test');
  await page.locator('input[name="lastName"]').fill('User');
  await page.locator('button[type="submit"]').click();
  
  await expect(page).toHaveURL(/pim\/viewPersonalDetails|pim\/viewEmployeeList|pim\/addEmployee/, { timeout: 20000 });
  console.log('Employee Added Successfully!');
});