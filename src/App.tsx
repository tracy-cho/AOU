import { MoveTop } from "components/atom/MoveTop";
import { Header } from "components/template/Header";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    CharacterGuidePage,
    ErrorPage,
    MainPage,
    MemberPage,
    NoticePage,
    QnaPage,
    SystemPage,
    WorldPage,
} from "./pages";
import { Star } from "./components/template/Star";
import { ModalWrapper } from "components/Modal";

const App = () => {
  return (
    <BrowserRouter>
      <Star />
      <Header />
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/qna"} element={<QnaPage />} />
        <Route path={"/notice"} element={<NoticePage />} />
        <Route path={"/member"} element={<MemberPage />} />
        <Route path={"/system"} element={<SystemPage />} />
        <Route path={"/world"} element={<WorldPage />} />
        <Route path={"/character/guide"} element={<CharacterGuidePage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
      <MoveTop />
      <ModalWrapper />
    </BrowserRouter>
  );
};

export default App;
