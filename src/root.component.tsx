import { store as homeStore } from "@home/application";
import { ContentWrapper } from "@sinbad/mf-react-component";
import React, { StrictMode, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// NOTE https://reactjs.org/docs/code-splitting.html#reactlazy
const HomePage = React.lazy(
  () => import("./pages/home/presentation/components")
);

export default function Root(props) {
  return (
    <StrictMode>
      <Suspense
        fallback={
          <div id="loading-ring-component">
            <div></div>
          </div>
        }
      >
        <BrowserRouter>
          <ContentWrapper>
            <Switch>
              <Route path="/pages/dashboard" exact>
                <Provider store={homeStore}>
                  <HomePage />
                </Provider>
              </Route>
            </Switch>
          </ContentWrapper>
        </BrowserRouter>
      </Suspense>
    </StrictMode>
  );
}
