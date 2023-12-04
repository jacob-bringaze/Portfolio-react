import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#FFFFFF] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/3537a870-2fef-450e-a016-75b4e7189309"
        className="flex flex-col max-w-[700px] w-full"
      >
        <div className="pb-8">
          <p className="md:text-5xl text-3xl font-bold inline border-b-4 border-[#48bcd1] text-black">
            Contact
          </p>
          <p className="font-semi-bold py-4 text-md">
            Submit the form below or email - jbringazedev@gmail.com
          </p>
        </div>
        <input
          className="bg-[#cecfd1d5] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#cecfd1d5]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#cecfd1d5] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="hover:text-black text-white hover:border-black border-2 bg-[#48bcd1] hover:bg-transparent border-[#48bcd1] px-4 py-3 my-8 mx-auto flex items-center">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
