import clsx from "clsx"
import { CSSProperties } from "react"

type ContactAvatarProps = {
  className?: string
  style?: CSSProperties
  letter?: string
  url?: string
}

export const ContactAvatar = ({ className, style, letter, url }: ContactAvatarProps) => {
  if (url)
    return (
      <img
        className={clsx(
          "flex h-auto w-10 items-center justify-center rounded-full object-contain",
          className,
        )}
        style={style}
        src={url}
      />
    )
  else if (letter)
    return (
      <div
        className={clsx(
          "flex h-10 w-10 cursor-default items-center justify-center rounded-full",
          className,
        )}
        style={style}
      >
        {letter}
      </div>
    )
  else throw new Error("Case not supported")
}
