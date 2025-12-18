import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Button } from "./button";

afterEach(() => {
  cleanup();
});

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);

    expect(screen.getByText("Click me")).toBeDefined();
  });

  it("renders as a button element", () => {
    render(<Button>Test</Button>);

    expect(screen.getByRole("button")).toBeDefined();
  });
});
