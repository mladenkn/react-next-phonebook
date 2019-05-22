import React from 'react';
import { WithStyles, withStyles, Avatar } from "@material-ui/core";
import style from "./ContactPageBaseSm-style";

type Props = { avatar: string, content: JSX.Element, heading: JSX.Element, footer?: JSX.Element }
     & WithStyles<typeof style>;

const ContactPageBaseSm = ({avatar, classes, content, heading, footer}: Props) => 
    <div className={classes.root}>
        <div className={classes.left}>
            <Avatar className={classes.avatar} src={avatar} />
        </div>
        <div>
            <div className={classes.heading}>
                <div className={classes.headingContent}>
                    {heading}
                </div>
            </div>
            <div>
                <div className={classes.main}>
                    {content}
                </div>
                <div className={classes.footer}>
                    {footer}
                </div>
            </div>
        </div>
    </div>

export default withStyles(style)(ContactPageBaseSm);