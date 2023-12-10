import { createStyles, Theme } from "@material-ui/core"

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
