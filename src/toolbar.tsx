import clsx from "clsx"
import { SourceCodeIcon } from "./assets/icons"
import { homePageUrl } from "./urls"
import Link from "next/link"

type Props = {
  titleContainerClassName?: string
}

export default function Toolbar({ titleContainerClassName }: Props) {
  return (
    <div className="fixed left-auto right-0 top-0 z-20 box-border flex w-full flex-col">
      <div className="bg-gradient-to-r from-primary-dark to-primary-light">
        <div className="m-auto flex h-11 items-center justify-between px-4">
          <div />
          <Link
            className={clsx(
              "mt-1 text-xl font-semibold uppercase text-white no-underline",
              titleContainerClassName,
            )}
            href={homePageUrl}
          >
            Phonebook
          </Link>
          <SourceCodeIcon />
        </div>
      </div>
      <div
        style={{
          backgroundImage: "linear-gradient(to right, #70BBC3, #A0D8DC)",
        }}
        className="h-2"
      />
    </div>
  )
}
