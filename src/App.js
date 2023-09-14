import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Newsletter from './components/Footer/Newsletter/Newsletter';
import AppContext from "./utils/context";
import Register from './components/user/Register';
import Profile from './components/user/Profile';
import Login from './components/user/Login';

function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/category/:id' element={<Category />} />
                    <Route path='/product/:id' element={<SingleProduct />} />
                    <Route path='/Register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/Profile' element={<Profile />} />
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    )
}

export default App;
