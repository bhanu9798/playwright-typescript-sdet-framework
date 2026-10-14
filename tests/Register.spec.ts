import { test, expect, Locator } from "@playwright/test";

test("Complete the Registration", async ({ page }) => {

    await page.goto("https://eventhub.rahulshettyacademy.com/login");

    const rregistrationLink: Locator = page.getByRole("link",{name:"register"})

    await rregistrationLink.click();

    const registerEmail: Locator = page.getByTestId("register-email");

    await registerEmail.fill("bhanuprakshbhanu@gmail.com");

    const registerPassword: Locator = page.getByTestId("register-password");

    await registerPassword.fill('Bhanu@09');

    const registerPasswordConfirm: Locator = page.getByPlaceholder("Repeat your password");

    await registerPasswordConfirm.fill('Bhanu@09');

    const registerButton: Locator = page.getByRole("button", { name: "Create Account" });

    await registerButton.click();

   const homePageTitle=page.getByText('EventHub');

   console.log("Matches:", await homePageTitle.count());

   //const homePageTitle = page.getByText("EventHub", { exact: true });

   //const homePageTitle=page.getByRole("link",{name:"EventHub"})

 //  await expect(homePageTitle).toBeVisible();

  const logOutButton: Locator=page.getByRole("button",{name:"Logout"});

   await expect(logOutButton).toBeVisible(); 

});