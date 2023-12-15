import { homePageUrl } from "./urls"
import { Toolbar as MuiToolbar, AppBar } from "@material-ui/core"
import { Link } from "react-router-dom"

export default function Toolbar() {
  return (
    <AppBar>
      <MuiToolbar className="relative flex h-10 justify-center bg-gradient-to-r from-primary-dark to-primary-light">
        <Link
          className="pb-2 pt-3 text-xl font-semibold uppercase text-white no-underline"
          to={homePageUrl}
        >
          Phonebook
        </Link>
      </MuiToolbar>
      <div
        style={{ backgroundImage: "linear-gradient(to right, #70BBC3, #A0D8DC)" }}
        className="h-2"
      />
    </AppBar>
  )
}
