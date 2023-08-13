import { Avatar, makeStyles } from "@material-ui/core"
import clsx from "clsx"
import { CSSProperties } from "react"

type ContactAvatarProps = {
  className?: string
  style?: CSSProperties
  letter: string
}

export const ContactAvatar = ({ className, style, letter }: ContactAvatarProps) => {
  const styles = useDefaultAvatarStyles()
  return (
    <Avatar className={clsx(styles.root, className)} style={style}>
      {letter}
    </Avatar>
  )

  // if (imageUrl) return <Avatar className={clsx(styles.root, className)} src={imageUrl} />
  // else if (background && letter)
  //   return (
  //     <div className={clsx(styles.root, className)} style={{ background }}>
  //       {letter}
  //     </div>
  //   )
  // else throw new Error("Case not supported")
}

const useDefaultAvatarStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    padding: 10,
  },
})
