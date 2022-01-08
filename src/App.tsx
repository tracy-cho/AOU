import { Header } from "components/template/Header";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ErrorPage,
  MainPage,
  MemberPage,
  NoticePage,
  QnaPage,
  SystemPage,
  WorldPage,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/qna"} element={<QnaPage />} />
        <Route path={"/notice"} element={<NoticePage />} />
        <Route path={"/member"} element={<MemberPage />} />
        <Route path={"/system"} element={<SystemPage />} />
        <Route path={"/world"} element={<WorldPage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
