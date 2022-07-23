import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Button } from "@mui/material";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { Spanskeleton } from "./StyledComponents";

const Board = styled.div`
  width: 100%;
  padding: 30px 0px 0px;
  backdrop-filter: blur(8px);
  position: fixed;
  box-sizing: border-box;
  z-index: 1;
  margin: 0 auto;
  ${(props: { mode: any }) => {
    switch (props.mode) {
      case "day":
        return css`
          background: #e5e5e5;
          opacity: 0.95;
          ${Switch} {
            background-image: url("assets/imgs/day.png");
          }
          ${Spanskeleton} {
            color: black;
          }
        `;
      case "night":
        return css`
          background: black;
          opacity: 0.95;
          ${Switch} {
            background-image: url("assets/imgs/night.png");
          }
          ${Spanskeleton} {
            color: white;
          }
        `;
    }
  }}
  @media(max-width:570px) {
    padding: 15px 0px 15px;
  }
`;
const InnerBoard = styled.div`
  max-width: 1255px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: 570px) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  background-image: url("assets/imgs/looog 1.png");
  width: 194px;
  height: 40px;
  margin: 0 auto;
`;

const SwitchGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 200px;
  margin: 0 auto;
`;
const Smallspan = styled(Spanskeleton)`
  font-weight: 400;
  font-size: 15px;
  line-height: 33px;
`;
const Switch = styled.div`
  width: 85px;
  height: 42px;
  background-repeat: no-repeat;
  background-size: cover;
`;
const WalletButton = styled(WalletMultiButton)`
  width: 170px;
  height: 50px;
  background: linear-gradient(261.78deg, #14f195 -1.89%, #9945ff 99.57%);
  border-radius: 10px !important;
  color: white !important;
  margin: 0 auto !important;
`;

const Header = (props: any) => {
  const [mode, setMode] = useState("day");
  const toggle = () => {
    setMode(mode === "day" ? "night" : "day");
    props.setMode(mode === "day" ? "night" : "day");
  };
  return (
    <Board mode={mode}>
      <InnerBoard>
        <Logo />
        <div>
          <SwitchGroup>
            <Smallspan>Light</Smallspan>
            <Switch onClick={toggle}></Switch>
            <Smallspan>Dark</Smallspan>
          </SwitchGroup>
        </div>
        <WalletButton>Connet Wallet</WalletButton>
      </InnerBoard>
    </Board>
  );
};

export default Header;
