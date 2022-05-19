import React from "react";
import { useDispatch } from "react-redux";
import { priceCollection } from "./components/store/reducres/reducerSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage';
import Layout from './components/layout/Layout';

function App() {

  // collection otal Price From LoaclStorage
  const dispatch = useDispatch();
  dispatch(priceCollection());

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/layout/*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
