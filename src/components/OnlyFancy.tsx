import { styled, Themes } from "../Theme";

export const OnlyFancy = styled.div`
    display: ${({ theme }) => (theme.name === Themes.fancy ? "block" : "none")};
`;
