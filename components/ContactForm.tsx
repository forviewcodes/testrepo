export default function ContactForm() {
  return (
    <form className=" mx-auto p-5 pt-4 bg-gray-400 rounded-2xl">
      <label className="block mb-2 text-start ">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full p-2 mb-4 rounded-lg bg-gray-600"
        required
      />

      <label className="block mb-2 text-start ">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full p-2 mb-4 rounded-lg bg-gray-600"
        required
      />

      <label className="block mb-2 text-start ">Message</label>
      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full p-2 mb-4 min-h-[180px] rounded-lg bg-gray-600"
        required
      />

      <button type="submit" className="w-full p-2 bg-purple-500 rounded-lg  ">
        Send
      </button>
    </form>
  );
}
