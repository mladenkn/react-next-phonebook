import { Avatar, makeStyles } from "@material-ui/core"
import clsx from "clsx"

type ContactAvatarProps =
  | {
      className?: string
      background: string
      letter: string
      imageUrl?: string
    }
  | {
      className?: string
      imageUrl: string
      background?: undefined
      letter?: undefined
    }

export const ContactAvatar = ({ className, imageUrl, background, letter }: ContactAvatarProps) => {
  const styles = useDefaultAvatarStyles()

  if (imageUrl) return <Avatar className={clsx(styles.root, className)} src={imageUrl} />
  else if (background && letter)
    return (
      <div className={clsx(styles.root, className)} style={{ background }}>
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
    borderRadius: "50%",
    padding: 10,
  },
})
