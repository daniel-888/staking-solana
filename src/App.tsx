import React, { useMemo } from "react";
import "./App.css";
import MyRouter from "./router";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  getPhantomWallet,
  getSolflareWallet,
} from "@solana/wallet-adapter-wallets";

import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
function App() {
  const wallets = useMemo(() => [getPhantomWallet(), getSolflareWallet()], []);
  return (
    <div className="App">
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <MyRouter />
        </WalletModalProvider>
      </WalletProvider>
    </div>
  );
}

export default App;
