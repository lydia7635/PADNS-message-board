import Header from "../Components/Header";
import About from "../Components/About";
import Chat from "./Chat";
import NotFound from "../Components/NotFound";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [page, setPage] = useState("About");
  const visitors = NaN;
  return (
    <>
      <Header page={page} visitors={visitors} />
      <div className="mt-16 mb-32">
        <Routes>
          <Route exact path="/" element={<About setPage={setPage} />} />
          <Route exact path="/chat" element={<Chat setPage={setPage} />} />
          <Route path="*" element={<NotFound setPage={setPage} />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
