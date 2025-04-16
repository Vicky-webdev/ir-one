const ContactAgent = () => {
    return (
      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Contact Agent</h2>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <textarea
            rows={3}
            placeholder="Message"
            className="w-full border border-gray-300 rounded px-3 py-2"
          ></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Send Inquiry
          </button>
        </form>
      </div>
    );
  };
  
  export default ContactAgent;
  