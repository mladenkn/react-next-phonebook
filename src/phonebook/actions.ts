export interface ContactListItemAction {
  type: "SELECT" | "TOGGLE_FAVORITE" | "DELETE";
  contactId: number;
}
