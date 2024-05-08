import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  User,
  University,
} from "lucide-react";
import Image from "next/image";

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Kroes Soda'
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+885 10 987 001'
    },
    {
        icon: <MailIcon size={20} />,
        text: 'sodait25@gmail.com'
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 16 Sep, 2002',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Bachelor in Computer Science',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Mean Chey, Phnom Penh',
    },
]

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                University: "ROYAL UNIVERSITY OF PHNOM PENH",
                role: 'Bachelor of Science',
                years: "Mar 2022– Present"
            },
            {
                University: "ETEC CENTER",
                role: 'Programming Skills',
                years: "Feb 2022 – Sep 2023"
            },
           
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: "ETEC CENTER",
                role: 'Instructor',
                years: "July 2022 – May 2023"
            },
            {
                company: "CPBank",
                role: 'Web and Software Development',
                years: "May 2023– Present"
            },
        ]
    }

];
const skillData = [
    {
        title: "skills",
        data: [
            {
                name: 'HTML, CSS, Tailwind '
            },
            {
                name: 'Javascript, Jquery, Ajax'
            },
            {
                name: 'React Js, Next Js'
            },
            {
                name: 'Front-end Development'
            },
            {
                name: 'Java (Spring Boot Framework)'
            },
            {
                name: 'C# (ASP.Net Framework)'
            },
            {
                name: 'Back-end Development'
            }
        ]
    },
    {
        title: "tools",
        data: [
            {
                imgPath: '/about/vs.png'
            },
            {
                imgPath: '/about/intelije.png'
            },
            {
                imgPath: '/about/Visual.png'
            },
            {
                imgPath: '/about/postgres.png'
            },
            {
                imgPath: '/about/sql.png'
            },
            {
                imgPath: '/about/postman.png'
            },
        ]
    }
]

const About = () => {

    const getData = (arr, title) => {
        return arr.find((item)=> item.title == title);
      }
      
  
  console.log(getData(qualificationData,'education'),)
  return (
    <section>
        <div className="container mx-auto mt-25">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto dark:text-white">About me</h2>
        </div>
        <div className="flex flex-col xl:flex-row">
            {/* images */}
            <div className="hidden xl:flex flex-1 relative">
                <DevImg containerStyles='bg-about_sharp_light dark:bg-about_sharp_dark 
                w-[545px] h-[510px] bg-no-repeat relative'  imgSrc= '/hero/soda_developer.png' />
            </div>
            {/* tabs */}
            <div className="flex-1">
                <Tabs defaultValue="personal">
                    <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                        <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Person Info</TabsTrigger>
                        <TabsTrigger className="w-[162px] xl:w-auto"value="qualifications">Qualifications</TabsTrigger>
                        <TabsTrigger className="w-[162px] xl:w-auto"value="skills">Skills</TabsTrigger>
                    </TabsList>
                    {/* tans content */}
                    <div className="text-lg mt-12 xl:mt-8 mb-4">
                         {/* personal */}
                         <TabsContent value="personal">
                            <div className="text-center xl:text-left">
                                <h3 className="h3 mb-4">My Service Quality</h3>
                                <p className="subtitle max-w-xl mx-auto xl:mx-0">I Specialize in crafting intuitive website with
                                    cutting-edge technology, delivering dynamic and engaging
                                    user experience
                                </p>
                                {/* icons */}
                                <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                    {infoData.map((item,index)=>{
                                        return(
                                            <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                <div className="text-primary">{item.icon}</div>
                                                <div>{item.text}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                                {/* languages */}
                                <div className="flex flex-col gap-y-2">
                                    <div className="text-primary">Language Skill</div>
                                    <div className="border-b border-border"></div>
                                    <div>Khmer, English</div>
                                    <div className="border-b border-border"></div>
                                </div>
                            </div>
                         </TabsContent>
                         {/* qualification */}
                         <TabsContent value="qualifications">
                            <div>
                                <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                                {/* Experience & education wrapper */}
                                <div className="grid md:grid-cols-2 gap-y-8 p-8">
                                    {/* experience */}
                                    <div className="flex flex-col gap-y-6">
                                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                            <Briefcase size={24} />
                                            <h4 className="capitalize font-medium">
                                                {getData(qualificationData, 'experience').title}
                                            </h4>
                                        </div>
                                        {/* list */}
                                        <div className="flex flex-col gap-y-8">
                                            {getData(qualificationData,'experience').data.map((item,index)=>{
                                                const {company, role, years} = item;
                                                return(
                                                    <div className="flex gag-x-8 group " key={index}>
                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]
                                                            group-hover:translate-y-[84px] transition-all duration-500">
                                                            </div>
                                                        </div> 
                                                        <div className="ml-4">
                                                            <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                            <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                                            <div className="text-base font-medium">{years}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                     {/* education */}
                                     <div className="flex flex-col gap-y-6">
                                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                            <GraduationCap size={28} />
                                            <h4 className="capitalize font-medium">
                                                {getData(qualificationData, 'education').title}
                                            </h4>
                                        </div>
                                        {/* list */}
                                        <div className="flex flex-col gap-y-8">
                                            {getData(qualificationData,'education').data.map((item,index)=>{
                                                const {University, role, years} = item;
                                                return(
                                                    <div className="flex gag-x-8 group " key={index}>
                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]
                                                            group-hover:translate-y-[84px] transition-all duration-500">
                                                            </div>
                                                        </div> 
                                                        <div className="ml-4">
                                                            <div className="font-semibold text-xl leading-none mb-2">{University}</div>
                                                            <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                                            <div className="text-base font-medium">{years}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </TabsContent>
                         {/* Skill */}
                         <TabsContent value="skills">
                            <div className="text-center xl:text-left">
                                <h3 className="h3 mb-8">The best skills that I have</h3>
                                <div className="mb-16">
                                    <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                    <div className="border-b border-border mb-4"></div>
                                    {/* skills list */}
                                    <div>
                                        {getData(skillData, 'skills').data.map((item,index)=>{
                                            const {name} = item;
                                            return(
                                                <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                    <div className="font-medium">{name}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                {/* tools */}
                                <div className="mb-8">
                                    <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                    <div className="border-b border-border mb-4"></div>
                                       {/* tools list */}
                                       <div className="flex gap-x-8 justify-center xl:justify-start">
                                        {getData(skillData, 'tools').data.map((item,index)=>{
                                            const {imgPath} = item;
                                            return(
                                              <div key={index}>
                                                    <Image src={imgPath} width={48} height={48} alt="" />
                                              </div>
                                            )
                                        })}
                                    </div>
                                    <div className="border-b border-border mb-4 mt-4"></div>
                                </div>
                            </div>
                         </TabsContent> 
                    </div>
                  
                </Tabs>
            </div>
        </div>
    </section>
  )

};
export default About;
