import { expect, test } from "./fixtures";

test("shows the notes on a direct visit", async ({ page }) => {
  await page.goto("/teach/calico");

  await expect(page.getByTestId("page-title")).toHaveText("Calico");
  const notes = page.getByTestId("teach-notes");
  await expect(
    notes.getByRole("heading", { level: 3, name: "Overview" }),
  ).toBeVisible();
  await expect(
    notes.getByRole("heading", { level: 3, name: "Patterns" }),
  ).toBeVisible();
});

test("shows the game title only once", async ({ page }) => {
  await page.goto("/teach/calico");

  await expect(page.getByTestId("teach-notes")).toContainText("Overview");
  await expect(
    page.getByRole("heading", { name: "Calico", exact: true }),
  ).toHaveCount(1);
});

test("shows the game thumbnail", async ({ page }) => {
  await page.goto("/teach/calico");

  await expect(page.getByTestId("thumbnail")).toBeVisible();
});

test("links to the game on BoardGameGeek", async ({ page }) => {
  await page.goto("/teach/calico");

  await expect(page.getByTestId("bgg-link")).toHaveAttribute(
    "href",
    "https://boardgamegeek.com/boardgame/283155",
  );
});

test("lets the teacher tick and untick a checklist item", async ({ page }) => {
  await page.goto("/teach/calico");
  const checkbox = page
    .getByTestId("teach-notes")
    .getByRole("checkbox")
    .first();

  await checkbox.check();
  await expect(checkbox).toBeChecked();

  await checkbox.uncheck();
  await expect(checkbox).not.toBeChecked();
});

test("lets the teacher tick and untick a checklist item by clicking its text", async ({
  page,
}) => {
  await page.goto("/teach/calico");
  const notes = page.getByTestId("teach-notes");
  const checkbox = notes.getByRole("checkbox", { name: "Theme & vibe" });

  await notes.getByText("Theme & vibe").click();
  await expect(checkbox).toBeChecked();

  await notes.getByText("Theme & vibe").click();
  await expect(checkbox).not.toBeChecked();
});

test("ticks only the parent item when its text is clicked", async ({
  page,
}) => {
  await page.goto("/teach/calico");
  const notes = page.getByTestId("teach-notes");
  const parentCheckbox = notes.getByRole("checkbox", {
    name: "Design goals",
    exact: true,
  });
  const childCheckbox = notes.getByRole("checkbox", {
    name: "Applies to the six tiles surrounding the design goal tile",
    exact: true,
  });

  await notes.getByText("Design goals", { exact: true }).click();

  await expect(parentCheckbox).toBeChecked();
  await expect(childCheckbox).not.toBeChecked();
});

test("ticks only the child item when its text is clicked", async ({ page }) => {
  await page.goto("/teach/calico");
  const notes = page.getByTestId("teach-notes");
  const parentCheckbox = notes.getByRole("checkbox", {
    name: "Design goals",
    exact: true,
  });
  const childCheckbox = notes.getByRole("checkbox", {
    name: "Applies to the six tiles surrounding the design goal tile",
    exact: true,
  });

  await notes
    .getByText("Applies to the six tiles surrounding the design goal tile")
    .click();

  await expect(childCheckbox).toBeChecked();
  await expect(parentCheckbox).not.toBeChecked();
});

test("goes back to the table of contents", async ({ page }) => {
  await page.goto("/teach/calico");

  await page.getByTestId("back-home-link").click();

  await expect(page).toHaveURL("/");
  await expect(page.getByTestId("page-title")).toHaveText(
    "Board Game Teach Notes",
  );
});

test("goes home from the site logo", async ({ page }) => {
  await page.goto("/teach/calico");

  await page.getByTestId("site-home-link").click();

  await expect(page).toHaveURL("/");
  await expect(page.getByTestId("page-title")).toHaveText(
    "Board Game Teach Notes",
  );
});

test("shows only the latest teach after moving between teaches", async ({
  page,
}) => {
  await page.goto("/teach/calico");
  await expect(page.getByTestId("page-title")).toHaveText("Calico");

  await page.getByTestId("back-home-link").click();
  await page.getByTestId("teach-card-cartographers").click();

  await expect(page.getByTestId("page-title")).toHaveText("Cartographers");
  await expect(page.getByTestId("teach-notes")).toContainText("Overview");
  await expect(page.getByTestId("teach-notes")).not.toContainText("Calico");
});
