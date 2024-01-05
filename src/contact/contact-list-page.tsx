import ContactList from "./contact-list"
import { cn } from "~/utils/ui-utils"
import Toolbar from "~/toolbar"
import { MagnifierIcon } from "~/assets/icons"
import { api } from "~/utils/api"
import { useRouter, useSearchParams } from "next/navigation"

const searchWrapper_class = cn(
  "mt-5 flex w-80 items-center sm:mt-10 sm:w-96",
  "border-1 rounded-md border-solid border-secondary-light",
  "shadow-homeSearch",
)

export default function ContactListPage() {
  const contacts = api.contact.list.useQuery(undefined)
  const [currentTab, setCurrentTab] = useTabState()
  const tabContacts =
    currentTab === "all" ? contacts.data : contacts.data?.filter(c => c.isFavorite)

  return (
    <div className="mx-auto max-w-6xl px-3 pb-2 lg:px-16">
      <Toolbar />

      <div className={cn("mt-20 flex flex-col items-center")}>
        <div className="flex gap-8">
          <button
            className={cn(
              "text-lg font-medium text-tc-primary",
              currentTab === "all" && "text-tc-secondary",
            )}
            onClick={() => setCurrentTab("all")}
          >
            All contacts
          </button>
          <div className="h-5 w-0.5 bg-secondary-main" />
          <button
            className={cn(
              "text-lg font-medium text-tc-primary",
              currentTab === "favorites" && "text-tc-secondary",
            )}
            onClick={() => setCurrentTab("favorites")}
          >
            My favorites
          </button>
        </div>
        <div className="mt-2 h-0.25 w-full bg-primary-main sm:mt-6" />
        <div className={searchWrapper_class + " shadow-secondary-main"}>
          <MagnifierIcon className="ml-2 mr-2" />
          <input className="h-12 w-full p-2 text-lg text-gray-500 outline-none" />
        </div>
        {tabContacts ? (
          <ContactList contacts={tabContacts} includeAdder className="mt-3 sm:mt-6" />
        ) : (
          <p className="mt-3 sm:mt-6">Loading...</p>
        )}
      </div>
    </div>
  )
}

function useTabState() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const value = (searchParams.get("tab") || "all") as "all" | "favorites"

  function setValue(value: "all" | "favorites") {
    router.push(`?tab=${value}`)
  }

  return [value, setValue] as const
}
