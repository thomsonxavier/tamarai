import type { Metadata } from "next";
import { ContactForm } from "@/components/(user)/landing/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return <ContactForm />;
}
