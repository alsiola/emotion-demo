import { styled } from "../Theme";

interface HeadingProps {
    underlined?: boolean;
}

export const Heading = styled.h1<HeadingProps>`
    font-size: 24px;
    color: ${({ theme }) => theme.text};
    text-decoration: ${props => (props.underlined ? "underline" : "none")};
    padding: 10px;
    background-color: ${({ theme }) => theme.secondary};
`;
