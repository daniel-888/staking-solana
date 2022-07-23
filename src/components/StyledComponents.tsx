import styled, { css } from "styled-components";
import { styled as styledmui, Button } from "@mui/material";

export const Backboard = styled.div`
  padding: 150px 0px 0px;
  width: 100%;
  ${(props: { mode: any }) => {
    switch (props.mode) {
      case "day":
        return css`
          background-color: #e5e5e5;
          ${Spanskeleton} {
            color: black;
          }
          ${MyButton1} {
            border: 2px solid rgba(0, 0, 0, 0.3) !important;
            color: black !important;
          }
          ${Div0} {
            background: #e5e5e5;
            border: 1px solid rgba(0, 0, 0, 0.1) !important;
          }
        `;
      case "night":
        return css`
          background-color: black;
          ${Spanskeleton} {
            color: white;
          }
          ${MyButton1} {
            border: 2px solid rgba(255, 255, 255, 0.3) !important;
            color: white !important;
          }
          ${Div0} {
            background: black;
            border: 1px solid rgba(255, 255, 255, 0.3);
          }
        `;
    }
  }}
`;
export const Spanskeleton = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 46px;
  line-height: 56px;
  color: black;
`;
export const Smallupspan = styled(Spanskeleton)`
  font-weight: 400;
  font-size: 40px;
`;
export const Smallspan = styled(Spanskeleton)`
  font-size: 16px;
  line-height: 33px;
  font-weight: 400;
`;

export const Buttonspan = styled(Spanskeleton)`
  font-size: 16px;
  line-height: 33px;
  font-weight: 400;
  color: white !important;
`;

export const Middlespan = styled(Spanskeleton)`
  font-size: 18px;
  line-height: 0px;
  font-weight: 400;
`;

export const UnderBar = styled.div`
  width: 78px;
  height: 3px;
  background: linear-gradient(261.78deg, #14f195 -1.89%, #9945ff 99.57%);
  border-radius: 2px;
`;

export const SmallspaPrice = styled(Spanskeleton)`
  font-size: 25px;
  line-height: 33px;
  font-weight: 500;
`;

export const MyButton = styled(Button)`
  background: linear-gradient(261.78deg, #14f195 -1.89%, #9945ff 99.57%);
  border-radius: 10px !important;
  text-transform: capitalize !important;
  margin: 0 auto !important;
  font-size: 17px;
  color: white !important;

  @media (max-width: 768px) {
    margin-bottom: 20px !important;
  }
`;

export const Buttongroup = styled.div`
  max-width: ${(props: { w?: number }) => props.w}px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const MyButton0 = styled(MyButton)`
  width: 170px;
  height: 67px;
`;
export const MyButton1 = styled(MyButton)`
  width: 170px;
  height: 67px;
  background: white;
  border: 2px solid rgba(0, 0, 0, 0.3) !important;
`;

export const SocialButton = styled(MyButton)`
  width: 193px;
  height: 50px;
`;

export const Group0 = styled.div`
  max-width: ${(props: { w?: number }) => props.w}px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const Div0 = styled.div`
  max-width: 441px;
  width: 100%;
  height: 145px;
  border-radius: 20px;
  margin: auto;
`;
