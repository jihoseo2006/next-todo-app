import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import GlobalStyles from "@/styles/GlobalStyles";
import store from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyles />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>

  )
}
