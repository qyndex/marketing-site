/**
 * Unit tests for the index page composition.
 * Verifies all three major sections are imported and rendered.
 */

import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const indexSource = readFileSync(
  resolve(__dirname, "../src/pages/index.astro"),
  "utf-8"
);

describe("index page", () => {
  it("imports the Hero component", () => {
    expect(indexSource).toMatch(/import Hero/);
  });

  it("imports the Testimonials component", () => {
    expect(indexSource).toMatch(/import Testimonials/);
  });

  it("imports the Pricing component", () => {
    expect(indexSource).toMatch(/import Pricing/);
  });

  it("renders Hero in the body", () => {
    expect(indexSource).toContain("<Hero");
  });

  it("renders Testimonials in the body", () => {
    expect(indexSource).toContain("<Testimonials");
  });

  it("renders Pricing in the body", () => {
    expect(indexSource).toContain("<Pricing");
  });

  it("sets the html lang attribute", () => {
    expect(indexSource).toMatch(/lang=["']en["']/);
  });

  it("sets a page title", () => {
    expect(indexSource).toContain("<title>");
  });
});
