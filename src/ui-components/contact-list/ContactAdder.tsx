import { contactAdderStyle } from "../../ui-design/contact-list/contactAdder";
import React from 'react';
import { Card, CardContent, Typography, Icon, Button, withStyles, WithStyles } from "@material-ui/core";

const ContactAdder_ = ({classes}: WithStyles<typeof contactAdderStyle>) => 
    <Button className={classes.root} disableRipple>
        <Card className={`${classes.card}`}>
            <CardContent className={`${classes.cardContent}`}>
                <Icon className={classes.icon}>add</Icon>
                <Typography className={classes.text}>Add new</Typography>
            </CardContent>
        </Card>
    </Button>

export default withStyles(contactAdderStyle)(ContactAdder_)