import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactSidebar from "./ContactSideBar/ContactBar";
import FAQSection from "./FaqSection/FaqSection";
import Container from "../../component/Container/Container";

const ContactUs = () => {
  return (
    <Container className="py-16 px-6">
      <div className="flex flex-col xl:flex-row justify-between gap-y-10">
        <ContactForm />
        <ContactSidebar />
      </div>
      <FAQSection />
    </Container>
  );
};

export default ContactUs;
