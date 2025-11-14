
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./views/Home.jsx"
import SeriesDetails from "./views/SeriesDetails.jsx"
import NewSong from "./views/NewSong.jsx"
import EditSeries from "./views/EditSong.jsx"
import { BrowserRouter,Routes,Route } from 'react-router';


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/series/:id" element={<SeriesDetails />} />
  <Route path="/new" element={<NewSeries />} />
  <Route path="/series/edit/:id" element={<EditSeries />} />
  </Routes>
  </BrowserRouter>
   );