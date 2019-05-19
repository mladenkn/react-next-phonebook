import { WithStyles, withStyles, List, ListItem, Grid, Icon, IconButton, Button } from "@material-ui/core";
import { Contact } from "../models";
import { contactEditorStyle } from "../ui-design/contactEditor";
import { ContactFieldLabel, Divider, TextInput, Emptiness } from "./reusables";
import React from 'react'

type Props = {contact: Contact} & WithStyles<typeof contactEditorStyle>;

const ContactEditor = ({contact, classes}: Props) => 
    <div>
      <label className={classes.field}>
        <ContactFieldLabel icon="person_outlined" text="full name" />
        <Emptiness height={10} />
        <TextInput defaultValue={contact.fullName} className={`${classes.fullWidth} ${classes.input}`} />
      </label>
      <Divider className={classes.divider} margin={18}/>
      <label className={classes.field}>
        <ContactFieldLabel icon="email" text="email" />
        <Emptiness height={10} />
        <TextInput defaultValue={contact.email} className={`${classes.fullWidth} ${classes.input}`} />
      </label>
      <Divider className={classes.divider} margin={18}/>
      <ContactFieldLabel icon="phone" text="numbers" />
      <List disablePadding>
        {contact.numbers.map(({value, label}) =>
          <ListItem className={classes.phoneNumber} key={value}>
            <TextInput defaultValue={value.toString()} className={`${classes.fullWidth}
              ${classes.input}`} />            
            <Emptiness height={5} />
            <Grid container>
              <Grid item xs={10}>
                <TextInput defaultValue={label} 
                  className={`${classes.input} ${classes.fullWidth} ${classes.phoneNumberLabel}`} />
              </Grid>
              <Grid item xs={2} className={classes.labelRemoverContainer}>
                {/* <IconButton className={classes.labelRemover}>
                  <Icon className={classes.labelRemoverIcon2}>
                    remove_circle_outline
                  </Icon>
                </IconButton> */}
                <IconButton className={classes.labelRemover}>
                  <span className={classes.labelRemoverIcon}>x</span>
                </IconButton>
              </Grid>
            </Grid>
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

export default withStyles(contactEditorStyle)(ContactEditor);