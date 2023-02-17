import { Avatar, makeStyles } from "@material-ui/core"
import clsx from "clsx"


type ContactAvatarProps = {
  className?: string
  defaultAvatarBackground: string
  letter: string
  avatarUrl?: undefined
} | {
  className?: string
  avatarUrl: string
  defaultAvatarBackground?: undefined
  letter?: undefined
}

export const ContactAvatar = ({ className, avatarUrl, defaultAvatarBackground, letter }: ContactAvatarProps) => {
  const styles = useDefaultAvatarStyles()

  if (avatarUrl)
    return <Avatar className={className} src={avatarUrl} />

  else if (defaultAvatarBackground && letter)
    return (
      <div className={clsx(styles.root, className)} style={{ background: defaultAvatarBackground }}>
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
