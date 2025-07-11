import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import About from "../components/About";
// About.js


// Use the image variable in your component




test("it is exported as a default export", () => {
  try {
    expect(() => render(<About />)).not.toThrow();
  } catch (e) {
    throw new Error("Make sure to export this component!");
  }
});
