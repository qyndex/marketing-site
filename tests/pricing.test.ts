/**
 * Unit tests for Pricing component data integrity.
 * Validates the plans data embedded in the component source.
 */

import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const pricingSource = readFileSync(
  resolve(__dirname, "../src/components/Pricing.astro"),
  "utf-8"
);

describe("Pricing component", () => {
  it("defines at least three pricing plans", () => {
    // Each plan has a name key in the frontmatter data
    const nameMatches = pricingSource.match(/name:/g) ?? [];
    expect(nameMatches.length).toBeGreaterThanOrEqual(3);
  });

  it("includes a Free tier", () => {
    expect(pricingSource).toMatch(/['"](Free)['"]/);
  });

  it("includes a paid tier with a price", () => {
    expect(pricingSource).toMatch(/\$\d+/);
  });

  it("includes an Enterprise tier", () => {
    expect(pricingSource).toMatch(/Enterprise/i);
  });

  it("uses a section element as the root", () => {
    expect(pricingSource).toContain("<section");
  });

  it("renders a heading for the section", () => {
    expect(pricingSource).toContain("<h2");
  });
});
