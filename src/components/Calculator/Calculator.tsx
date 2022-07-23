import * as React from "react";
import styled, { css } from "styled-components";
import { useState } from "react";
import { Spanskeleton, Buttongroup, MyButton } from "../StyledComponents";

import "./calculator.css";

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
          ${Pan} {
            background: white;
            border: 1px solid rgba(0, 0, 0, 0.1);
          }
          ${Div0} {
            border: 1px solid rgba(0, 0, 0, 0.2);
          }
          ${Spanskeleton} {
            color: black;
          }
        `;
      case "night":
        return css`
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          ${Pan} {
            background: #1e1e1e;
            border: 1px solid rgba(255, 255, 255, 0.7);
          }
          ${Div0} {
            border: 1px solid rgba(255, 255, 255, 0.3);
          }
          ${Spanskeleton} {
            color: white;
          }
        `;
    }
  }}
`;
const InnerBoard = styled.div`
  max-width: 914px;
  width: 100%;
  margin: 0 auto;
`;
const Middlespan = styled(Spanskeleton)`
  font-size: 24px;
  line-height: 33px;
  font-weight: 600;
`;

const Smallspan = styled(Spanskeleton)`
  font-size: 14px;
  line-height: 33px;
  font-weight: 400;
`;
const Smallspan0 = styled(Spanskeleton)`
  font-size: 13px;
  line-height: 16px;
  font-weight: 300;
  font-style: italic;
`;
const Greenspan0 = styled(Spanskeleton)`
  color: #22e0a0 !important;
  font-weight: 600;
  font-size: 25px;
  line-height: 33px;
`;
const Greenspan1 = styled(Spanskeleton)`
  color: #22e0a0 !important;
  font-weight: 400;
  font-size: 16px;
  line-height: 33px;
  margin-top: 3px;
`;
const Pan = styled.div`
  box-sizing: border-box;
  border-radius: 20px;
`;
const InnerPan = styled.div`
  max-width: 555px;
  width: 100%;
  margin: 0 auto;
`;
const Div0 = styled.div`
  border-radius: 10px;
`;
const MyButton0 = styled(MyButton)`
  width: 103px;
  height: 50px;
  ${(props: { checked: any; mode: any }) => {
    if (props.checked) {
      return css`
        background: linear-gradient(261.78deg, #14f195 -1.89%, #9945ff 99.57%);
        color: white !important;
      `;
    } else if (props.mode === "day") {
      return css`
        background: white;
        border: 1px solid #22e0a0 !important;
        color: black !important;
      `;
    } else {
      return css`
        background: white;
        border: 1px solid #22e0a0 !important;
        color: white !important;
      `;
    }
  }}
`;

const Spacer49 = styled.div`
  padding: 49px 0px 0px;
`;

const Spacer64 = styled.div`
  padding: 64px 0px 0px;
`;

const Spacer34 = styled.div`
  padding: 34px 0px 0px;
`;
const Spacer32 = styled.div`
  padding: 32px 0px 0px;
`;

const Spacer13 = styled.div`
  padding: 13px 30px 20px;
`;

const Spacer20 = styled.div`
  padding: 20px 30px 20px;
`;

const Spacer28 = styled.div`
  padding: 28px 30px 20px;
`;
const Spacer25 = styled.div`
  padding: 13px 0px 12px;
`;
const Spacer11 = styled.div`
  padding: 0px 0px 11px;
`;

const Calculator = (props: any) => {
  const [selected, setSelected] = useState<number>(0);
  // const [mode, setMod] = useState("");
  return (
    <Board mode={props.mode}>
      <InnerBoard>
        <Spacer49 />
        <Middlespan>
          <strong>Staking Calculator</strong>
        </Middlespan>
        <br />
        <Smallspan>
          Calculate your SOLCH depending on the amount of staked tokens and your
          lock time.
        </Smallspan>
        <Spacer64 />
        <Pan>
          <Spacer34 />
          <InnerPan>
            <Div0>
              <Spacer13>
                <div className="calculator_smallspan">
                  <Smallspan>Enter Amount</Smallspan>
                </div>
                <div className="calculator_middlespan">
                  <Middlespan>0.0</Middlespan>
                  <Middlespan>SOLCH</Middlespan>
                </div>
              </Spacer13>
            </Div0>
            <Spacer20 />
            <Buttongroup w={555}>
              <MyButton0
                checked={selected === 0 ? true : false}
                mode={props.mode}
                onClick={() => {
                  setSelected(0);
                }}
              >
                7D
              </MyButton0>
              <MyButton0
                checked={selected === 1 ? true : false}
                mode={props.mode}
                onClick={() => {
                  setSelected(1);
                }}
              >
                30D
              </MyButton0>
              <MyButton0
                checked={selected === 2 ? true : false}
                mode={props.mode}
                onClick={() => {
                  setSelected(2);
                }}
              >
                90D
              </MyButton0>
              <MyButton0
                checked={selected === 3 ? true : false}
                mode={props.mode}
                onClick={() => {
                  setSelected(3);
                }}
              >
                180D
              </MyButton0>
              <MyButton0
                checked={selected === 4 ? true : false}
                mode={props.mode}
                onClick={() => {
                  setSelected(4);
                }}
              >
                365D
              </MyButton0>
            </Buttongroup>
            <Spacer28 />
            <Div0>
              <Spacer25>
                <Spacer11>
                  <Smallspan>ROI</Smallspan>
                </Spacer11>
                <div className="calculator_greenspan">
                  <Greenspan0>0</Greenspan0>
                  <Greenspan1>SOLCH</Greenspan1>
                </div>
                <Smallspan>Locked until 28/03/2022</Smallspan>
              </Spacer25>
            </Div0>
            <Spacer28 />
            <Smallspan0>
              Calculated based on current rates. All figures are estimates
              provided for your convenience only, distributed proportionally
              among token holders
            </Smallspan0>
            <Spacer28 />
          </InnerPan>
        </Pan>
        <Spacer32 />
      </InnerBoard>
    </Board>
  );
};
export default Calculator;
