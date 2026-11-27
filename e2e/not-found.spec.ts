import { expect, test } from "@playwright/test";

test("shows 404 for an unknown path", async ({ page }) => {
  await page.goto("/nonexistent");

  await expect(
    page.getByRole("heading", { name: "404 Not Found!" }),
  ).toBeVisible();
});

test("shows 404 for an unknown teach", async ({ page }) => {
  await page.goto("/teach/nonexistent");

  await expect(
    page.getByRole("heading", { name: "404 Not Found!" }),
  ).toBeVisible();
});

test("shows 404 for a teach ID that matches a built-in object key", async ({
  page,
}) => {
  await page.goto("/teach/constructor");

  await expect(
    page.getByRole("heading", { name: "404 Not Found!" }),
  ).toBeVisible();
});

test("links back to the table of contents", async ({ page }) => {
  await page.goto("/nonexistent");

  await page.getByRole("link", { name: "Back Home" }).click();

  await expect(page).toHaveURL("/");
});
