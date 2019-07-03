import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";

import * as Sentry from "@sentry/browser";

import Core from "../components/Core";

Sentry.init({ dsn: "" });

export default class MyApp extends App {
  // @ts-ignore-next-line
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    // @ts-ignore-next-line TS2339
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Leirprogram - Fylkesleir Buskerud 2019</title>
        </Head>

        <Core>
          <Component {...pageProps} />
        </Core>
      </Container>
    );
  }
}
