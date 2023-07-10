import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Details from "../../src/routes/Details";
import React from "react";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const MockData = {
  country: {
    capital: "Delhi",
    flags: { png: "https://flagcdn.com/w320/bh.png" },
  },
};

const MockDetails = () => {
  const history = createMemoryHistory();
  history.push("/details", { ...MockData });

  return (
    <Router location={history.location} navigator={history}>
      <Details />
    </Router>
  );
};

describe("Details", () => {
  it("display Output", async () => {
    // render the component
    render(<MockDetails />);

    const searchBtn = screen.getByRole("button", {
      name: /Check Capital Weather/i,
    });
    fireEvent.click(searchBtn);

    await waitFor(
      () => {
        const weather = screen.getByText(/weather/i);
        expect(weather).toBeVisible();
      },
      { timeout: 10000 }
    );
  });
});
