import { styled } from "../Theme";

export const Square = styled.div`
    width: 50px;
    height: 50px;
    margin: 0 auto;

    background: red;

    @media (min-width: 800px) {
        background: blue;
    }

    @media (min-width: 1200px) {
        background: yellow;
    }
`;
