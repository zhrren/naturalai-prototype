import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {App} from "antd";
import {MessageHolder} from "@router/MessageHolder";
import {NavigateHolder} from "@router/NavigateHolder";
import React from "react";
import {LoginPage} from "@pages/login/LoginPage";

export function useRoutes(): any {
  return [
    {
      path: "/login",
      name: "登录",
      element: <LoginPage />,
      children: [],
      meta: {
        access: true,
      },
    },
  ];
}

export function Router(): JSX.Element {
  return (
    <App>
      <MessageHolder>
        <BrowserRouter basename={"/dashboard"}>
          <NavigateHolder>
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              {renderRoutes(useRoutes())}
            </Routes>
          </NavigateHolder>
        </BrowserRouter>
      </MessageHolder>
    </App>
  );
}

function renderRoutes(routes: any): [JSX.Element] {
  return routes.map((route: any, index: any) => {
    const { path, element, children, meta } = route;
    if (meta.access) {
      if (children) {
        return (
          <Route key={index} path={path} element={element}>
            {renderRoutes(children)}
          </Route>
        );
      }
      return <Route key={index} path={path} element={element} />;
    }
  });
}
