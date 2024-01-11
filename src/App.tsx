import Navbar from "./Components/Navbar/Navbar";
import { ReactNode } from "react";
import "./App.scss";
import Footer from "./Components/Footer/Footer";

const App = ({ children }: { children: ReactNode }) => {
  return (
    <div className="app">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default App;