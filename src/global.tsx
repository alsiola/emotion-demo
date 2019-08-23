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
                    background-image: ${theme.name === Themes.fancy
                        ? 'url("http://amazeballsarancini.com.au/wp-content/uploads/2018/07/amazeballs-logo@2x.png")'
                        : "none"};
                    background-repeat: repeat-y;
                    background-position-x: center;
                    background-position-y: top;
                }
            `;
        }}
    />
);
