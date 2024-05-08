'use client';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';
import { Toaster } from "./ui/toaster";

const Form = () => {
    const handleButtonClick = () => {
        // Handle button click logic
    };

    return (
        <form className="flex flex-col gap-y-4">
            <div className="relative flex items-center">
                <Input type='text' id='name' placeholder='Name' />
                <User className="absolute right-6" size={20} />
            </div>
            <div className="relative flex items-center">
                <Input type='email' id='email' placeholder='Email' />
                <MailIcon className="absolute right-6" size={20} />
            </div>
            <div className="relative flex items-center">
                <Textarea type='text' id='msg' placeholder='Type Your Message Here' />
                <MessageSquare className="absolute top-4 right-6" size={20} />
            </div>
            <Button className='flex items-center max-w-[166px] gap-x-1' onClick={handleButtonClick}>
                Let&apos;s talk <ArrowRightIcon size={20} />
            </Button>
        </form>
    );
};

export default Form;