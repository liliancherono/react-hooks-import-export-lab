import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "../components/Home";
// Home.js
import { username, city } from '../data/user';

// Use these variables in your component

// About.js
export default function About() {
  // Component code
}


test("it is exported as a default export", () => {
  try {
    expect(() => render(<Home />)).not.toThrow();
  } catch (e) {
    throw new Error("Make sure to export this component!");
  }
});
