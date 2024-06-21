import PagesTitles from "../../components/PagesTitles"
import Services from "../../components/Services"
import ContactSection from "./Components/ContactSection"

const ContactPage = () => {
  return (
    <>
      <PagesTitles currentPage="Contact" />
      <ContactSection />
      <Services />
    </>
  )
}

export default ContactPage
