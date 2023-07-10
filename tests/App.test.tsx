import { render, screen } from "@testing-library/react";
import App from "../src/App";
import React from "react";

describe("App", () => {
  it("should render text-field & button", () => {
    // render the App
    render(<App />);
    // grab the input box & the button
    const input = screen.getByLabelText(/Search Country/i);
    const btn = screen.getByRole("button", { name: /Search/i });
    
    // check both are present in the screen
    expect(input).toBeVisible();
    expect(btn).toBeVisible();
  });
});
