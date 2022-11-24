import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, useDispatch } from "react-redux";
import { store } from "../redux/store";
import Header from "../common/components/partial/Header";
import Footer from "../common/components/partial/Footer";
import { initialize } from "../redux/slices/wallet.slice";
import { useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
    
    return (
        <Provider store={store}>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </Provider>
    );
}
