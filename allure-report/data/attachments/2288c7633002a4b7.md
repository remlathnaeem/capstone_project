# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> OrangeHRM Capstone - Login Test with POM and .env
- Location: tests\login.spec.js:4:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /.*dashboard/
Received string:  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × locator resolved to <html>…</html>
       - unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- alert:
  - text: 
  - paragraph: Invalid credentials
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text:  Password
- textbox "Password"
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { LoginPage } = require('../pages/LoginPage');
  3  | 
  4  | test('OrangeHRM Capstone - Login Test with POM and .env', async ({ page }) => {
  5  |   const loginPage = new LoginPage(page);
  6  |   await loginPage.goto();
  7  |   
  8  |   const user = process.env.USERNAME || 'Admin';
  9  |   const pass = process.env.PASSWORD || 'admin123';
  10 |   
  11 |   await loginPage.login(user, pass);
  12 |   await page.waitForTimeout(3000);
> 13 |   await expect(page).toHaveURL(/.*dashboard/);
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  14 |   await expect(page.getByText('Dashboard').first()).toBeVisible();
  15 | });
  16 | 
  17 | test('Invalid Login Test - Should show error', async ({ page }) => {
  18 |   const loginPage = new LoginPage(page);
  19 |   await loginPage.goto();
  20 |   await loginPage.login('WrongUser', 'WrongPass123');
  21 |   await expect(page.getByText('Invalid credentials')).toBeVisible();
  22 | });
```