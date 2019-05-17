import { WithStyles, withStyles } from "@material-ui/core";
import { Contact } from "../models";
import { contactEditorStyle } from "../ui-design/contactEditor";

type Props = {contact: Contact} & WithStyles<typeof contactEditorStyle>;

const ContactEditor = ({contact, classes}: Props) => 
    <div>
    </div>

export default withStyles(contactEditorStyle)(ContactEditor);