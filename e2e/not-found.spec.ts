import { expect, test } from "./fixtures";

test("shows 404 for an unknown path", async ({ page }) => {
  await page.goto("/nonexistent");

  await expect(page.getByTestId("page-title")).toHaveText("404 Not Found!");
});

test("shows 404 for an unknown teach", async ({ page }) => {
  await page.goto("/teach/nonexistent");

  await expect(page.getByTestId("page-title")).toHaveText("404 Not Found!");
});

test("shows 404 for a teach ID that matches a built-in object key", async ({
  page,
}) => {
  await page.goto("/teach/constructor");

  await expect(page.getByTestId("page-title")).toHaveText("404 Not Found!");
});

test("links back to the table of contents", async ({ page }) => {
  await page.goto("/nonexistent");

  await page.getByTestId("back-home-link").click();

  await expect(page).toHaveURL("/");
});
