import { test, expect } from '@playwright/test';

test.describe('OrangeHRM Capstone - Full Automation', () => {

  test.beforeEach(async ({ page }) => {
    // LOGIN - Common for all
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL(/.*dashboard/);
  });

  test('Scenario 1 - Buzz Post Creation', async ({ page }) => {
    // Dashboard -> Buzz
    await page.locator("//span[text()='Buzz']").click();
    await page.waitForTimeout(2000);

    const buzzInput = page.locator("textarea[placeholder=\"What's on your mind?\"]");
    
    await buzzInput.fill("Capstone Project Update: Playwright Automation Completed! 🚀 #OrangeHRM #Testing");

await page.locator('.oxd-buzz-post button.oxd-button--main').click();

await page.waitForTimeout(3000);
    

    // Validation
    await expect(page.locator('.oxd-buzz-post').first()).toBeVisible();
    console.log("✅ Buzz Posted Successfully");
  });

  test('Scenario 2 - Leave Apply / My Info', async ({ page }) => {
    // Nee 2 options il ethelum edukkalam, randum kodukkunnu

    // OPTION A: Leave Apply (Trainer nu kooduthal ishtapettath)
    await page.locator("//span[text()='Leave']").click();
    await page.getByRole('link', { name: 'Apply' }).click();
    await page.waitForTimeout(2000);

    await page.locator('.oxd-select-text').first().click();
    await page.locator('span').filter({ hasText: 'CAN - Personal' }).click();

    await page.locator('(//input[@placeholder="yyyy-dd-mm"])[1]').fill('2026-09-25');
    await page.locator('(//input[@placeholder="yyyy-dd-mm"])[2]').fill('2026-09-26');

    await page.getByRole('button', { name: 'Apply' }).click();
    await page.waitForTimeout(2000);
    console.log("✅ Leave Applied Successfully");

    // OPTION B: My Info Update (Backup)
    // await page.locator("//span[text()='My Info']").click();
    // await page.locator("//a[text()='Contact Details']").click();
    // await page.locator("(//input[contains(@class,'oxd-input')])[2]").fill("Meppayur, Kerala");
    // await page.locator("(//button[@type='submit'])[1]").click();
  });
  test('Scenario 3 - Add Employee', async ({ page }) => {
  await page.locator("//span[text()='PIM']").click();
  await page.waitForTimeout(2000);
  await page.locator("//button[normalize-space()='Add']").click();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('First Name').fill('Remlath');
  await page.getByPlaceholder('Last Name').fill('Naeem');
  await page.locator("//button[@type='submit']").click();
  await page.waitForTimeout(3000);
  await expect(page.locator("//h6[contains(text(),'Personal Details')]")).toBeVisible();
  console.log("✅ Employee Added Successfully");
});
});