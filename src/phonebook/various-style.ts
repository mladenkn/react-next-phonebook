import { createStyles, makeStyles, Theme } from "@material-ui/core"

export const contactFieldLabelStyle = ({ palette }: Theme) =>
  createStyles({
    fieldLabel: {
      width: 100,
      color: palette.primary.main,
      display: "flex",
      alignItems: "flex-end",
    },
    fieldLabelIcon: {
      width: 30,
    },
    fieldLabelText: {},
  })

export const useTextInputDialogStyle = makeStyles(
  ({ breakpoints }: Theme) =>
    createStyles({
      [breakpoints.only("xs")]: {
        paper: {
          margin: "0px 10px",
          width: "100%",
        },
        input: {
          width: "100%",
        },
      },

      [breakpoints.up("sm")]: {
        input: {
          width: 400,
        },
      },

      actions: {
        padding: "8px 24px 12px",
      },
    }),
  {
    name: "UrlInputDialogStyle",
  },
)
