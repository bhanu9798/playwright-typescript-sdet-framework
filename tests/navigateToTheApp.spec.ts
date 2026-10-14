import{test,expect, Locator} from "@playwright/test"

test("Navigate to the EventHub website", async({page}) =>{
await page.goto("https://eventhub.rahulshettyacademy.com/login");

await expect(page).toHaveTitle("EventHub — Discover & Book Events");

const firstElement: Locator = page.locator('//div[@class="flex items-center gap-2 mb-6"]/div[text()="RSA"]');

await expect(firstElement).toBeVisible();

})