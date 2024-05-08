import Form from "@/components/Form";
import { Home, MailIcon, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustraction */}
        <div className="grid xl:grid-cols-2 pt-12  xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              {/* <span className="w-[30px] h-[2px] bg-primary"></span> */}
              {/* Say Hello 👋 */}
            </div>
          <h1 className="h1 max-w-md mb-8">Let&apos;s Work Together.</h1>
          <p className="subtitle max-w-[400px]">
              Welcome to our collaborative space where we believe in the power of working together. We understand that achieving remarkable results often requires the collective effort of talented individuals. That&apos;s why we invite you to join us on a journey of collaboration and teamwork.
            </p>
          </div>
          {/* illustraction */}
          <div className="hidden xl:flex w-full bg-contact_illustraction_light
          dark:bg-contact_illustraction_dark bg-contain bg-top bg-no-repeat"></div>
        </div>

        {/* Info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
            {/* info text */}
            <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
                {/* mail */}
            <div className="flex items-center gap-x-8">
                <MailIcon size={18} className="text-primary" />
                <div>sodait25@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
                <Home size={18} className="text-primary" />
                #33, St. 378, Beung Tumpun, Mean Chey, Phnom Penh
            </div>
            <div className="flex items-center gap-x-8">
                <PhoneCall size={18} className="text-primary" />
                010 987 001
            </div>
            </div>
            <Form />
        </div>
      </div>
    </section>
  );
};
export default Contact;
