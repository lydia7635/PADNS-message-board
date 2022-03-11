import "./App.css";
import Header from "./Header";
import About from "../Components/About";
import Chat from "./Chat";
import NotFound from "../Components/NotFound";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [page, setPage] = useState("About");
  const visitors = 2;
  return (
    <>
      <Header page={page} visitors={visitors} />
      <Routes>
        <Route exact path="/" element={<About setPage={setPage} />} />
        <Route exact path="/chat" element={<Chat setPage={setPage} />} />
        <Route path="*" element={<NotFound setPage={setPage} />} />
      </Routes>
    </>
  );
}
export default App;
