const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-4 py-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact</h2>
      <p className="text-gray-300 mb-8 max-w-xl">
        I'm always open to new opportunities, collaborations, or just a friendly chat.
        Feel free to reach out or download my resume below.
      </p>

      <a
        href="/Alwin_Tomy_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition mb-4"
      >
        View / Download Resume
      </a>

      <a>this is a test</a>

      
    </section>
  );
};

export default Contact;
