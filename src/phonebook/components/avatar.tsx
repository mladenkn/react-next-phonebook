import { Avatar, makeStyles } from "@material-ui/core"
import { CSSProperties } from "react"
import clsx from "clsx"


type RandomAvatarProps = {
  letter: string
  className?: string
  style?: CSSProperties
}

export const DefaultAvatar = ({ letter, className, style }: RandomAvatarProps) => {
  const styles = useRandomAvatarStyles()
  return (
    <div className={clsx(styles.root, className)} style={style}>
      {letter}
    </div>
  )
}

const useRandomAvatarStyles = makeStyles({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    padding: 10
  }
})


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
  if (avatarUrl)
    return <Avatar className={className} src={avatarUrl} />
  else if (defaultAvatarBackground && letter)
    return <DefaultAvatar className={className} style={{ background: defaultAvatarBackground }} letter={letter} />
  else
    throw new Error('Case not supported')
}
