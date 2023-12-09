import { createRoot } from "react-dom/client"
import "./index.css"
import * as serviceWorker from "./serviceWorker"
import { AppRoot } from "./phonebook/components/app-root"
import { assertIsNonNil } from "./utils"

const rootDomNode = document.getElementById("root")
assertIsNonNil(rootDomNode)
const root = createRoot(rootDomNode)
root.render(<AppRoot />)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
