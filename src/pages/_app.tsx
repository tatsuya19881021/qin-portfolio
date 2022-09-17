import "src/lib/tailwind.css";

import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import type { CustomAppPage } from "next/app";
import Head from "next/head";

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS>
        <NotificationsProvider position="top-center">
          {getLayout(<Component {...pageProps} />)}
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
};

export default App;
