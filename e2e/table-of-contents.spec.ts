import { BGG_IMAGES, expect, test } from "./fixtures";

test("lists the teaches", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByTestId("page-title")).toHaveText(
    "Board Game Teach Notes",
  );
  await expect(page.getByTestId("teach-card-calico")).toHaveText("Calico");
  await expect(page.getByTestId("teach-card-cartographers")).toHaveText(
    "Cartographers",
  );
});

test('sorts titles without a leading "The"', async ({ page }) => {
  await page.goto("/");

  const cardTestIds = await page
    .getByTestId(/^teach-card-/)
    .evaluateAll((cards) =>
      cards.map((card) => card.getAttribute("data-testid")),
    );
  const positionOf = (teachId: string) =>
    cardTestIds.indexOf(`teach-card-${teachId}`);
  expect(positionOf("cartographers")).toBeLessThan(
    positionOf("castles-of-burgundy"),
  );
  expect(positionOf("castles-of-burgundy")).toBeLessThan(
    positionOf("clank-in-space"),
  );
  await expect(page.getByTestId("teach-card-castles-of-burgundy")).toHaveText(
    "The Castles of Burgundy",
  );
});

test("opens a teach from its card", async ({ page }) => {
  await page.goto("/");

  await page.getByTestId("teach-card-calico").click();

  await expect(page).toHaveURL("/teach/calico");
  await expect(page.getByTestId("page-title")).toHaveText("Calico");
});

test("shows a thumbnail on each card", async ({ page }) => {
  await page.goto("/");

  const thumbnail = page
    .getByTestId("teach-card-calico")
    .getByTestId("thumbnail");
  await expect(thumbnail).toBeVisible();
  await expect
    .poll(() =>
      thumbnail.evaluate((image: HTMLImageElement) => image.naturalWidth),
    )
    .toBeGreaterThan(0);
});

test("shows a placeholder when a thumbnail does not load", async ({ page }) => {
  await page.route(BGG_IMAGES, (route) => route.abort());
  await page.goto("/");

  const card = page.getByTestId("teach-card-calico");
  await expect(card.getByTestId("thumbnail-placeholder")).toBeVisible();
  await expect(card.getByTestId("thumbnail")).toHaveCount(0);
});

test("filters the teaches by search text", async ({ page }) => {
  await page.goto("/");

  await page.getByTestId("teach-search").fill("CARTO");

  await expect(page.getByTestId("teach-card-cartographers")).toBeVisible();
  await expect(page.getByTestId("teach-card-calico")).toHaveCount(0);
});

test("matches search text without accents", async ({ page }) => {
  await page.goto("/");

  await page.getByTestId("teach-search").fill("cafe");

  await expect(page.getByTestId("teach-card-cafe-baras")).toHaveText(
    "Café Baras",
  );
});

test("tells the user when no teach matches", async ({ page }) => {
  await page.goto("/");

  await page.getByTestId("teach-search").fill("zzzz");

  await expect(page.getByTestId("no-teaches-match")).toHaveText(
    "No games match “zzzz”.",
  );
});

test("keeps the search after going back from a teach", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("teach-search").fill("carto");
  await page.getByTestId("teach-card-cartographers").click();
  await expect(page.getByTestId("page-title")).toHaveText("Cartographers");

  await page.goBack();

  await expect(page.getByTestId("teach-search")).toHaveValue("carto");
  await expect(page.getByTestId("teach-card-calico")).toHaveCount(0);
});

test("opens a search from its URL", async ({ page }) => {
  await page.goto("/?q=calico");

  await expect(page.getByTestId("teach-search")).toHaveValue("calico");
  await expect(page.getByTestId("teach-card-calico")).toBeVisible();
  await expect(page.getByTestId("teach-card-cartographers")).toHaveCount(0);
});
