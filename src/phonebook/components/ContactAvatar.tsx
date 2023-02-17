import { Avatar, makeStyles } from "@material-ui/core"
import clsx from "clsx"


type ContactAvatarProps = {
  className?: string
  background: string
  letter: string
  avatarUrl?: undefined
} | {
  className?: string
  avatarUrl: string
  background?: undefined
  letter?: undefined
}

export const ContactAvatar = ({ className, avatarUrl, background, letter }: ContactAvatarProps) => {
  const styles = useDefaultAvatarStyles()

  if (avatarUrl)
    return <Avatar className={className} src={avatarUrl} />

  else if (background && letter)
    return (
      <div className={clsx(styles.root, className)} style={{ background }}>
        {letter}
      </div>
    )

  else
    throw new Error('Case not supported')
}

const useDefaultAvatarStyles = makeStyles({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    padding: 10
  }
})
