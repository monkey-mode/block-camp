// 1. import `NextUIProvider` component
import { NextUIProvider, Card, Text, Row } from "@nextui-org/react";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  ConnectButton,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Headers from "../components/Header";

function MyApp({ Component, pageProps }) {
  const { chains, provider } = configureChains(
    [chain.goerli],
    [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
  );
  const { connectors } = getDefaultWallets({
    appName: "SCAD",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    // 2. Use at the root of your app
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <NextUIProvider>
          <Headers />
          <Component {...pageProps} />
        </NextUIProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
