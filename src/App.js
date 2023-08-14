import './App.css';
import { Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from "./pages/HomePage"
import VideoDetailPage from "./pages/VideoDetailPage"
import PageNotFound from "./pages/PageNotFound"
import SearchPage from "./pages/SearchPage"

function App() {
  return (
    <>


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos/:id" element={<VideoDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
