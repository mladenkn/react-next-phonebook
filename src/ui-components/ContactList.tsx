import { contactListSnakeStyle } from "../ui-design/contactListStyle";
import { ContactListItem } from "../models";
import React from 'react';
import { withStyles, WithStyles } from '../utils';
import { List, ListItem, Card, Avatar, CardContent, Typography, Icon, IconButton, Button }
     from "@material-ui/core";
import withWidth, { WithWidthProps } from "@material-ui/core/withWidth";

interface OwnProps { 
    contacts: ContactListItem[],
    includeAdder?: boolean,
}

type Props = OwnProps & WithStyles<typeof contactListSnakeStyle> & WithWidthProps

const ContactList_ = ({contacts, classes, width, includeAdder}: Props) => {

    const includeAdder_ = includeAdder || false

    const items = contacts.map(c => {
        const icons = <div className={classes.itemIcons}>
            <span className={classes.itemIconsLeft}>
                <IconButton className={classes.itemIconButton}>
                    <Icon className={classes.itemIcon}>
                        {c.isFavorite ? 'favorite' : 'favorite_outlined'}
                    </Icon>
                </IconButton>
            </span>
            <span className={classes.itemIconsRight}>
                <IconButton className={classes.itemIconButton}>
                    <Icon className={classes.itemIcon}>edit</Icon>
                </IconButton>
                <IconButton className={classes.itemIconButton}>
                    <Icon className={classes.itemIcon}>delete</Icon>
                </IconButton>
            </span>
        </div>;
        const avatar = <Avatar alt="avatar" src={c.avatar} className={classes.itemAvatar} />;
        const name = <Typography className={classes.itemName}>{c.firstName + ' ' + c.lastName}</Typography>;
        return (<ListItem key={c.id} className={classes.itemRoot}>
            <Card className={classes.itemCard}>
                <CardContent className={classes.itemCardContent}>
                    {width === 'xs' ?
                        <div className={classes.itemsContainer}>{avatar} {name} {icons}</div> :
                        <div className={classes.itemsContainer}>{icons} {avatar} {name}</div>}
                </CardContent>
            </Card>
        </ListItem>);
    });

    if(includeAdder_){
        const adder = (<ListItem key={0} className={classes.itemRoot}>
            <Button className={classes.itemAdderButton}>
                <Card className={`${classes.itemCard}`}>
                    <CardContent className={`${classes.itemCardContent} ${classes.itemAdderCardContent}`}>
                        <Icon className={classes.adderIcon}>add</Icon>
                        <Typography>Add new</Typography>
                    </CardContent>
                </Card>
            </Button>
        </ListItem>);
        items.unshift(adder);
    }

    return <List className={classes.root}>{items}</List>;
}

export const ContactList = withWidth()(withStyles(contactListSnakeStyle)(ContactList_))