import './App.css'
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { AppProviders } from "./providers";
import Applayout from "./Components/applayout/Applayout.component";
import Home from './Pages/Home.page';
import { Product } from './Pages/Product/Product.page';
import { CreateProduct } from './Pages/Product/CreateProduct.page';
import { Brand } from './Pages/Brand/Brand.page';
import { Login } from './Pages/Login/Login.page';
import { Signin } from './Pages/Signin/Signin.page';


function App() {

  return (

    <AppProviders>
      <Applayout>
        <Suspense >
          <Routes>
            <Route path="/" element={<Home />} />        
            <Route path="/Product" element={<Product />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="product/createproduct" element={<CreateProduct />} />
            <Route path="product/editproduct" element={<CreateProduct />} />
          </Routes>
        </Suspense>
      </Applayout>
    </AppProviders>
  )
}

export default App;
