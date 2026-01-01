import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Layout from "../layouts";
import Post from "../pages/post";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/post/:id"} element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;