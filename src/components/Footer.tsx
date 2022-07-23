import * as React from "react";
import styled, { css } from "styled-components";

import { Spanskeleton } from "./StyledComponents";

const Board = styled.div`
  width: 100%;
  // position: fixed;
  z-index: 1;
  margin: 0 auto;
  // top: calc(100% - 70px);
  ${(props: { mode: any }) => {
    switch (props.mode) {
      case "day":
        return css`
          background: white;
          opacity: 0.95;
          ${Spanskeleton} {
            color: black;
          }
          ${IconFacebook} {
            background-image: url("assets/imgs/facebook0.png");
          }
          ${IconTelegram} {
            background-image: url("assets/imgs/telegram0.png");
          }
          ${IconInstagram} {
            background-image: url("assets/imgs/instagram0.png");
          }
          ${IconTwitter} {
            background-image: url("assets/imgs/twitter0.png");
          }
        `;
      case "night":
        return css`
          background: #1e1e1e;
          opacity: 0.9;
          ${Spanskeleton} {
            color: white;
          }
          ${IconFacebook} {
            background-image: url("assets/imgs/facebook1.png");
          }
          ${IconTelegram} {
            background-image: url("assets/imgs/telegram1.png");
          }
          ${IconInstagram} {
            background-image: url("assets/imgs/instagram1.png");
          }
          ${IconTwitter} {
            background-image: url("assets/imgs/twitter1.png");
          }
        `;
    }
  }}
`;

const InnerBoard = styled.div`
  max-width: 1255px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 25px 0px 25px;
  @media (max-width: 570px) {
    flex-direction: column;
  }
`;

const Smallspan = styled(Spanskeleton)`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;
const IconGroup = styled.div`
  max-width: 200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Icon = styled.div`
  width: 25px;
  height: 25px;
  background-repeat: no-repeat;
  background-size: cover;
`;
const IconTelegram = styled(Icon)``;
const IconFacebook = styled(Icon)``;
const IconInstagram = styled(Icon)``;
const IconTwitter = styled(Icon)``;

const Footer = (props: any) => {
  return (
    <Board mode={props.mode}>
      <InnerBoard>
        <Smallspan>© 2021 Solanacash. All Rights Reserved.</Smallspan>
        <IconGroup>
          <IconTelegram />
          <IconFacebook />
          <IconInstagram />
          <IconTwitter />
        </IconGroup>
      </InnerBoard>
    </Board>
  );
};
export default Footer;
