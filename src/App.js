import './assets/css/App.css';
import {Works} from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Contact, Skills, Footer, Tabs } from './components';
import profile from './assets/images/profile.jpg';

function App() {
  return (
    <>
    <main className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 my-5 max-w-screen-lg px-4">
        <div>
            <About profile={profile} />
            <Skills />
            <Contact />
        </div>
        <div className="md:col-span-2">
          <Tabs />
          <Routes>
            <Route path="/" element={<Works />} />
          </Routes>
        </div>
    </main>
    <Footer />
    </>
  );
}

export default App;
