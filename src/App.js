import React from "react"; /* { useState, useEffect } */
import { DarkModeToggle } from "./components/DarkModeToggle";

function App() {
  /* const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }); */

  return <DarkModeToggle />;
}

export default App;
