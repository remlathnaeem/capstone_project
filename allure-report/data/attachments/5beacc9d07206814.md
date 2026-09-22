# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orangeHRM.spec.js >> OrangeHRM Capstone - Full Automation >> Scenario 1 - Buzz Post Creation
- Location: tests\orangeHRM.spec.js:15:7

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Post' }) resolved to 4 elements:
    1) <button type="submit" data-v-10d463b7="" data-v-2afe39e0="" class="oxd-button oxd-button--medium oxd-button--main">…</button> aka getByRole('button', { name: 'Post', exact: true })
    2) <button type="button" data-v-10d463b7="" data-v-33fec775="" class="oxd-button oxd-button--medium oxd-button--label-warn orangehrm-post-filters-button">…</button> aka getByRole('button', { name: ' Most Recent Posts' })
    3) <button type="button" data-v-10d463b7="" data-v-33fec775="" class="oxd-button oxd-button--medium oxd-button--text orangehrm-post-filters-button">…</button> aka getByRole('button', { name: ' Most Liked Posts' })
    4) <button type="button" data-v-10d463b7="" data-v-33fec775="" class="oxd-button oxd-button--medium oxd-button--text orangehrm-post-filters-button">…</button> aka getByRole('button', { name: ' Most Commented Posts' })

Call log:
  - waiting for getByRole('button', { name: 'Post' })

```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - generic:
    - complementary [ref=f2e4]:
      - navigation "Sidepanel" [ref=f2e5]:
        - generic [ref=f2e6]:
          - link [ref=f2e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f2e9]
          - text: 
        - generic [ref=f2e10]:
          - generic [ref=f2e11]:
            - generic [ref=f2e12]:
              - textbox "Search" [ref=f2e15]
              - button "" [ref=f2e16] [cursor=pointer]
            - separator [ref=f2e18]
          - list [ref=f2e19]:
            - listitem [ref=f2e20]:
              - link "Admin" [ref=f2e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f2e25]:
              - link "PIM" [ref=f2e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f2e41]:
              - link "Leave" [ref=f2e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f2e46]:
              - link "Time" [ref=f2e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f2e54]:
              - link "Recruitment" [ref=f2e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f2e62]:
              - link "My Info" [ref=f2e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f2e70]:
              - link "Performance" [ref=f2e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f2e80]:
              - link "Dashboard" [ref=f2e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f2e85]:
              - link "Directory" [ref=f2e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f2e90]:
              - link "Maintenance" [ref=f2e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f2e96]:
              - link "Claim" [ref=f2e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f2e105]:
              - link "Buzz" [ref=f2e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f2e110]:
      - generic [ref=f2e111]:
        - generic [ref=f2e112]:
          - text: 
          - heading "Buzz" [level=6] [ref=f2e114]
        - link [ref=f2e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f2e117] [cursor=pointer]
        - list [ref=f2e123]:
          - listitem [ref=f2e124]:
            - generic [ref=f2e125] [cursor=pointer]:
              - img "profile picture" [ref=f2e126]
              - paragraph [ref=f2e127]: Demo Source
              - generic [ref=f2e128]: 
      - navigation "Topbar Menu" [ref=f2e130]:
        - list [ref=f2e131]:
          - button "" [ref=f2e133] [cursor=pointer]
  - generic [ref=f2e135]:
    - generic [ref=f2e137]:
      - generic [ref=f2e139]:
        - paragraph [ref=f2e140]: Buzz Newsfeed
        - generic [ref=f2e141]:
          - generic [ref=f2e142]:
            - img "profile picture" [ref=f2e144]
            - generic [ref=f2e147]:
              - textbox "What's on your mind?" [active] [ref=f2e148]: "Capstone Project Update: Playwright Automation Completed! 🚀 #OrangeHRM #Testing"
              - button "Post" [ref=f2e150] [cursor=pointer]
          - separator [ref=f2e151]
          - generic [ref=f2e152]:
            - button "Share Photos" [ref=f2e153] [cursor=pointer]
            - button "Share Video" [ref=f2e155] [cursor=pointer]
        - generic [ref=f2e157]:
          - button " Most Recent Posts" [ref=f2e158] [cursor=pointer]:
            - generic [ref=f2e159]: 
            - text: Most Recent Posts
          - button " Most Liked Posts" [ref=f2e160] [cursor=pointer]:
            - generic [ref=f2e161]: 
            - text: Most Liked Posts
          - button " Most Commented Posts" [ref=f2e162] [cursor=pointer]:
            - generic [ref=f2e163]: 
            - text: Most Commented Posts
        - generic [ref=f2e164]:
          - generic [ref=f2e166]:
            - generic [ref=f2e167]:
              - generic [ref=f2e168]:
                - generic [ref=f2e169]:
                  - img "profile picture" [ref=f2e171]
                  - generic [ref=f2e172]:
                    - paragraph [ref=f2e173]: Demo Open Source
                    - paragraph [ref=f2e174]: 2026-22-09 08:12 PM
                - listitem [ref=f2e176]:
                  - button "" [ref=f2e177] [cursor=pointer]
              - separator [ref=f2e179]
            - paragraph [ref=f2e182]: Welcome all!
            - generic [ref=f2e183]:
              - generic [ref=f2e184]:
                - img [ref=f2e186] [cursor=pointer]
                - button "" [ref=f2e211] [cursor=pointer]
                - button "" [ref=f2e213] [cursor=pointer]
              - generic [ref=f2e215]:
                - generic [ref=f2e216]:
                  - generic [ref=f2e217]: 
                  - paragraph [ref=f2e218]: 0 Likes
                - generic [ref=f2e219]:
                  - paragraph [ref=f2e220] [cursor=pointer]: 0 Comments
                  - text: ‚
                  - paragraph [ref=f2e221]: 0 Shares
          - generic [ref=f2e223]:
            - generic [ref=f2e224]:
              - generic [ref=f2e225]:
                - generic [ref=f2e226]:
                  - img "profile picture" [ref=f2e228]
                  - generic [ref=f2e229]:
                    - paragraph [ref=f2e230]: Demo Open Source
                    - paragraph [ref=f2e231]: 2026-22-09 08:10 PM
                - listitem [ref=f2e233]:
                  - button "" [ref=f2e234] [cursor=pointer]
              - separator [ref=f2e236]
            - paragraph [ref=f2e239]: Hello World!
            - generic [ref=f2e240]:
              - generic [ref=f2e241]:
                - img [ref=f2e243] [cursor=pointer]
                - button "" [ref=f2e268] [cursor=pointer]
                - button "" [ref=f2e270] [cursor=pointer]
              - generic [ref=f2e272]:
                - generic [ref=f2e273]:
                  - generic [ref=f2e274]: 
                  - paragraph [ref=f2e275]: 0 Likes
                - generic [ref=f2e276]:
                  - paragraph [ref=f2e277] [cursor=pointer]: 0 Comments
                  - text: ‚
                  - paragraph [ref=f2e278]: 0 Shares
          - generic [ref=f2e280]:
            - generic [ref=f2e281]:
              - generic [ref=f2e282]:
                - generic [ref=f2e283]:
                  - img "profile picture" [ref=f2e285]
                  - generic [ref=f2e286]:
                    - paragraph [ref=f2e287]: Demo Open Source
                    - paragraph [ref=f2e288]: 2026-22-09 08:08 PM
                - listitem [ref=f2e290]:
                  - button "" [ref=f2e291] [cursor=pointer]
              - separator [ref=f2e293]
            - paragraph [ref=f2e296]: Hi this is Mallikarjun….
            - generic [ref=f2e297]:
              - generic [ref=f2e298]:
                - img [ref=f2e300] [cursor=pointer]
                - button "" [ref=f2e325] [cursor=pointer]
                - button "" [ref=f2e327] [cursor=pointer]
              - generic [ref=f2e329]:
                - generic [ref=f2e330]:
                  - generic [ref=f2e331]: 
                  - paragraph [ref=f2e332]: 0 Likes
                - generic [ref=f2e333]:
                  - paragraph [ref=f2e334] [cursor=pointer]: 0 Comments
                  - text: ‚
                  - paragraph [ref=f2e335]: 0 Shares
          - generic [ref=f2e337]:
            - generic [ref=f2e338]:
              - generic [ref=f2e339]:
                - generic [ref=f2e340]:
                  - img "profile picture" [ref=f2e342]
                  - generic [ref=f2e343]:
                    - paragraph [ref=f2e344]: Demo Open Source
                    - paragraph [ref=f2e345]: 2026-22-09 08:07 PM
                - listitem [ref=f2e347]:
                  - button "" [ref=f2e348] [cursor=pointer]
              - separator [ref=f2e350]
            - paragraph [ref=f2e353]: Hello World!
            - generic [ref=f2e354]:
              - generic [ref=f2e355]:
                - img [ref=f2e357] [cursor=pointer]
                - button "" [ref=f2e382] [cursor=pointer]
                - button "" [ref=f2e384] [cursor=pointer]
              - generic [ref=f2e386]:
                - generic [ref=f2e387]:
                  - generic [ref=f2e388]: 
                  - paragraph [ref=f2e389]: 0 Likes
                - generic [ref=f2e390]:
                  - paragraph [ref=f2e391] [cursor=pointer]: 0 Comments
                  - text: ‚
                  - paragraph [ref=f2e392]: 0 Shares
          - generic [ref=f2e394]:
            - generic [ref=f2e395]:
              - generic [ref=f2e396]:
                - generic [ref=f2e397]:
                  - img "profile picture" [ref=f2e399]
                  - generic [ref=f2e400]:
                    - paragraph [ref=f2e401]: Demo Open Source
                    - paragraph [ref=f2e402]: 2026-22-09 08:05 PM
                - listitem [ref=f2e404]:
                  - button "" [ref=f2e405] [cursor=pointer]
              - separator [ref=f2e407]
            - paragraph [ref=f2e410]: Hi this is Mallikarjun….
            - generic [ref=f2e411]:
              - generic [ref=f2e412]:
                - img [ref=f2e414] [cursor=pointer]
                - button "" [ref=f2e439] [cursor=pointer]
                - button "" [ref=f2e441] [cursor=pointer]
              - generic [ref=f2e443]:
                - generic [ref=f2e444]:
                  - generic [ref=f2e445]: 
                  - paragraph [ref=f2e446]: 0 Likes
                - generic [ref=f2e447]:
                  - paragraph [ref=f2e448] [cursor=pointer]: 0 Comments
                  - text: ‚
                  - paragraph [ref=f2e449]: 0 Shares
          - generic [ref=f2e451]:
            - generic [ref=f2e452]:
              - generic [ref=f2e453]:
                - generic [ref=f2e454]:
                  - img "profile picture" [ref=f2e456]
                  - generic [ref=f2e457]:
                    - paragraph [ref=f2e458]: Demo Open Source
                    - paragraph [ref=f2e459]: 2026-22-09 07:52 PM
                - listitem [ref=f2e461]:
                  - button "" [ref=f2e462] [cursor=pointer]
              - separator [ref=f2e464]
            - paragraph [ref=f2e467]: qa probe
            - generic [ref=f2e468]:
              - generic [ref=f2e469]:
                - img [ref=f2e471] [cursor=pointer]
                - button "" [ref=f2e496] [cursor=pointer]
                - button "" [ref=f2e498] [cursor=pointer]
              - generic [ref=f2e500]:
                - generic [ref=f2e501]:
                  - generic [ref=f2e502]: 
                  - paragraph [ref=f2e503]: 0 Likes
                - generic [ref=f2e504]:
                  - paragraph [ref=f2e505] [cursor=pointer]: 0 Comments
                  - text: ‚
                  - paragraph [ref=f2e506]: 0 Shares
          - generic [ref=f2e508]:
            - generic [ref=f2e509]:
              - generic [ref=f2e510]:
                - generic [ref=f2e511]:
                  - img "profile picture" [ref=f2e513]
                  - generic [ref=f2e514]:
                    - paragraph [ref=f2e515]: Demo Open Source
                    - paragraph [ref=f2e516]: 2026-22-09 07:47 PM
                - listitem [ref=f2e518]:
                  - button "" [ref=f2e519] [cursor=pointer]
              - separator [ref=f2e521]
            - paragraph [ref=f2e524]: This is a sample post 1790086676162
            - generic [ref=f2e525]:
              - generic [ref=f2e526]:
                - img [ref=f2e528] [cursor=pointer]
                - button "" [ref=f2e553] [cursor=pointer]
                - button "" [ref=f2e555] [cursor=pointer]
              - generic [ref=f2e557]:
                - generic [ref=f2e558]:
                  - generic [ref=f2e559]: 
                  - paragraph [ref=f2e560]: 0 Likes
                - generic [ref=f2e561]:
                  - paragraph [ref=f2e562] [cursor=pointer]: 0 Comments
                  - text: ‚
                  - paragraph [ref=f2e563]: 0 Shares
          - generic [ref=f2e565]:
            - generic [ref=f2e566]:
              - generic [ref=f2e567]:
                - generic [ref=f2e568]:
                  - img "profile picture" [ref=f2e570]
                  - generic [ref=f2e571]:
                    - paragraph [ref=f2e572]: Demo Open Source
                    - paragraph [ref=f2e573]: 2026-22-09 07:45 PM
                - listitem [ref=f2e575]:
                  - button "" [ref=f2e576] [cursor=pointer]
              - separator [ref=f2e578]
            - paragraph [ref=f2e581]: This is a sample post 1790086511033
            - generic [ref=f2e582]:
              - generic [ref=f2e583]:
                - img [ref=f2e585] [cursor=pointer]
                - button "" [ref=f2e610] [cursor=pointer]
                - button "" [ref=f2e612] [cursor=pointer]
              - generic [ref=f2e614]:
                - generic [ref=f2e615]:
                  - generic [ref=f2e616]: 
                  - paragraph [ref=f2e617]: 0 Likes
                - generic [ref=f2e618]:
                  - paragraph [ref=f2e619] [cursor=pointer]: 0 Comments
                  - text: ‚
                  - paragraph [ref=f2e620]: 0 Shares
          - generic [ref=f2e622]:
            - generic [ref=f2e623]:
              - generic [ref=f2e624]:
                - generic [ref=f2e625]:
                  - img "profile picture" [ref=f2e627]
                  - generic [ref=f2e628]:
                    - paragraph [ref=f2e629]: Demo Open Source
                    - paragraph [ref=f2e630]: 2026-22-09 07:44 PM
                - listitem [ref=f2e632]:
                  - button "" [ref=f2e633] [cursor=pointer]
              - separator [ref=f2e635]
            - paragraph [ref=f2e638]: India
            - generic [ref=f2e639]:
              - generic [ref=f2e640]:
                - img [ref=f2e642] [cursor=pointer]
                - button "" [ref=f2e667] [cursor=pointer]
                - button "" [ref=f2e669] [cursor=pointer]
              - generic [ref=f2e671]:
                - generic [ref=f2e672]:
                  - generic [ref=f2e673]: 
                  - paragraph [ref=f2e674]: 0 Likes
                - generic [ref=f2e675]:
                  - paragraph [ref=f2e676] [cursor=pointer]: 0 Comments
                  - text: ‚
                  - paragraph [ref=f2e677]: 0 Shares
          - generic [ref=f2e679]:
            - generic [ref=f2e680]:
              - generic [ref=f2e681]:
                - generic [ref=f2e682]:
                  - img "profile picture" [ref=f2e684]
                  - generic [ref=f2e685]:
                    - paragraph [ref=f2e686]: Demo Open Source
                    - paragraph [ref=f2e687]: 2026-22-09 07:42 PM
                - listitem [ref=f2e689]:
                  - button "" [ref=f2e690] [cursor=pointer]
              - separator [ref=f2e692]
            - paragraph [ref=f2e695]: India
            - generic [ref=f2e696]:
              - generic [ref=f2e697]:
                - img [ref=f2e699] [cursor=pointer]
                - button "" [ref=f2e724] [cursor=pointer]
                - button "" [ref=f2e726] [cursor=pointer]
              - generic [ref=f2e728]:
                - generic [ref=f2e729]:
                  - generic [ref=f2e730]: 
                  - paragraph [ref=f2e731]: 0 Likes
                - generic [ref=f2e732]:
                  - paragraph [ref=f2e733] [cursor=pointer]: 0 Comments
                  - text: ‚
                  - paragraph [ref=f2e734]: 0 Shares
      - generic [ref=f2e736]:
        - paragraph [ref=f2e737]: Upcoming Anniversaries
        - generic [ref=f2e738]:
          - generic [ref=f2e739]:
            - generic [ref=f2e740]:
              - img "profile picture" [ref=f2e742]
              - generic [ref=f2e743]:
                - paragraph [ref=f2e744]: Demo Source
                - paragraph [ref=f2e745]: HR Manager
            - generic [ref=f2e746]:
              - img "year celebration" [ref=f2e747]
              - generic [ref=f2e748]:
                - paragraph [ref=f2e749]: "36"
                - paragraph [ref=f2e750]: Years
                - paragraph [ref=f2e751]: Oct 11
          - generic [ref=f2e752]:
            - generic [ref=f2e753]:
              - img "profile picture" [ref=f2e755]
              - generic [ref=f2e756]:
                - paragraph [ref=f2e757]: Russel Hamilton
                - paragraph [ref=f2e758]: Software Engineer
            - generic [ref=f2e759]:
              - img "year celebration" [ref=f2e760]
              - generic [ref=f2e761]:
                - paragraph [ref=f2e762]: "28"
                - paragraph [ref=f2e763]: Years
                - paragraph [ref=f2e764]: Oct 22
    - generic [ref=f2e765]:
      - paragraph [ref=f2e766]: OrangeHRM OS 5.9
      - paragraph [ref=f2e767]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e768] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('OrangeHRM Capstone - Full Automation', () => {
  4  | 
  5  |   test.beforeEach(async ({ page }) => {
  6  |     // LOGIN - Common for all
  7  |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  8  |     await page.getByPlaceholder('Username').fill('Admin');
  9  |     await page.getByPlaceholder('Password').fill('admin123');
  10 |     await page.getByRole('button', { name: 'Login' }).click();
  11 |     await page.waitForTimeout(2000);
  12 |     await expect(page).toHaveURL(/.*dashboard/);
  13 |   });
  14 | 
  15 |   test('Scenario 1 - Buzz Post Creation', async ({ page }) => {
  16 |     // Dashboard -> Buzz
  17 |     await page.locator("//span[text()='Buzz']").click();
  18 |     await page.waitForTimeout(2000);
  19 | 
  20 |     const buzzInput = page.locator("textarea[placeholder=\"What's on your mind?\"]");
  21 |     await buzzInput.fill("Capstone Project Update: Playwright Automation Completed! 🚀 #OrangeHRM #Testing");
  22 | 
> 23 |     await page.getByRole('button', { name: 'Post' }).click();
     |                                                      ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Post' }) resolved to 4 elements:
  24 |     await page.waitForTimeout(3000);
  25 | 
  26 |     // Validation
  27 |     await expect(page.locator('.oxd-buzz-post').first()).toBeVisible();
  28 |     console.log("✅ Buzz Posted Successfully");
  29 |   });
  30 | 
  31 |   test('Scenario 2 - Leave Apply / My Info', async ({ page }) => {
  32 |     // Nee 2 options il ethelum edukkalam, randum kodukkunnu
  33 | 
  34 |     // OPTION A: Leave Apply (Trainer nu kooduthal ishtapettath)
  35 |     await page.locator("//span[text()='Leave']").click();
  36 |     await page.getByRole('link', { name: 'Apply' }).click();
  37 |     await page.waitForTimeout(2000);
  38 | 
  39 |     await page.locator('.oxd-select-text').first().click();
  40 |     await page.locator('span').filter({ hasText: 'CAN - Personal' }).click();
  41 | 
  42 |     await page.locator('(//input[@placeholder="yyyy-dd-mm"])[1]').fill('2026-09-25');
  43 |     await page.locator('(//input[@placeholder="yyyy-dd-mm"])[2]').fill('2026-09-26');
  44 | 
  45 |     await page.getByRole('button', { name: 'Apply' }).click();
  46 |     await page.waitForTimeout(2000);
  47 |     console.log("✅ Leave Applied Successfully");
  48 | 
  49 |     // OPTION B: My Info Update (Backup)
  50 |     // await page.locator("//span[text()='My Info']").click();
  51 |     // await page.locator("//a[text()='Contact Details']").click();
  52 |     // await page.locator("(//input[contains(@class,'oxd-input')])[2]").fill("Meppayur, Kerala");
  53 |     // await page.locator("(//button[@type='submit'])[1]").click();
  54 |   });
  55 | });
```