import { contactDetails,frequentQuestions } from "../Data/Data";
const ContactPage = () => {
  return (
    <div className="bg-softCream w-full min-h-screen font-poppins">
      <div className="flex flex-col gap-6 md:gap-12 container mx-auto px-4 md:px-8 lg:px-40 mt-10">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-xl text-charcoal">Contact Us</h1>
          <p className="text-lightGray text-sm max-w-[600px]">
            Have questions about our architectural designs, construction
            projects, or building materials? Get in touch with our team and
            we'll be happy to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {contactDetails.map((cont) => (
            <div
              key={cont.id}
              className="bg-transparent border-2 border-whiteText rounded p-4 flex flex-col gap-3"
            >
              <div className="flex flex-row items-center gap-3">
                <p>{cont.icon}</p>
                <h1 className="text-sm font-bold ">{cont.title}</h1>
              </div>
              <p className="text-lightGray text-sm font-thin">{cont.desc}</p>
              <p className="text-sm font-bold text-black">{cont.contact}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border-2 border-whiteText flex flex-col gap-3 p-5 rounded">
            <h1 className="font-semibold text-charcoal">Send Us a Message</h1>
            <p className="font-thin text-sm">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <div className="flex flex-col md:flex-row mt-3 gap-5">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-[13px] font-semibold text-charcoal">First Name</label>
                <input
                  type="text"
                  className="p-1 rounded border-[1px] border-whiteText text-sm pl-2 outline-none focus:ring-1"
                  placeholder="Byishimo"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label className="text-[13px] font-semibold text-charcoal">Last Name</label>
                <input
                  type="text"
                  className="p-1 rounded border-[1px] border-whiteText text-sm pl-2 outline-none focus:ring-1"
                  placeholder="Japhet"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-[13px] font-semibold text-charcoal">Email</label>
              <input
                type="email"
                className="p-1 rounded border-[1px] border-whiteText text-sm pl-2 outline-none focus:ring-1"
                placeholder="byishimo@gmail.com"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[13px] font-semibold text-charcoal">Phone</label>
              <input
                type="text"
                className="p-1 rounded border-[1px] border-whiteText text-sm pl-2 outline-none focus:ring-1"
                placeholder="+250 "
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[13px] font-semibold text-charcoal">Subject</label>
              <input
                type="text"
                className="p-1 rounded border-[1px] border-whiteText text-sm pl-2 outline-none focus:ring-1"
                placeholder="Ex:Building Materials"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[13px] font-semibold text-charcoal">Subject</label>
              <input
                type="text"
                className="p-1 rounded border-[1px] border-whiteText text-sm pl-2 outline-none focus:ring-1"
                placeholder="Ex:Building Materials"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[13px] font-semibold text-charcoal">Message</label>
              <textarea name="" id="" className="p-1 rounded border-[1px] border-whiteText text-sm pl-2 outline-none focus:ring-1 resize-none" placeholder="How can we Help you?"/>
            </div>

            <button className="bg-teal p-2 rounded text-white font-bold">Send Message</button>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            style={{
              width: '100%',
              height: window.innerWidth < 640 ? '300px' : window.innerWidth < 768 ? '300px' : window.innerWidth < 1024 ? '450px' : '550px',
              border: 0,
              borderRadius: '12px',
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
        <div className="flex flex-col">
            <h1 className="font-bold text-xl text-charcoal">Frequently Asked Questions</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between mt-7">
                {frequentQuestions.map((question)=>
                 <div
                 key={question.id}
                 className="border-[1px] border-whiteText text-sm flex flex-col gap-3 p-3 rounded"
                 >
                    <h1 className="font-semibold text-sm text-teal">{question.question}</h1>
                    <p className="text-[13px] font-thin">{question.answer}</p>
                 </div>
                )}
            </div>
          </div>
      </div>
    </div>
  );
};

export default ContactPage;
