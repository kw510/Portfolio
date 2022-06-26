import type { Component, lazy } from 'solid-js';
import { Routes, Route } from "solid-app-router"

import Home from "./views/home"

const App: Component = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
  );
};

export default App;
