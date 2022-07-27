import './App.css';
import Wrapper from './Wrapper';
import TopBanner from './TopBanner';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Tab from './Tab';
import Notfound from './NotFound';
import HeartCount from './HeartCount';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Wrapper>
      <TopBanner />
      <HeartCount />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/Tab' element={<Tab />}></Route>
          <Route path='*' element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </Wrapper>

  );
}

export default App;
