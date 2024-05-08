//Link Next Js
import Link from "next/link";

//next hook
import { usePathname } from "next/navigation";

//framer motion
import  {motion} from  'framer-motion'

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
];
const Nav = ({ containerStyle, linkStyles, underLineStyle }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyle}`}>
      {links.map((link, index) => {
        return (
          <Link href={link.path} className={`capitalize ${linkStyles}`} key={index}>
            {link.path == path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underLineStyle}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
