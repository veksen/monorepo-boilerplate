import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Card } from "./card";

afterEach(() => {
  cleanup();
});

describe("Card", () => {
  it("renders title and children", () => {
    render(
      <Card title="Test Title" href="https://example.com">
        Test content
      </Card>
    );

    expect(screen.getByText("Test Title")).toBeDefined();
    expect(screen.getByText("Test content")).toBeDefined();
  });

  it("renders link with correct href", () => {
    render(
      <Card title="Test" href="https://example.com">
        Content
      </Card>
    );

    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toContain("https://example.com");
  });
});
