const Form = () => {
  return (
    <form
      name="contact v1"
      method="POST"
      data-netlify="true"
      onSubmit="submit"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact v1" />

      <div hidden>
        <input name="bot-field" />
      </div>
      <div className="mb-4">
        <label
          className="mb-2 inline-block font-semibold capitalize"
          htmlFor="name"
        >
          name
        </label>
        <br />
        <input
          className="h-[45px] w-full rounded-sm bg-slate-900 pl-4"
          name="name"
          id="name"
          type="text"
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="mb-2 inline-block font-semibold  capitalize"
          htmlFor="email"
        >
          email
        </label>
        <br />
        <input
          className="h-[45px] w-full rounded-sm bg-slate-900 pl-4"
          name="email"
          id="email"
          type="email"
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="mb-2 inline-block font-semibold  capitalize"
          htmlFor="message"
        >
          message
        </label>
        <br />
        <textarea
          className="w-full rounded-sm bg-slate-900  pl-4 pt-4"
          name="message"
          id="message"
          cols={30}
          rows={10}
        ></textarea>
      </div>

      <button
        type="submit"
        className="px-6 py-3 cursor-pointer inline-block capitalize font-semibold bg-gradient-to-r from-blue-600 to-purple-600  text-white rounded-md"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
