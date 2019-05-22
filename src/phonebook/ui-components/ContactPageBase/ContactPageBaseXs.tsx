import React from 'react';
import { WithStyles, withStyles, Avatar, Typography } from "@material-ui/core";
import style from "./ContactPageBaseXs-style";
import { Divider } from '../reusables';

type Props = {avatar: string, name?: string, heading: JSX.Element, content: JSX.Element, footer?: JSX.Element}
     & WithStyles<typeof style>;

const ContactPageBaseXs = ({classes, avatar, heading, content, name, footer}: Props) =>
{
    return <div>
        <div className={classes.toolbar}>
            {heading}
        </div>
        <div className={classes.content}>
            <div className={classes.heading}>
                <Avatar src={avatar} className={name ? classes.avatarSmall : classes.avatar} />
                {name &&
                <Typography variant={'h6'} className={classes.headingText}>{name}</Typography>}
            </div>
            <Divider margin={20} />
            {content}
            {footer}
        </div>
    </div>;
}

export default withStyles(style)(ContactPageBaseXs);
