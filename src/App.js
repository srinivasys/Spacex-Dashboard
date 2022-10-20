import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import LaunchCard from './Pages/LaunchCard';
import Launches from './Pages/Launches';
import PastLaunches from './Pages/PastLaunches';
import UpcomingLaunches from './Pages/UpcomingLaunches';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/launches' element={<Launches />} />
        <Route path='/launches/:id' element={<LaunchCard />} />
        <Route path='/launches/upcoming' element={<UpcomingLaunches />} />
        <Route path='/launches/past' element={<PastLaunches />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
