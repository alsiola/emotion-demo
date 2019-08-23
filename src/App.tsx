import React from "react";
import { Page } from "./components/Page";
import { Heading } from "./components/Heading";
import { GlobalStyles } from "./global";
import { Themed } from "./Theme";
import { Square } from "./components/QueryBlob";
import { List } from "./components/List";
import { OnlyFancy } from "./components/OnlyFancy";
import Marquee from "react-marquee";

const App: React.FC = () => {
    return (
        <Themed>
            <GlobalStyles />
            <Heading underlined>emotion</Heading>
            <OnlyFancy>Heavy Breathing</OnlyFancy>
            <Page>
                <Heading>Developer Experience</Heading>
                <List>
                    <List.Item>Docs are excellent!</List.Item>
                    <List.Item>
                        VSCode plugin gives CSS auto-completion
                    </List.Item>
                    <List.Item>Simple theming (whitelabelling...)</List.Item>
                </List>
                <Heading>Type Support</Heading>
                <List>
                    <List.Item>
                        Imperfect - available but requires some manual
                        annotation
                    </List.Item>
                    <List.Item>
                        Not written in TS, but types are library bundled
                    </List.Item>
                </List>
                <Heading>Build Process</Heading>
                <List>
                    <List.Item>
                        Babel plugin provides:
                        <List>
                            <List.Item>Minification</List.Item>
                            <List.Item>Dead code elimination</List.Item>
                            <List.Item>Source Maps</List.Item>
                            <List.Item>Contextual Class Names</List.Item>
                        </List>
                    </List.Item>
                    <List.Item>
                        Bundle size
                        <List>
                            <List.Item>
                                @emotion/core - 6.5kb min + gzip
                            </List.Item>
                            <List.Item>
                                @emotion/styled - 4.6kb min + gzip
                            </List.Item>
                            <List.Item>
                                emotion-theming - 1.5kb min + gzip
                            </List.Item>
                        </List>
                    </List.Item>
                </List>
                <Heading>Maintainability</Heading>
                <List>
                    <List.Item>Hash-based classnames = no clashies</List.Item>
                    <List.Item>
                        Not written in TS, but types are library bundled
                    </List.Item>
                    <List.Item>Composable styles</List.Item>
                </List>
                <Heading>Application to Codebase</Heading>
                <List>
                    <List.Item>
                        SCSS compatible - global variables would be replaced by
                        interpolations from themes/props
                    </List.Item>
                    <List.Item>Full media query support</List.Item>
                </List>
                <Heading>Browser Support</Heading>
                <List>
                    <List.Item>Auto-prefixing for browsers</List.Item>
                </List>
                <Square />
            </Page>
        </Themed>
    );
};

export default App;
