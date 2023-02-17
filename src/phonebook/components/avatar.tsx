import { makeStyles } from "@material-ui/core"
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
