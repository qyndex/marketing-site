/**
 * Unit tests for Hero component content and structure.
 * These tests verify the data/logic layer without a DOM renderer — Astro
 * components are static HTML generators, so we validate the expected
 * markup strings that the component produces.
 */

import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const heroSource = readFileSync(
  resolve(__dirname, "../src/components/Hero.astro"),
  "utf-8"
);

describe("Hero component", () => {
  it("contains a primary heading", () => {
    expect(heroSource).toContain("<h1");
  });

  it("contains a CTA link", () => {
    expect(heroSource).toMatch(/href=["'][^"']*signup[^"']*["']/);
  });

  it("CTA link has descriptive text", () => {
    expect(heroSource).toMatch(/Get Started/i);
  });

  it("uses a section element as the root", () => {
    expect(heroSource).toContain("<section");
  });

  it("includes a subtitle / subheading paragraph", () => {
    expect(heroSource).toContain("<p");
  });
});
