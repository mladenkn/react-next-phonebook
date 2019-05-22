import React from 'react';
import { WithStyles, withStyles, Grid, Avatar } from "@material-ui/core";
import style from "./ContactPageBaseSm-style";

type Props = { avatar: string, content: JSX.Element, heading: JSX.Element }
     & WithStyles<typeof style>;

const ContactPageBaseSm = ({avatar, classes, content, heading}: Props) => 
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
            <div className={classes.mainContent}>
                {content}
            </div>
        </div>
    </div>

export default withStyles(style)(ContactPageBaseSm);