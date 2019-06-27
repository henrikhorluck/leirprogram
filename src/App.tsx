import React, { FC } from "react";

import { Route, Router, Switch } from "react-router";
import { Sidetittel } from "nav-frontend-typografi";
import PanelBase from "nav-frontend-paneler";
import { createBrowserHistory } from "history";
import * as Sentry from '@sentry/browser';

import Core from "Core";
import { Events } from "Components/Events";
import { ContactInfo } from "./Components/Contact";
import { Home } from "./Components/Home";
import { Sponsors } from "./Components/Sponsors";
import { OpeningHours } from "./Components/OpeningHours";
import { CampRules } from "./Components/Camprules";

Sentry.init({dsn: "https://a933c3feff5f440683cb3c9fdde4bc4b@sentry.io/1491537"});

export const routes = {
  home: "/",
  contact: "/kontakt",
  events: "/program",
  sponsor: "/sponsor",
  openingHours: "/tider",
  camprules: "/leirregler"
};

const history = createBrowserHistory();

export const App: FC = () => (
  <Router history={history}>
    <Core>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.events} component={Events} />
        <Route path={routes.contact} component={ContactInfo} />
        <Route path={routes.sponsor} component={Sponsors} />
        <Route path={routes.openingHours} component={OpeningHours} />
        <Route path={routes.camprules} component={CampRules} />
        <Route
          path="*"
          render={() => (
            <PanelBase>
              <Sidetittel>404 Siden finnes ikke</Sidetittel>
            </PanelBase>
          )}
        />
      </Switch>
    </Core>
  </Router>
);
