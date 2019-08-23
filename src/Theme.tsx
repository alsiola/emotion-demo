import React, { useState } from "react";
import _styled, { CreateStyled } from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";

interface Theme {
    name: Themes;
    primary: string;
    secondary: string;
    text: string;
}

export const styled = _styled as CreateStyled<Theme>;

export enum Themes {
    default = "default",
    fancy = "fancy"
}

const themes: Record<Themes, Theme> = {
    [Themes.default]: {
        name: Themes.default,
        primary: "black",
        secondary: "white",
        text: "black"
    },
    [Themes.fancy]: {
        name: Themes.fancy,
        primary: "green",
        secondary: "black",
        text: "grey"
    }
};

export const Themed: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<Themes>(Themes.default);

    return (
        <ThemeProvider theme={themes[theme]}>
            Choose your theme:{" "}
            <select onChange={e => setTheme(e.currentTarget.value as Themes)}>
                <option value={Themes.default}>Default</option>
                <option value={Themes.fancy}>Fancy</option>
            </select>
            {children}
        </ThemeProvider>
    );
};
