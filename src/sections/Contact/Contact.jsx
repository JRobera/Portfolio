import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import "./Contact.css";

function Contact({ contactRef, contactIsVisible }) {
  const schema = yup.object().shape({
    fullName: yup
      .string("Full name must be string1")
      .required("Full Name required!"),
    email: yup.string().email("Invalid email!").required("Email required"),
    mobileNumber: yup
      .string()
      .min(10, "Mobile number can not be less than ten!")
      .max(10, "Mobile number can not be grater than ten!")
      .required("Mobile number required"),
    subject: yup.string().required("Subject is required!"),
    message: yup.string().required("Message is required!"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [isSending, setIsSending] = useState(false);

  const onSubmit = (data) => {
    setIsSending(true);
    axios
      .post("https://roberas-api.onrender.com/api/send-message", { data })
      .then((response) => {
        response && Swal.fire(response?.data, "Your message have been send.");
        setIsSending(false);
        reset();
      });
  };

  return (
    <section ref={contactRef} className="contact" id="contact">
      <h2 className={contactIsVisible ? "heading heading-visible" : "heading"}>
        Contact <span>Me!</span>
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={contactIsVisible ? "form-visible" : null}
        action="#"
      >
        <div className="input-box">
          <div>
            {errors.fullName ? (
              <span className="error">{errors.fullName?.message}</span>
            ) : null}
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullName")}
            />
          </div>
          <div>
            {errors.email ? (
              <span className="error">{errors.email?.message}</span>
            ) : null}
            <input
              type="email"
              placeholder="Email Address"
              {...register("email")}
            />
          </div>
        </div>
        <div className="input-box">
          <div>
            {errors.mobileNumber ? (
              <span className="error">{errors.mobileNumber?.message}</span>
            ) : null}

            <input
              type="text"
              placeholder="Mobile Number"
              {...register("mobileNumber")}
            />
          </div>
          <div>
            {errors.subject ? (
              <span className="error">{errors.subject?.message}</span>
            ) : null}

            <input
              type="text"
              placeholder="Email Subject"
              {...register("subject")}
            />
          </div>
        </div>
        <div>
          {errors.message ? (
            <span className="error">{errors.message?.message}</span>
          ) : null}

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            {...register("message")}
          ></textarea>
        </div>
        <input
          type="submit"
          value={!isSending ? "Send Message" : "Sending message..."}
          className="btn"
        />
      </form>
    </section>
  );
}

export default Contact;
