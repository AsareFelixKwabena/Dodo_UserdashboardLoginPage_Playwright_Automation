const {test, expect} = require('@playwright/test');


test.beforeEach(async ({ page }) => {
        await page.goto('https://app.usedodo.com/');
        console.log(await page.title())
});

    test('Dodo Technology Login Page should display login page correctly', async ({ page }) => {
        await expect(page.locator('.bg-cardBg')).toBeVisible()
        await expect(page.locator('.ant-input-affix-wrapper').first()).toBeVisible();
        await expect(page.locator('.ant-input-affix-wrapper').last()).toBeVisible();
        await expect(page.locator('button[type="submit"]')).toBeEnabled();
    });

    test('Should login successfully with valid credentials', async ({ page }) => {
        await page.locator("[type='text']").fill("shadrackadmin@usedodo.com");
        await page.locator("[type='password']").last().fill("password");
        await page.locator('button[type="submit"]').click();
        await page.waitForLoadState('networkidle');
        await expect(page.locator("[class='p-4 pt-8']")).toContainText('Enjoy a 45-day free trial, no credit card required.');
    });

test('Should show error with invalid credentials', async ({ page }) => {
    await page.locator("[type='text']").fill("shadrackadmin@usedodo.com");
    await page.locator("[type='password']").fill("12345");
    await page.locator('button[type="submit"]').click()
    await expect(page.locator("[class='Toastify']")).toContainText('Provided password is incorrect');
    });

test('Ensure system prevents login when fields are empty', async ({ page }) => {
    await page.locator('button[type="submit"]').click();
    await expect(page.locator("[class='Toastify']")).toContainText('Please input your email address');
    });

test('Ensure password reset works with valid email', async ({ page }) => {
    await page.locator("[class='hover-btnPrimary']").click()
    await expect(page.locator(".bg-white")).toContainText('Enter your email address and we will send you an OTP to reset your password');
    await page.locator("#email").fill("shadrackadmin@usedodo.com");
    await page.locator("[type='submit']").click();
    await expect(page.locator(".bg-white")).toContainText('Enter the 6-digit OTP sent to your email and set your new password');






});
