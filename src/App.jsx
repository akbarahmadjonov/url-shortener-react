import { Url } from "./components/Url";
import { ToastContainer } from "react-toastify";
// Add analytics to the page
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <Url />
      <ToastContainer theme="dark" />
      // Add analytics to the page
      <Analytics />
    </div>
  );
}

export default App;
