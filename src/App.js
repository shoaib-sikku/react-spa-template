import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Explore from './component/Explore'
import Reviews from './component/Reviews'
import Faq from './component/Faq'
import Footer from './component/Footer'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/about-us' element={<About></About>}/>
      <Route path='/explore-foods' element={<Explore></Explore>}/>
      <Route path='/reviews' element={<Reviews></Reviews>}/>
      <Route path='/faq' element={<Faq></Faq>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
