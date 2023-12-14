import { createStyles, Theme } from "@material-ui/core"

export default ({ breakpoints }: Theme) =>
  createStyles({
    [breakpoints.only("xs")]: {
      phoneNumberInput: {
        width: "100%",
        marginBottom: 10,
      },
      phoneNumberLabelInput: {
        width: "80%",
      },
      labelRemover: {
        width: "20%",
      },
    },
  })
