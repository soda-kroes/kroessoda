
import Socials from "./Socials"

const Footer = () =>{
    return(
        <footer className="bg-secondary py-12">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-between">
                    {/* social */}
                    <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4' iconsStyles='text-primary dark:text-white/70 
                    hover:text-white dark:hover:text-primary text-[20px] transition-all'  />
                        {/* copyright */}
                        <div className="text-muted-foreground">
                            Copyright &copy;[Kroes Soda] | Release 📅 08/05/2024
                        </div>
                  
                </div>

            </div>
        </footer>
    )
}
export default Footer