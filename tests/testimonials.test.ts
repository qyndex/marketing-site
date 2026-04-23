/**
 * Unit tests for Testimonials component data integrity.
 */

import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const testimonialsSource = readFileSync(
  resolve(__dirname, "../src/components/Testimonials.astro"),
  "utf-8"
);

describe("Testimonials component", () => {
  it("defines at least three quotes", () => {
    const textMatches = testimonialsSource.match(/text:/g) ?? [];
    expect(textMatches.length).toBeGreaterThanOrEqual(3);
  });

  it("includes author attribution for each quote", () => {
    const authorMatches = testimonialsSource.match(/author:/g) ?? [];
    expect(authorMatches.length).toBeGreaterThanOrEqual(3);
  });

  it("uses blockquote elements for accessibility", () => {
    expect(testimonialsSource).toContain("<blockquote");
  });

  it("uses a section element as the root", () => {
    expect(testimonialsSource).toContain("<section");
  });

  it("renders a section heading", () => {
    expect(testimonialsSource).toContain("<h2");
  });
});
