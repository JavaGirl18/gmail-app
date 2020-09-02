import React from "react";
import { render } from "@testing-library/react";
import App from "./components/App";

test("it renders the component", () => {
  const { container } = render(<App />);
  expect(container.firstChild).toMatchSnapshot();
});
