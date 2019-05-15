import injectSheet from "react-jss";
import { FunctionComponent } from "react";
import { Theme } from "@material-ui/core";

type ThemedStyles = (theme: Theme) => Record<string, {}>;

export const withStyles =
    <Styles extends Record<string, {}>> (styles: Styles) => 
    <OtherProps> (component: FunctionComponent<OtherProps & WithStyles<Styles>>) =>
    (injectSheet(styles as any) as any)(component) as FunctionComponent<OtherProps>;

export type WithStyles<Styles extends Record<string, {}>> = {
    classes: Record<keyof Styles, string>
}

export const createStyled = <Styles extends Record<string, {}>> (styles: Styles) => {
    const Styled = ({children, classes}: {children: (classes: Record<keyof Styles, string>) => JSX.Element} & WithStyles<Styles>) => {
      return children(classes);
    }
    return withStyles(styles)(Styled);
}

export const getViewportDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height};
}