import NextProgressBar from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={session}>
      {getLayout(
        <>
          <NextProgressBar />
          <Component {...pageProps} />
        </>
      )}
    </SessionProvider>
  );
};

export default App;
