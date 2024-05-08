import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Cta = () => {
  return (
    <section className="py-10 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 righteous-font font-bold  max-w-xl  text-center mb-8">
           <div className="ml-4"> <Image  src='/mylogo.png' width={294} height={294} priority alt=""/></div>
           <div className="text-3xl">&ldquo;Talk Less, Do More.&rdquo;</div>
          </h2>
          <Link href="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Cta;
