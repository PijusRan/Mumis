import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import { AnimatePresence } from 'framer-motion';

import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import ErrorPage from './pages/404';
import Layout from './pages/Home/Layout';
import Chat from "./pages/Chat/Chat";
import TasksPage from "./pages/Tasks/TaskPageMain";

//APP
function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Layout/>}></Route>
          <Route path="/chat" element={<Chat/>}></Route>
          <Route path="/tasks" element={<TasksPage/>}></Route>
          <Route path='/*' element={<ErrorPage/>}></Route>
        </Routes>  
    </AnimatePresence>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);