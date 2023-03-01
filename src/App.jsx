import { Url } from "./components/Url";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <Url />
      <ToastContainer theme="dark" />
      <Analytics />
    </div>
  );
}

export default App;
