import { test, expect, Locator } from "@playwright/test"


test("Login with valid credentials", async({page}) =>{

    await page.goto("https://eventhub.rahulshettyacademy.com/");

    const loginField: Locator = page.getByLabel("Email");

    const passwordField: Locator = page.getByLabel("Password");

    const signInButoon: Locator = page.getByRole("button", { "name": "Sign In" });

    const eventHubLink = page.getByRole("link", { name: "EventHub" });

    await loginField.fill("bhanuprakshbhanu@gmail.com");

    await passwordField.fill("Bhanu@09");

    await signInButoon.click();

    await expect(eventHubLink).toBeVisible();
});

test("Login with invalid email", async ({ page }) => {

    await page.goto("https://eventhub.rahulshettyacademy.com/");

    const loginField: Locator = page.getByLabel("Email");

    const passwordField: Locator = page.getByLabel("Password");

    const signInButoon: Locator = page.getByRole("button", { "name": "Sign In" });

    const errorToast = page.getByText("Invalid email or password", {
    exact: true});

    await loginField.fill("bhkshy@gmail.com");

    await passwordField.fill("Bhanu@09");

    await signInButoon.click();

   // console.log(page.getByText("Invalid email or password").textContent());
   
   await expect(errorToast).toBeVisible();
   await expect(errorToast).toHaveText("Invalid email or password");

}
);

