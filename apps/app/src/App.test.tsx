import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "./App";

afterEach(() => {
  cleanup();
});

describe("App", () => {
  it("renders the heading", () => {
    render(<App />);

    expect(screen.getByText("Vite + React")).toBeDefined();
  });

  it("renders all 4 link cards", () => {
    render(<App />);

    expect(screen.getByText("Docs")).toBeDefined();
    expect(screen.getByText("Learn")).toBeDefined();
    expect(screen.getByText("Templates")).toBeDefined();
    expect(screen.getByText("Deploy")).toBeDefined();
  });
});
