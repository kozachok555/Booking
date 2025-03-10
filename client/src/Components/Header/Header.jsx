import "./Header.scss";
import { useNavigate } from "react-router";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <div className="Header">
        <div className="ava-block" onClick={()=>{
            navigate("/main-page")
        }}>
          <div className="circle"></div>
          <button className="text-booking">Booking</button>
        </div>
        <div className="buttons-block">
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "orange",
              }}
              href="#contained-buttons"
              onClick={() => {
                navigate("/main-page");
              }}
            >
              HOME
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "orange",
              }}
              href="#contained-buttons"
              onClick={() => {
                navigate("/about");
              }}
            >
              ABOUT ME
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}
