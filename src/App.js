import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Information from './components/Pages/Information';
import Scholar from './components/Pages/Scholar';
import Donation from './components/Pages/Donation';
import View from './components/Home/View';
import DonationPay from './components/Pages/DonationPay';
import Login from './components/Registration/Login';
import { CartProvider } from 'react-use-cart';
import ViewCart from './components/Pages/ViewCart';





function App() {
  return (
    <CartProvider>
   <BrowserRouter>
   <Header></Header>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

 
      <Route path="/home" element={<Home></Home>} />
      <Route path="/information" element={<Information></Information>} />
      <Route path="/scholar" element={<Scholar></Scholar>} />
      <Route path="/view" element={<View></View>} />
      <Route path="/pay" element={<DonationPay></DonationPay>} />
      <Route path="/cart" element={<ViewCart></ViewCart> } />
      <Route path="/login" element={<Login></Login>} />
      
      {/* <Route path="/table" element={<TableSection></TableSection>} /> */}
      {/* <Route path="/view/:viewId" element={<View></View>} /> */}
      <Route path="/donation" element={<Donation></Donation>} />
      
    </Routes>
   
   </BrowserRouter>
   </CartProvider>
  );
}

export default App;
