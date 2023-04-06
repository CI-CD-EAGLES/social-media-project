// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoggedIn from './NavBar/LoggedIn';
import Home from './Component/Home';
import { About } from './Component/About';
import { Blog } from './Component/Blog';
import { Products } from './Component/Products';
import { Pricing } from './Component/Pricing';
import { UserContext } from './utils/UserContext';
import { LoginPage } from './Component/LoginPage';
import { AuthProvider, useAuth } from './utils/UserContext'


function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/home' element={<LoggedIn><Home /></LoggedIn>} />
            <Route path='/about' element={<LoggedIn><About /></LoggedIn>} />
            <Route path='/blog' element={<LoggedIn><Blog /></LoggedIn>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
    // <>
    //   <BrowserRouter>
    //     <AuthProvider>
    //       <Routes>
    //         <Route path='/' element={<LoginPage />} />
    //         <Route path='/home' element={<PrivateRoute> <Home authUser={authUser} /> </PrivateRoute>} />
    //         <Route path='/about' element={<About />} />
    //         <Route path='/blog' element={<Blog />} />
    //         <Route path='/products' element={<Products />} />
    //         <Route path='/pricing' element={<Pricing />} />
    //       </Routes>
    //     </AuthProvider>
    //   </BrowserRouter>
    // </>
  );
}

export default App;
