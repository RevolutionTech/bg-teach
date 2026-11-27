import { expect, test } from "@playwright/test";

test("lists the teaches", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { level: 1, name: "Board Game Teach Notes" }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Calico" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Cartographers" })).toBeVisible();
});

test("opens a teach from its link", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "Calico" }).click();

  await expect(page).toHaveURL("/teach/calico");
  await expect(
    page.getByRole("heading", { level: 1, name: "Calico" }),
  ).toBeVisible();
});
