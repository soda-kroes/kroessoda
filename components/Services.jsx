import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Blocks, GanttChartSquare } from "lucide-react";

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Design',
        description: 'Web design involves creating the visual elements and layout of a website, while coding involves translating these designs into a functional website using programming languages like HTML, CSS, and JavaScript.'
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: 'Builds, designs, and maintains all websites and software applications.Designs, writes, and edits website content. Understands UI, designs assignments with web services like REST, SOAP, etc.'
    },
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Back-end Development',
        description: 'I have extensive experience in developing and maintaining APIs that facilitate seamless communication between different systems and applications. My expertise lies in designing and implementing RESTful APIs.'
    }
]

const Services = () => {
  return (
    <section className="mb-12 xl:md-36">
        <div className="container mx-auto">
            <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto dark:text-white">My Services</h2>
            {/* grid item */}
            <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                {servicesData.map((item,index)=>{
                    return(
                        <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 
                        justify-center items-center relative' key={index}>
                            <CardHeader className='text-primary absolute -top-[60px]'>
                                <div className="w-[140px] h-[80px] bg-white dark:bg-background
                                flex justify-center items-center">{item.icon}
                                </div>
                            </CardHeader>
                            <CardContent className="text-center">
                                <CardTitle className="mb-4">{item.title}</CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    </section>
  )
};
export default Services;
