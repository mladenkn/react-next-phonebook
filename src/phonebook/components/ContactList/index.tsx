import style from "./style";
import { ContactListItem } from "../../models";
import React, { useState } from "react";
import { List, ListItem, withStyles, WithStyles } from "@material-ui/core";
import { ContactListItem as Item } from "./ContactListItem";
import ContactAdder from "./ContactAdder";
import withWidth, { WithWidth } from "@material-ui/core/withWidth";
import { ContactListItemAction } from "../../actions";

type Props = {
  contacts: ContactListItem[];
  className?: string;
  includeAdder?: boolean;
  onAction: (a: ContactListItemAction) => void;
} & WithStyles<typeof style> &
  WithWidth;

const ContactList = withWidth()(
  ({ contacts, classes, includeAdder, className, width, onAction }: Props) => {
    const includeAdder_ = includeAdder || false;
    const smOrDown = width === "sm" || width === "xs";

    const [selectedItemId, setSelectedItemId] = useState(0);

    const handleAction = (a: ContactListItemAction) => {
      if (a.type === "SELECT") setSelectedItemId(a.contactId);
      else onAction(a);
    };

    const items = contacts.map((c) => (
      <ListItem key={c.id} className={classes.itemRoot}>
        <Item
          isSelected={selectedItemId === c.id}
          smOrDown={smOrDown}
          onAction={(a) => {
            handleAction(a);
          }}
          contact={c}
        />
      </ListItem>
    ));

    if (includeAdder_) {
      const adder = (
        <ListItem key={0} className={classes.itemRoot}>
          <ContactAdder />
        </ListItem>
      );
      items.unshift(adder);
    }

    return <List className={className + " " + classes.root}>{items}</List>;
  }
);

export default withStyles(style)(ContactList);
