import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
