// import "expect-playwright";
import { it, expect } from "@playwright/test";

// jest.setTimeout(35 * 1000);

it("should...", async ({ page, browser }) => {
  // before
  await page.goto("http://localhost:5000");
  //   await page.waitForSelector("#root");
  // after by using expect-playwright
  // await expect(page).toHaveText('[data-test-id="greeting"]', "Learn React");
  const greet = await page.innerText('[data-test-id="greeting"]')
  expect(greet).toBe("Learn React")
  // ;toBe("Learn React");
  await browser.close();
});
