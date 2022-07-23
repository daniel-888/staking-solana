import * as React from "react";
import styled, { css } from "styled-components";
import { useState } from "react";

import Card from "./Card";
import { Spanskeleton } from "./StyledComponents";

const Board = styled.div`
  max-width: 1255px;
  width: 100%;
  box-sizing: border-box;
  backdrop-filter: blur(8px);
  border-radius: 20px;
  ${(props: { mode: any }) => {
    switch (props.mode) {
      case "day":
        return css`
          background: #eff2f9;
          border: 1px solid rgba(0, 0, 0, 0.1);
          ${Spanskeleton} {
            color: black;
          }
        `;
      case "night":
        return css`
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          ${Spanskeleton} {
            color: white;
          }
        `;
    }
  }}
`;
const InnerBoard = styled.div`
  padding: 49px 40px 68px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-wrap: wrap;
`;
const Middlespan = styled(Spanskeleton)`
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
`;

const Pools = (props: any) => {
  return (
    <Board mode={props.mode}>
      <div style={{ padding: "49px 0px 0px" }}></div>
      <Middlespan>Staking Pools</Middlespan>
      <div style={{ padding: "17px 0px 0px" }}></div>
      <InnerBoard>
        <Card
          mode={props.mode}
          background={props.mode === "day" ? "#FFFFFF;" : "#1E1E1E;"}
          topColor={props.mode === "day" ? "white;" : "#1E1E1E;"}
          border={
            props.mode === "day"
              ? "1px solid rgba(0, 0, 0, 0.2);"
              : "1px solid rgba(255, 255, 255, 0.7);"
          }
          fontColor={props.mode === "day" ? "black;" : "white;"}
          trickyColor={props.mode === "day" ? "black;" : "white;"}
        ></Card>
        <Card
          mode={props.mode}
          background={props.mode === "day" ? "#FFFFFF;" : "#1E1E1E;"}
          topColor={props.mode === "day" ? "white;" : "#1E1E1E;"}
          border={
            props.mode === "day"
              ? "1px solid rgba(0, 0, 0, 0.2);"
              : "1px solid rgba(255, 255, 255, 0.7);"
          }
          fontColor={props.mode === "day" ? "black;" : "white;"}
          trickyColor={props.mode === "day" ? "black;" : "white;"}
        ></Card>
        <Card
          mode={props.mode}
          background={
            props.mode === "day"
              ? "linear-gradient(180deg, rgba(219, 166, 86, 0.1) 0%, rgba(255, 255, 255, 0) 50.11%, rgba(254, 240, 190, 0.0435921) 100%), #f4f7fe;"
              : "linear-gradient(180deg, rgba(219, 166, 86, 0.1) 0%, rgba(255, 255, 255, 0) 50.11%, rgba(254, 240, 190, 0.0435921) 100%), #1e1e1e"
          }
          topColor={
            props.mode === "day"
              ? "rgba(219, 166, 86, 0.7);"
              : "rgba(219, 166, 86, 0.7);"
          }
          border={
            props.mode === "day" ? "1px solid #DBA656;" : "1px solid #DBA656;"
          }
          fontColor={props.mode === "day" ? "black;" : "white;"}
          trickyColor={"#dba656;"}
        ></Card>
        <Card
          mode={props.mode}
          background={
            props.mode === "day"
              ? "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50.11%, rgba(254, 240, 190, 0.0435921) 100%), #FFFFFF;"
              : "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50.11%, rgba(254, 240, 190, 0.0435921) 100%), #1E1E1E;"
          }
          topColor={
            props.mode === "day"
              ? "rgba(0, 0, 0, 0.7);"
              : "rgba(255, 255, 255, 0.7);"
          }
          border={
            props.mode === "day"
              ? "1px solid rgba(0, 0, 0, 0.2);"
              : "1px solid #FFFFFF;"
          }
          fontColor={props.mode === "day" ? "black;" : "white;"}
          trickyColor={props.mode === "day" ? "black;" : "white;"}
        ></Card>
        <Card
          mode={props.mode}
          background={
            props.mode === "day"
              ? "linear-gradient(180deg, rgba(219, 166, 86, 0.1) 0%, rgba(255, 255, 255, 0) 50.11%, rgba(254, 240, 190, 0.0435921) 100%), #f4f7fe;"
              : "linear-gradient(180deg, rgba(252, 220, 105, 0.1) 0%, rgba(255, 255, 255, 0) 50.11%, rgba(254, 240, 190, 0.0435921) 100%), #1E1E1E;"
          }
          topColor={
            props.mode === "day"
              ? "rgba(252, 220, 105, 0.7);"
              : "rgba(252, 220, 105, 0.7);"
          }
          border={
            props.mode === "day" ? "1px solid #DBA656;" : "1px solid #DBA656;"
          }
          fontColor={props.mode === "day" ? "black;" : "white;"}
          trickyColor={"#DBA656;"}
        ></Card>
      </InnerBoard>
    </Board>
  );
};
export default Pools;
