import { styled, Themes } from "../Theme";

export const List: ReturnType<typeof styled.ul> & {
    Item: typeof ListItem;
} = styled.ul`
    list-style-image: ${({ theme }) =>
        theme.name === Themes.fancy
            ? 'url("https://pm1.narvii.com/6985/629875a5dd26925cffaa7db05d27db58bb8b168ar1-1132-1698v2_128.jpg")'
            : "none"};
` as any;

const ListItem = styled.li`
    line-height: ${({ theme }) =>
        theme.name === Themes.fancy ? "128px" : "30px"};
`;

List.Item = ListItem;
