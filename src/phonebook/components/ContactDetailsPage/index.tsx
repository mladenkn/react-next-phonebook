import { Contact } from "../../models";
import React from 'react';
import ContactDetailsFields from "./ContactDetailsFields";
import MediaQuery from "react-responsive";
import ContactPageBaseSm from "../ContactPageBase/ContactPageBaseSm";
import ContactPageBaseXs from "../ContactPageBase/ContactPageBaseXs";
import style from "./style";
import { FavoriteAction, GoToEditAction, GoBackAction } from "../actions";
import { WithStyles, withStyles, IconButton, Icon, Typography } from "@material-ui/core";

type Props = {contact: Contact} & WithStyles<typeof style>;

const ContactDetailsPage = ({contact, classes}: Props) => 
{
    const backAction = <GoBackAction />

    const name = <Typography className={classes.headingName}>{contact.fullName}</Typography>;

    const favAction = <FavoriteAction
        contact={contact}
        styles={{
            root: classes.action + ' ' + classes.favAction,
            icon: classes.icon,
        }} />;

    const editAction = <GoToEditAction
        contactId={contact.id}
        styles={{
            root: classes.action + ' ' + classes.editAction,
            icon: classes.icon,
        }} />;

    return <div>
        <MediaQuery maxWidth={599}>
            <div className={classes.rootXs}>
                <ContactPageBaseXs 
                    heading={<div className={classes.heading}>{backAction} {favAction} {editAction}</div>}
                    name={contact.fullName}
                    avatar={contact.avatar}
                    content={<ContactDetailsFields contact={contact} />} />
            </div>
        </MediaQuery>
        <MediaQuery minWidth={600}>   
            <div className={classes.rootSm}>
                <ContactPageBaseSm 
                    heading={<div className={classes.heading}>{backAction} {name} {favAction} {editAction}</div>}
                    content={<ContactDetailsFields contact={contact} />}
                    avatar={contact.avatar}/>
            </div>
        </MediaQuery>
    </div>;
}
 
export default withStyles(style)(ContactDetailsPage);