import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Chapter from "./pages/Chapter";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:comicId" element={<Details/>}/>
        <Route path="/details/:comicId/chapter/:chapterId" element={<Chapter/>}/>
      </Routes>
    </>
  )
}