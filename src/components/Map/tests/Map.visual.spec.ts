// Disabled due to flakiness
// import { test, expect } from '@playwright/test';

// test('visual regression', async ({ page }) => {
//     await page.goto(
//         '/iframe.html?args=&id=components-map--default',
//     );

//     await expect(page.locator('#storybook-root')).toHaveScreenshot(
//         'Map.png',
//     );
// });