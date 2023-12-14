import { createStyles, Theme } from "@material-ui/core"

export default ({ palette, breakpoints }: Theme) =>
  createStyles({
    errorMessage: {
      color: palette.error.main,
      marginLeft: 7,
      marginTop: 2,
    },
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
