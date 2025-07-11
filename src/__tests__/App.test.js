import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../components/App"
import About from '../components/About';
import Home from '../components/Home';
import NavBar from '../components/NavBar';





test("it renders without crashing", () => {
  try {
    expect(() => render(<App />)).not.toThrow();
  } catch (e) {
    throw new Error("Make sure to import the required components!");
  }
});
