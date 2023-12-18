// import { useRouter } from "next/router"
// import contactsData from "~/contact/contact-data"
import ContactDetailsPage from "~/contact/contact-details-page"
import Toolbar from "~/toolbar"
// import { asNonNil } from "~/utils"
import { getBreakpointContainerStyle } from "~/utils/ui-utils"

const contact = {
  "id": 4,
  "fullName": "Maximilian Gleason",
  "avatar": {
      "background": "blue",
      "color": "white"
  },
  "email": "Isabell99@hotmail.com",
  "numbers": [
      {
          "value": 1871373754433536,
          "label": "Work"
      },
      {
          "value": 2151749802524672,
          "label": "Work"
      },
      {
          "value": 8721412206362624,
          "label": "Cell"
      },
      {
          "value": 5451996416966656,
          "label": "Cell"
      }
  ],
  "isFavorite": false
}

export default function ContactDetailsPageWrapper() {
  // const router = useRouter()
  // const contactId = router.query.id || 3
  // const contact = asNonNil(contactsData.find(c => c.id == contactId))
  console.log(contact)
  return (
    <div className={getBreakpointContainerStyle("md")}>
      <Toolbar />
      <ContactDetailsPage className="mt-14 md:mt-24" contact={contact} onFavorite={() => {}} />
    </div>
  )
}
