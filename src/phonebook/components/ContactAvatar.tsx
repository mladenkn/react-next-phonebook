import { Avatar, makeStyles } from "@material-ui/core"
import clsx from "clsx"
import { CSSProperties } from "react"

type ContactAvatarProps = {
  className?: string
  style?: CSSProperties
  letter: string
  url?: string
}

export const ContactAvatar = ({ className, style, letter, url }: ContactAvatarProps) => {
  const styles = useDefaultAvatarStyles()
  if (url) return <Avatar className={clsx(styles.root, className)} src={url} />
  else if (letter)
    return (
      <div className={clsx(styles.root, className)} style={style}>
        {letter}
      </div>
    )
  else throw new Error("Case not supported")
}

const useDefaultAvatarStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
})
