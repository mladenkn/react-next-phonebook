import injectSheet from "react-jss";
import { FunctionComponent } from "react";

export const withStyles =
    <Styles extends Record<string, {}>> (styles: Styles) => 
    <OtherProps> (component: FunctionComponent<OtherProps & WithStyles<Styles>>) =>
    (injectSheet(styles as any) as any)(component) as FunctionComponent<OtherProps>

export type WithStyles<Styles extends Record<string, {}>> = {
    classes: Record<keyof Styles, string>
}