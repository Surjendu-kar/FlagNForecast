import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "../../src/routes/Home";
import React from "react";

import { MemoryRouter } from "react-router-dom";

describe("Home", () => {
  it("should display count details", async () => {
    // render the App
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const input = screen.getByLabelText(/Search Country/i);
    fireEvent.change(input, { target: { value: "uk" } });
    expect(input).toHaveValue("uk");

    const searchBtn = screen.getByRole("button", { name: /Search/i });
    fireEvent.click(searchBtn);

    const loadingText = screen.getByText(/Loading/i);
    expect(loadingText).toBeVisible();

    // check if route change to details
    await waitFor(
      () => {
        expect(loadingText).not.toBeVisible();
      },
      { timeout: 10000 }
    );
  });
});
