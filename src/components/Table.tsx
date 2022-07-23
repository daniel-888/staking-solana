import React from "react";
import styled, { css } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { Spanskeleton } from "./StyledComponents";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    borderCollapse: "inherit",
  },
});

const Board = styled.div`
  max-width: 1255px;
  width: 100%;
  border-radius: 20px;
  ${(props: { mode: any }) => {
    switch (props.mode) {
      case "day":
        return css`
          background: #eff2f9;
          border: 1px solid rgba(0, 0, 0, 0.1);
          ${TableCell0} {
            color: black;
          }
        `;
      case "night":
        return css`
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          ${TableCell0} {
            color: white;
          }
        `;
    }
  }}
`;

const InnerBoard = styled.div`
  max-width: 1175px;
  width: 100%;
  padding: 49px 0px 50px;
  margin: 0 auto;
`;
const MyPaper = styled(Paper)`
  box-shadow: none !important;
`;
const Title = styled(Spanskeleton)`
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
`;
const TableCell0 = styled(TableCell)`
  border-bottom: 2.5px solid black !important;
  margin: 5px 0px 0px !important;
`;
const MyTableRow = styled(TableRow)`
  height: 70px;
`;

function createData(username: string, duration: string, reward: string) {
  return { username, duration, reward };
}

const rows = [
  createData("Adam", "90 Days", "300 SOLCH"),
  createData("Adam", "90 Days", "300 SOLCH"),
];

export default function BasicTable(props: any) {
  const classes = useStyles();
  return (
    <Board mode={props.mode}>
      <InnerBoard>
        <Title>Staking Leaderboard</Title>
        <div style={{ padding: "50px 0px 0px" }}></div>
        <TableContainer
          sx={{
            background:
              props.mode === "day" ? "#EFF2F9" : "rgba(255, 255, 255, 0)",
          }}
          component={MyPaper}
        >
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <MyTableRow>
                <TableCell0 align="center">#</TableCell0>
                <TableCell0 align="center">Username</TableCell0>
                <TableCell0 align="center">Staking Duration</TableCell0>
                <TableCell0 align="center">Earbed Rewards</TableCell0>
              </MyTableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <MyTableRow
                  key={row.username}
                  style={{ background: "green", padding: "5px 0px 0px" }}
                >
                  <TableCell0
                    sx={{
                      borderBottomLeftRadius: "10px !important",
                      borderTopLeftRadius: "10px !important",
                      borderLeft: "10px solid blue !important",
                    }}
                    align="center"
                  >
                    1
                  </TableCell0>
                  <TableCell0 align="center">{row.username}</TableCell0>
                  <TableCell0 align="center">{row.duration}</TableCell0>
                  <TableCell0 align="center">{row.reward}</TableCell0>
                </MyTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </InnerBoard>
    </Board>
  );
}
