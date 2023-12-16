import { homePageUrl } from "./urls"
import { Link } from "react-router-dom"

export default function Toolbar() {
  return (
    <div className="fixed left-auto right-0 top-0 z-20 box-border flex w-full flex-col bg-primary-main">
      <div className="flex h-11 items-center justify-center bg-gradient-to-r from-primary-dark to-primary-light">
        <Link
          className="mt-1 text-xl font-semibold uppercase text-white no-underline"
          to={homePageUrl}
        >
          Phonebook
        </Link>
      </div>
      <div
        style={{ backgroundImage: "linear-gradient(to right, #70BBC3, #A0D8DC)" }}
        className="h-2"
      />
    </div>
  )
}
