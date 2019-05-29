import { RouteComponentProps } from "react-router";
import { ContactIdRouteParams } from ".";
import { WithContactService } from ".";
import { WithManyChildren } from ".";

type Props = WithManyChildren &  RouteComponentProps<ContactIdRouteParams> & WithContactService;

export const ContactEditProvider = ({history, match, contactService}: Props) => {   

    const contactId = parseInt(match.params.contactId!);
    
}