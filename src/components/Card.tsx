import * as React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { MyButton, Spanskeleton } from "./StyledComponents";
import MyModal from "./Modal";

const Cardbody = styled.div`
  border-radius: 10px;
  max-width: 380px;
  width: 100%;
  ${(props: {
    mode: any;
    topColor: any;
    background: any;
    border: any;
    fontColor: any;
    trickyColor: any;
  }) => {
    return css`
      background: ${props.background} !important;
      border: ${props.border};
      ${Cardtopline} {
        background: ${props.topColor};
      }
      ${Smallspan0} {
        color: ${props.trickyColor};
      }
    `;
  }}
`;
const Cardbody_inner = styled.div`
  padding: 18px 30px 25px;
  text-align: center;

  @media (max-width: 345px) {
    padding: 18px 10px 25px;
  }
`;
const Cardtopline = styled.div`
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  width: 100%;
  height: 10px;
  background: rgba(252, 220, 105, 0.7);
`;
const MyButton0 = styled(MyButton)`
  max-width: 330px;
  width: 100%;
  height: 50px;
`;
const Headspan = styled(Spanskeleton)`
  font-weight: 600;
  font-size: 20px;
  line-height: 33px;
`;
const Smallspan = styled(Spanskeleton)`
  font-weight: 400;
  font-size: 14px;
  line-height: 33px;
  @media (max-width: 374px) {
    font-size: 10px;
  }
`;
const Smallspan0 = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 33px;
  font-family: "Inter";
  font-style: normal;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      top: "calc(50% - 200px)",
      podition: "fixed",
    },
  })
);

const Card = (props: any) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleopen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ padding: "0px 9px 40px" }}>
      <Cardbody
        mode={props.mode}
        topColor={props.topColor}
        background={props.background}
        border={props.border}
        fontColor={props.fontColor}
        trickyColor={props.trickyColor}
      >
        <Cardtopline />
        <Cardbody_inner>
          <Headspan>Cash Pot</Headspan>
          <div style={{ padding: "21px 0px 0px" }}></div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "140px", height: "27px", display: "flex" }}>
              <Smallspan>Total Token Staked:</Smallspan>
            </div>
            <div style={{ width: "105px", height: "27px", display: "flex" }}>
              <Smallspan>Deposit Fee</Smallspan>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "140px", height: "27px", display: "flex" }}>
              <Smallspan0>$0</Smallspan0>
            </div>
            <div style={{ width: "105px", height: "27px", display: "flex" }}>
              <Smallspan0>$0</Smallspan0>
            </div>
          </div>

          <div style={{ padding: "10px 0px 0px" }}></div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "140px", height: "27px", display: "flex" }}>
              <Smallspan>Min Staking Amount</Smallspan>
            </div>
            <div style={{ width: "105px", height: "27px", display: "flex" }}>
              <Smallspan>APY</Smallspan>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "140px", height: "27px", display: "flex" }}>
              <Smallspan0>0</Smallspan0>
            </div>
            <div style={{ width: "105px", height: "27px", display: "flex" }}>
              <Smallspan0>0</Smallspan0>
            </div>
          </div>

          <div style={{ padding: "10px 0px 0px" }}></div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "140px", height: "27px", display: "flex" }}>
              <Smallspan>Lock Duration</Smallspan>
            </div>
            <div style={{ width: "105px", height: "27px", display: "flex" }}>
              <Smallspan>SOLCH Earned</Smallspan>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "140px", height: "27px", display: "flex" }}>
              <Smallspan0>365 Days</Smallspan0>
            </div>
            <div style={{ width: "105px", height: "27px", display: "flex" }}>
              <Smallspan0>0</Smallspan0>
            </div>
          </div>
          <div style={{ padding: "25px 0px 0px" }}></div>

          <MyButton0>Claim Rewards</MyButton0>
          <div style={{ padding: "24px 0px 0px" }}></div>
          <MyButton0 onClick={handleopen}>{"Connect Wallet"}</MyButton0>
        </Cardbody_inner>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <MyModal mode={props.mode} />
          </Fade>
        </Modal>
      </Cardbody>
    </div>
  );
};
export default Card;
