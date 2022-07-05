/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { textColor, fadeIn } from "./styles";

export const finalStyle = () =>
  css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: textColor,
    animation: `${fadeIn} .6s `,
    fontSize: "1.6rem",
    "& .message": {
      fontSize: "3.6rem",
      fontWeight: 700,
      display: "inline-block"
    },
    "& .result": {
      color: "#2D2D2D",
      marginTop: "1.8rem",
      display: "inline-block"
    },
    "& .high-score": {
      color: "#2D2D2D",
      marginTop: "1.6rem",
      display: "inline-block"
    },
    "& .trivia-button": {
      display: "flex",
      justifyContent: "center"
    }
  });

export const medalStyle = () =>
  css({
    width: "10rem",
    filter: "drop-shadow(0 0 .2rem darkgray)",
    display: "flex",
    alignSelf: "center",
    marginBottom: "2rem"
  });
