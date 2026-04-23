import { test, expect } from "@playwright/test";

test.describe("Marketing home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page loads with a document title", async ({ page }) => {
    await expect(page).toHaveTitle(/.+/);
  });

  // --- Hero section ---

  test("hero section is visible", async ({ page }) => {
    const hero = page.locator("section").first();
    await expect(hero).toBeVisible();
  });

  test("hero contains the primary h1 heading", async ({ page }) => {
    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();
    await expect(h1).not.toBeEmpty();
  });

  test("hero CTA button is visible and links to /signup", async ({ page }) => {
    const cta = page.locator('a[href*="signup"]').first();
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute("href", /signup/);
  });

  test("hero subtitle paragraph is visible", async ({ page }) => {
    // The paragraph immediately following the h1 inside the hero section
    const heroParagraph = page.locator("section").first().locator("p").first();
    await expect(heroParagraph).toBeVisible();
  });

  // --- Testimonials section ---

  test("testimonials section is visible", async ({ page }) => {
    const section = page.locator("section:has(blockquote)");
    await expect(section).toBeVisible();
  });

  test("testimonials section heading is visible", async ({ page }) => {
    const heading = page.locator("section:has(blockquote) h2");
    await expect(heading).toBeVisible();
  });

  test("at least three testimonial blockquotes are rendered", async ({
    page,
  }) => {
    const quotes = page.locator("blockquote");
    await expect(quotes).toHaveCount(3);
  });

  // --- Pricing section ---

  test("pricing section is visible", async ({ page }) => {
    const section = page.locator("section:has(h2)").last();
    await expect(section).toBeVisible();
  });

  test("pricing heading is visible", async ({ page }) => {
    const headings = page.locator("h2");
    // At least two h2s: Testimonials + Pricing
    await expect(headings).toHaveCount(2);
  });

  test("Free tier is rendered", async ({ page }) => {
    const freeTier = page.getByText("Free", { exact: true });
    await expect(freeTier).toBeVisible();
  });

  test("Pro tier is rendered with a price", async ({ page }) => {
    const proTier = page.getByText("Pro", { exact: true });
    await expect(proTier).toBeVisible();
    const proPrice = page.getByText(/\$29/);
    await expect(proPrice).toBeVisible();
  });

  test("Enterprise tier is rendered", async ({ page }) => {
    const enterprise = page.getByText("Enterprise", { exact: true });
    await expect(enterprise).toBeVisible();
  });

  // --- CTA interaction ---

  test("CTA click navigates toward /signup", async ({ page }) => {
    const cta = page.locator('a[href*="signup"]').first();
    await expect(cta).toBeVisible();
    // Verify the href is correct without actually navigating away
    const href = await cta.getAttribute("href");
    expect(href).toMatch(/signup/);
  });
});
