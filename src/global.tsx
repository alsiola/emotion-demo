import React from "react";
import { Global, css } from "@emotion/core";
import { Themes } from "./Theme";

export const GlobalStyles = () => (
    <Global
        styles={theme => {
            console.log(theme);
            return css`
                * {
                    font-family: ${theme.name === Themes.fancy
                        ? "courier"
                        : "sans-serif"};
                }

                body {
                    background: ${theme.name === Themes.fancy
                        ? "green"
                        : "initial"};
                    padding: 10px;
                }
            `;
        }}
    />
);
