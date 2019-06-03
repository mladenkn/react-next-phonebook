import React from 'react';
import { LinkProps as MuiLinkProps } from "@material-ui/core/Link";
import { Link as MuiLink } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

export const createRefRouterLink = (url: string) => React.forwardRef((props, ref: any) => (
    <RouterLink innerRef={ref} to={url} {...props} />
));

const MuiLink_ = MuiLink as any;
export const Link = (p: MuiLinkProps) => <MuiLink_ {...p} component={createRefRouterLink(p.href!)} />