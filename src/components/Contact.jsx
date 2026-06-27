import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Sent 🚀");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      bg-gradient-to-b
      from-slate-950
      via-slate-900
      to-black
      "
    >
      <div
        className="
        w-full
        max-w-2xl
        rounded-[40px]
        p-10
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_0_60px_rgba(255,215,0,0.12)]
        "
      >
        <h1
          className="
          text-center
          text-5xl
          font-extrabold
          bg-gradient-to-r
          from-yellow-300
          via-orange-400
          to-yellow-500
          bg-clip-text
          text-transparent
          "
        >
          Contact Me
        </h1>

        <p
          className="
          mt-4
          text-center
          text-slate-400
          "
        >
          Send me a message and let's connect
        </p>

        <form
          onSubmit={handleSubmit}
          className="
          mt-10
          flex
          flex-col
          gap-5
          "
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="
            rounded-2xl
            bg-white/10
            border
            border-white/10
            px-6
            py-4
            text-white
            outline-none
            backdrop-blur-md
            focus:border-yellow-400
            focus:ring-2
            focus:ring-yellow-500
            placeholder:text-slate-400
            "
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="
            rounded-2xl
            bg-white/10
            border
            border-white/10
            px-6
            py-4
            text-white
            outline-none
            focus:border-yellow-400
            focus:ring-2
            focus:ring-yellow-500
            placeholder:text-slate-400
            "
          />

          <textarea
            rows="6"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="
            rounded-2xl
            bg-white/10
            border
            border-white/10
            px-6
            py-4
            text-white
            resize-none
            outline-none
            focus:border-yellow-400
            focus:ring-2
            focus:ring-yellow-500
            placeholder:text-slate-400
            "
          />

          <button
            className="
            rounded-2xl
            bg-gradient-to-r
            from-yellow-400
            via-orange-400
            to-yellow-500
            py-4
            text-lg
            font-bold
            text-black
            transition
            duration-300
            hover:scale-[1.03]
            hover:shadow-[0_0_35px_rgba(255,215,0,0.5)]
            "
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
