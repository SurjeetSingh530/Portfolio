const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-10 px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Get In Touch</h2>

        <p className="mt-4 text-gray-400">
          Thanks for visiting my portfolio. Feel free to connect with me.
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/SurjeetSingh530"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/surjeet-singh-5620"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>

          <a
            href="mailto:surjeetdyadav@gmail.com"
            className="hover:text-blue-400"
          >
            Email
          </a>
        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-sm text-gray-500">
          © 2026 Your Portfolio • Built with React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
