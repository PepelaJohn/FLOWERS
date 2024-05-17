import React from "react";
import { IoLocation } from "react-icons/io5";
import { IoMdMail as Email } from "react-icons/io";
import { MdPhone as Phone } from "react-icons/md";
import ActionButton from "../components/ActionButton";
const Contact = () => {
  return (
    <section className="flex flex-col items-center   nav-height">
      <div className="max-w-large flex flex-col pb-10 common-padding">
        <h1 className="text-2xl font-semibold my-3">Contact us</h1>
        <div className="flex flex-wrap gap-5">
          <div className="flex  cursor-pointer  flex-1 flex-col border p-5 min-w-[250px] items-center gap-2">
            <span className="border border-primary flex items-center justify-center text-primary w-14 h-14 rounded-full overflow-hidden">
              <IoLocation></IoLocation>
            </span>
            <h5 className="mb-3 font-xl font-semibold">Our Location</h5>
            <p className="text-lg">Nairobi, Kenya</p>
          </div>
          <div className="flex  cursor-pointer  flex-1 flex-col border p-5 min-w-[250px] items-center gap-2">
            <span className="border border-primary flex items-center justify-center text-primary w-14 h-14 rounded-full overflow-hidden">
              <Email></Email>
            </span>
            <h5 className="mb-3 font-xl font-semibold">Email</h5>
            <p className="text-lg">feedback@jorist.co.ke / info@jorist.com</p>
          </div>
          <div className="flex   cursor-pointer flex-1 flex-col border p-5 min-w-[250px] items-center gap-2">
            <span className="border border-primary flex items-center justify-center text-primary w-14 h-14 rounded-full overflow-hidden">
              <Phone></Phone>
            </span>
            <h5 className="mb-3 font-xl font-semibold">Phone/Whatsapp</h5>
            <p className="text-lg">Mobile: +254798014749</p>
            <p className="text-lg">Fax: 134 423 242</p>
          </div>
        </div>

        <div className=" w-full mt-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="w-full flex flex-col gap-5"
            action=""
          >
            <div className="flex w-full max-sm:flex-col gap-5 ">
              <input
                placeholder="Name"
                className="flex-1 px-5 flex  min-h-[80px]  outline-none bg-transparent border-b border-black"
                type="text"
              />
              <input
                placeholder="E-mail"
                className="flex-1 px-5 min-h-[80px] outline-none bg-transparent border-b border-black"
                type="email"
              />
            </div>
            <textarea
              //   cols={20}
              rows={8}
              className="w-full px-5 py-5 resize-none pt-auto bg-transparent outline-none  border-b border-black"
              name=""
              id=""
              placeholder="Message"
            ></textarea>
            <ActionButton>Send</ActionButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
