import { readFileSync } from "node:fs";
import { test as base } from "@playwright/test";

export const BGG_IMAGES = "https://cf.geekdo-images.com/**";

const STUB_IMAGE = readFileSync(
  new URL("../public/favicon.png", import.meta.url),
);

// Serve BGG thumbnails locally so that tests do not depend on BoardGameGeek being up.
export const test = base.extend<{ stubBggImages: undefined }>({
  stubBggImages: [
    async ({ page }, use) => {
      await page.route(BGG_IMAGES, (route) =>
        route.fulfill({ contentType: "image/png", body: STUB_IMAGE }),
      );
      await use(undefined);
    },
    { auto: true },
  ],
});

export { expect } from "@playwright/test";
