import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
        {/* <div className="flex items-center justify-center p-3 w-54 h-54 bg-red-400 rounded-lg text-white font-bold text-xl text-center">
          KSD IT
        </div> */}
        <Image  src='/mylogo.png' width={84} height={84} priority alt=""/>
    </Link>
  );
};

export default Logo;