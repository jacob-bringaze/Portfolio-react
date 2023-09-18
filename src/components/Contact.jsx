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
          <p className="md:text-5xl text-3xl font-bold inline border-b-4 border-[#6fc2b0] text-black">
            Contact
          </p>
          <p className="font-semi-bold py-4 text-md">
            Submit the form below or shoot me an email - jbringazedev@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-black hover:text-white border-black border-2 hover:bg-[#6fc2b0] hover:border-[#6fc2b0] px-4 py-3 my-8 mx-auto flex items-center">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
