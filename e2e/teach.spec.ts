import { expect, test } from "@playwright/test";

test("shows the notes on a direct visit", async ({ page }) => {
  await page.goto("/teach/calico");

  await expect(
    page.getByRole("heading", { level: 1, name: "Calico" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 3, name: "Overview" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 3, name: "Patterns" }),
  ).toBeVisible();
});

test("lets the teacher tick and untick a checklist item", async ({ page }) => {
  await page.goto("/teach/calico");
  const checkbox = page.getByRole("checkbox").first();

  await checkbox.check();
  await expect(checkbox).toBeChecked();

  await checkbox.uncheck();
  await expect(checkbox).not.toBeChecked();
});

test("goes back to the table of contents", async ({ page }) => {
  await page.goto("/teach/calico");

  await page.getByRole("link", { name: "Back Home" }).click();

  await expect(page).toHaveURL("/");
  await expect(
    page.getByRole("heading", { level: 1, name: "Board Game Teach Notes" }),
  ).toBeVisible();
});

test("shows only the latest teach after moving between teaches", async ({
  page,
}) => {
  await page.goto("/teach/calico");
  await expect(
    page.getByRole("heading", { level: 1, name: "Calico" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Back Home" }).click();
  await page.getByRole("link", { name: "Cartographers" }).click();

  await expect(
    page.getByRole("heading", { level: 1, name: "Cartographers" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 1, name: "Calico" }),
  ).toHaveCount(0);
});
