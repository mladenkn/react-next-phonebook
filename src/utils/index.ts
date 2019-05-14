import injectSheet, { WithSheet, CSSProperties } from "react-jss";
import { FunctionComponent } from "react";

export const withStyles =
    <Styles extends Record<string, CSSProperties<{}>>> (styles: Styles) => 
    <OtherProps> (component: FunctionComponent<OtherProps & WithSheet<Styles>>) =>
    (injectSheet(styles) as any)(component) as FunctionComponent<OtherProps>
