import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;