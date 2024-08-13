import clsx from "clsx"
import { SourceCodeIcon } from "./assets/icons"
import { homePageUrl } from "./urls"
import Link from "next/link"
import * as Tooltip from "@radix-ui/react-tooltip"

type Props = {
  className?: string
  titleContainerClassName?: string
}

function Toolbar({ className, titleContainerClassName }: Props) {
  return (
    <div className={clsx("box-border flex w-full flex-col", className)}>
      <div className="bg-gradient-to-r from-primary-dark to-primary-light">
        <div
          className={clsx(
            "m-auto flex h-14 items-center justify-between px-4",
            titleContainerClassName,
          )}
        >
          <div />
          <Link
            className={clsx("mt-1 text-2xl font-medium text-white no-underline")}
            href={homePageUrl}
          >
            Everyone's Phonebook
          </Link>
          <Tooltip.Provider>
            <Tooltip.Root delayDuration={350}>
              <Tooltip.Trigger asChild>
                <button>
                  <a
                    href="https://github.com/mladenkn/react-typescript-phonebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SourceCodeIcon />
                  </a>
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="rounded-md bg-secondary-light px-2 py-1 font-sans text-secondary-dark"
                  sideOffset={18}
                >
                  <p className="cursor-default">Show source code</p>
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
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

export default function FixedToolbar() {
  return (
    <Toolbar className="fixed left-auto right-0 top-0 z-20" titleContainerClassName="max-w-6xl" />
  )
}
