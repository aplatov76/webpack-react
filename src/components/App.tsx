import "../styles/index.sass";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { MainPageAsync } from "../pages/MainPage/MainPage.async";
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async";
import { Suspense, useContext, useState } from "react";
import { ThemeContext, Theme } from "../theme/ThemeContext";
import { useTheme } from "../theme/useTheme";
import { classNames } from "../helpers/classNames";

export const App = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames("app", { light: true }, ["test"])}>
      <button onClick={() => toogleTheme()}>Toggle</button>
      <Link to={"/"}>Шлавная</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/main"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
