import { createStyles, Theme } from "@material-ui/core"

export default ({ palette, breakpoints }: Theme) =>
  createStyles({
    labelRemoverIcon: {
      height: 28,
      width: 28,
      borderRadius: 50,
      border: `2px solid ${palette.secondary.light}`,
      color: palette.secondary.light,
      display: "inline-block",
      textAlign: "center",
      paddingRight: 1,
      fontSize: 18,
    },
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
