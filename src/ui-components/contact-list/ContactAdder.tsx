import { contactAdderStyle } from "../../ui-design/contact-list/contactAdderStyle";
import React from 'react';
import { withStyles, WithStyles } from '../../utils';
import { Card, CardContent, Typography, Icon, Button }
     from "@material-ui/core";

const ContactAdder_ = ({classes}: WithStyles<typeof contactAdderStyle>) => 
<Button className={classes.button}>
    <Card className={`${classes.card}`}>
        <CardContent className={`${classes.cardContent}`}>
            <Icon className={classes.icon}>add</Icon>
            <Typography>Add new</Typography>
        </CardContent>
    </Card>
</Button>

export const ContactAdder = withStyles(contactAdderStyle)<{}>(ContactAdder_)