import ContactForm from "@/components/ContactForm";

export default function ContactsPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-6xl font-bold pb-8">
        <span className="bg-gradient-to-br from-[rgb(249,115,22)] to-[#EAB308] bg-clip-text text-transparent">
          Let’s Connect <br /> and Collaborate!
        </span>
      </h1>
      <ContactForm />
    </div>
  );
}
