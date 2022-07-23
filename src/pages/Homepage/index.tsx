import * as React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import { useConnection, useAnchorWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import { SOLCH_TOKEN_MINT } from "../constants";
import { styled as styledmui, Button } from "@mui/material";
import "./homepage.css";
import MyCard from "../../components/Card";
import MyTable from "../../components/StakeTable";
import Calculator from "../../components/Calculator";
import Pools from "../../components/Pools";
import {
  Backboard,
  Spanskeleton,
  Smallupspan,
  Smallspan,
  Buttonspan,
  Middlespan,
  UnderBar,
  SmallspaPrice,
  MyButton,
  Buttongroup,
  MyButton0,
  MyButton1,
  SocialButton,
  Group0,
  Div0,
} from "../../components/StyledComponents";

const Spacer = styled.div`
  padding: 0px 0px 150px;
`;
let connection = new web3.Connection(web3.clusterApiUrl("devnet"), "confirmed");

const Homepage = (props: any) => {
  const [walletBalance, setWalletBalance] = useState(0);
  const [walletTokenAccount, setWalletTokenAccount] = useState("");

  // const wallet = useAnchorWallet();

  // const getWalletBalance = async () => {
  //   if (wallet) {
  //     const result: any = await connection.getTokenAccountsByOwner(
  //       wallet!.publicKey,
  //       {
  //         mint: new web3.PublicKey(SOLCH_TOKEN_MINT),
  //       }
  //     );
  //     console.log(result);
  //     if (result?.result?.value) {
  //       const { value } = result.result;
  //       if (value?.length > 0) {
  //         let totalBalance = 0;
  //         value.forEach((v: any) => {
  //           totalBalance +=
  //             v.account?.data?.parsed?.info?.tokenAmount?.uiAmount;
  //         });
  //         setWalletBalance(totalBalance);
  //         setWalletTokenAccount(value[0].pubkey);
  //         console.log(value[0].pubkey);
  //       }
  //     }
  //   }
  // };
  return (
    <Backboard mode={props.mode}>
      <div className="homepage_inner">
        <div>
          <Spanskeleton>Earn Rewards By Staking Solana Cash</Spanskeleton>
          <br />
          <Smallupspan>(SOLCH)</Smallupspan>
        </div>
        <div className="homepage_div_span">
          <Smallspan>
            First Decentralized p2P Payment System deployed on Solana Network
          </Smallspan>
        </div>
        {/* <MyButton onClick={handle}>{backstatus ? "Day" : "Night"}</MyButton> */}
        <div className="homepage_div_button">
          <Buttongroup w={374}>
            <MyButton0>Certik Audit</MyButton0>
            <MyButton1>Lite Pater</MyButton1>
          </Buttongroup>
        </div>
        <div className="homepage_div_group">
          <Group0 w={915}>
            <Div0>
              <div className="homepage_div_padding_small">
                <Smallspan>TOTAL VALUE LOCKED</Smallspan>
              </div>

              <br />
              <SmallspaPrice>$0</SmallspaPrice>
            </Div0>
            <Div0>
              <div className="homepage_div_padding_small">
                <Smallspan>TOTAL VALUE LOCKED</Smallspan>
              </div>

              <br />
              <SmallspaPrice>$0</SmallspaPrice>
            </Div0>
          </Group0>
        </div>

        <div className="homepage_div_margin_small">
          <div className="homepage_middelspan_margin">
            <Middlespan>
              Built On <strong>SOLANA</strong>
            </Middlespan>
            <br />
            <div className="homepage_underbar">
              <UnderBar />
            </div>
          </div>
        </div>

        <div className="homepage_margin_small">
          <div className="homepage_middlespan">
            <Middlespan>Follow us on our social media for more info</Middlespan>
          </div>
        </div>

        <div className="homepage_margin_buttongroup">
          <Buttongroup w={661}>
            <SocialButton>
              <Buttongroup w={111}>
                <img
                  src="assets/imgs/vector.png"
                  width="22.08"
                  height="22.08"
                  className="homepage_button_icon"
                ></img>
                <Buttonspan>Telegram</Buttonspan>
              </Buttongroup>
            </SocialButton>
            <SocialButton>
              <Buttongroup w={111}>
                <img
                  src="assets/imgs/Frame.png"
                  width="25"
                  height="25"
                  className="homepage_button_icon"
                ></img>
                <Buttonspan>Twitter</Buttonspan>
              </Buttongroup>
            </SocialButton>
            <SocialButton>
              <Buttongroup w={111}>
                <img
                  src="assets/imgs/instagram(2) 3.png"
                  width="25"
                  height="25"
                  className="homepage_button_icon"
                ></img>
                <Buttonspan>Instagram</Buttonspan>
              </Buttongroup>
            </SocialButton>
          </Buttongroup>
        </div>

        <Calculator mode={props.mode} />

        <Spacer />

        <Pools mode={props.mode}></Pools>

        <Spacer />

        <MyTable mode={props.mode} />

        <Spacer />
      </div>
    </Backboard>
  );
};
export default Homepage;
