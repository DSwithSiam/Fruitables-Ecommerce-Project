import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect } from "react";

export function Contact() {
  const handlePostContact = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const contact = { name, email, message };

    fetch("https://fruitables-api.onrender.com/contact/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    })
      .then((response) => response.json())
      .then((data) => console.log({ postId: data.id }));

    form.reset();
  };

  return (
    <>
      <div className="w-10/12 mx-auto my-20 bg-gray-200 p-4 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <form onSubmit={handlePostContact} className="flex flex-col gap-4">
            <div>
              <Label htmlFor="name" value="Your Name" />
              <TextInput
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" value="Your Email" />
              <TextInput
                id="email"
                type="email"
                name="email"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="message" value="Your Message" />
              <Textarea
                id="message"
                name="message"
                placeholder="Message"
                required
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
          <div>
            <div className="flex flex-col gap-4 bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-4">
                <FaLocationDot className="text-5xl text-rose-600" />
                <div>
                  <h2 className="text-2xl font-semibold">Address</h2>
                  <p>123 Street New York. USA</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MdEmail className="text-5xl text-rose-600" />
                <div>
                  <h2 className="text-2xl font-semibold">Mail Us</h2>
                  <p>info@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-5xl text-rose-600" />
                <div>
                  <h2 className="text-2xl font-semibold">Telephone</h2>
                  <p>(+012) 3456 7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <iframe
            className="w-full border mt-5"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14607.364620543316!2d90.425489!3d23.7530432!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1706801656209!5m2!1sen!2sbd"
            width="600"
            height="250"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
