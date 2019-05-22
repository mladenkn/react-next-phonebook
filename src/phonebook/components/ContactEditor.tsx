import { WithStyles, withStyles, List, ListItem, Icon, IconButton, Button } from "@material-ui/core";
import { Contact } from "../models";
import style from "./ContactEditor-style";
import { ContactFieldLabel, Divider, TextInput, Emptiness } from "./reusables";
import React from 'react'

type Props = {contact: Contact} & WithStyles<typeof style>;

const ContactEditor = ({contact, classes}: Props) => 
    <div>
      <label className={classes.field}>
        <ContactFieldLabel icon="person_outlined" text="full name" />
        <Emptiness height={10} />
        <TextInput defaultValue={contact.fullName} 
          className={`${classes.input + ' ' + classes.singleValueInput}`} />
      </label>
      <Divider className={classes.divider} margin={18}/>
      <label className={classes.field}>
        <ContactFieldLabel icon="email" text="email" />
        <Emptiness height={10} />
        <TextInput defaultValue={contact.email}
          className={`${classes.input + ' ' + classes.singleValueInput}`} />
      </label>
      <Divider className={classes.divider} margin={18}/>
      <ContactFieldLabel icon="phone" text="numbers" />
      <List disablePadding>
        {contact.numbers.map(({value, label}) =>
          <ListItem className={classes.phoneNumber} key={value}>
            <TextInput defaultValue={value.toString()} className={classes.input + ' ' + classes.phoneNumberInput} />
            <TextInput defaultValue={label} className={`${classes.input} ${classes.phoneNumberLabelInput}`} />
            <IconButton className={classes.labelRemover}>
                <span className={classes.labelRemoverIcon}>x</span>
            </IconButton>
          </ListItem>
        )}
      </List>
      <Emptiness height={10} />
      <Button className={classes.numberAdder}>
        <Icon color={'primary'}>add_circle_outline</Icon>        
        <Emptiness width={5} />
        Add number
      </Button>
    </div>

export default withStyles(style)(ContactEditor);