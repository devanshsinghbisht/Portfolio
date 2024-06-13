import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import { Info } from "../constants";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9ri5i65",
        "template_zw1ley8",
        form.current,
        "wTc3xyzTVf89qheHV"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Message send Sucessfully");
          console.log("message send");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div
        name="contact"
        id="Contact"
        className="container max-w-6xl py-5 my-7 lg:p-16"
      >
        <motion.h1
          variants={fadeIn("right", 80)}
          initial="hidden"
          whileInView="show"
          transition={{ type: "spring", duration: 2.5, bounce: 0.5 }}
          viewport={{ once: true }}
          className="md:text-[35px]   text-[24px] text-black   dark:text-slate-300 font-Ramabhadra text-center"
        >
          Contact me
        </motion.h1>
        <motion.p
          variants={fadeIn("left", 20)}
          initial="hidden"
          whileInView="show"
          transition={{ type: "spring", duration: 2, bounce: 0.5 }}
          viewport={{ once: true }}
          className="text-black dark:text-slate-300  font-Ramabhadra my-5 text-lg text-center"
        >
          Have something to say! Get in touch
        </motion.p>

        <div className="flex flex-row w-full justify-center ">
          <motion.div
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-col md:order-1 hidden md:block basis-1/4"
          >
            {Info.map((item) => (
              <div key={item.key} className="flex items-center flex-row lg:m-4">
                <motion.div variants={zoomIn()} className="flex shrink">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex w-[4rem] h-[4rem] fill-black stroke-black dark:fill-slate-200 dark:stroke-slate-200"
                    width="24"
                    height="24"
                    viewBox={item.viewbox}
                  >
                    <path d={item.path} />
                  </svg>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 80)}
                  className="flex flex-col p-2 m-2  self-center"
                >
                  <h1 className="text-[32px] text-black  dark:text-slate-300 font-Ramabhadra">
                    {item.text1}
                  </h1>
                  <span className="text-md text-black dark:text-slate-300 font-Ramabhadra">
                    {item.text2}
                  </span>
                </motion.div>
              </div>
            ))}
          </motion.div>
          <div className="order-1 flex flex-col md:p-5 md:gap-5 gap-2 justify-center md:basis-3/4 w-full">
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              variants={staggerContainer(0.1, 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="flex flex-row-2 gap-5">
                <div className="flex flex-col w-full">
                  <motion.label
                    for="name"
                    variants={fadeIn("up", 50)}
                    transition={{ type: "tween", duration: 0.5 }}
                    className="text-black font-Ramabhadra  dark:text-slate-300 text-[18px] py-1"
                  >
                    Full name
                  </motion.label>
                  <motion.input
                    variants={fadeIn("up", 50)}
                    transition={{ type: "tween", duration: 0.5 }}
                    placeholder="Your full name"
                    className="w-full p-3 rounded-md bg-gray-100 dark:bg-slate-700 dark:text-slate-100"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <div className="flex flex-col w-full">
                  <motion.label
                    for="email"
                    variants={fadeIn("up", 50)}
                    transition={{ type: "tween", duration: 0.5 }}
                    className="text-black  font-Ramabhadra  dark:text-slate-300 text-[18px] py-1"
                  >
                    Email
                  </motion.label>
                  <motion.input
                    variants={fadeIn("up", 50)}
                    transition={{ type: "tween", duration: 0.5 }}
                    placeholder="example@gmail.com"
                    className="w-full p-3 rounded-md bg-gray-100 dark:bg-slate-700 dark:text-slate-100"
                    type="email"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <motion.label
                  for="message"
                  variants={fadeIn("up", 50)}
                  transition={{ type: "tween", duration: 0.5 }}
                  className="text-black  font-Ramabhadra dark:text-slate-300 text-[18px] py-1"
                >
                  Your Message
                </motion.label>
                <motion.textarea
                  variants={fadeIn("up", 50)}
                  transition={{ type: "tween", duration: 0.5 }}
                  placeholder="Write your message here!"
                  className="caret-black dark:caret-black    p-3 rounded-md h-[9rem] bg-gray-100 dark:bg-slate-700 dark:text-slate-100"
                  type="text"
                  name="message"
                  required
                />
              </div>
              <motion.button
                variants={zoomIn()}
                transition={{ duration: 0.2 }}
                type="submit"
                value="Send"
                className="bg-slate-800 border-lg text-slate-100 rounded-lg w-full hover:bg-slate-600 my-3 border-grey-dark p-2 opacity-90 shadow font-serif text-lg"
              >
                Send message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
