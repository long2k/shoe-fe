import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Footer from "../common/components/partial/Footer";
import Header from "../common/components/partial/Header";
import { WalletSelectorContextProvider } from "../near/context/WalletContext";
import { store } from "../redux/store";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <WalletSelectorContextProvider>
            <Provider store={store}>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </Provider>
        </WalletSelectorContextProvider>
    );
}
