import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ArrowRightIcon, UserIcon } from '@heroicons/react/outline';

const cardData = [
   
    {
      id: "1",
      title: "Contact Sales",
      href: '#',
      description:
        "Let's talk about how we can help your business",
      image: "/secure.png",
      href: "/contact/sales",
      icon: UserIcon,
    },
    {
      id: "2",
      title: "Q&A",
      href: '#',
      description:
        "Find quick answers to resolve your issues",
      image: "/secure.png",
      href: "/helpcenter",
      icon: UserIcon,
    },
    {
      id: "3",
      title: "Contact Support",
      href: '#',
      description:
        "Let's help you resolve all the technical issues",
      image: "/secure.png",
      href: "/contact/support",
      icon: UserIcon,
    },
    {
      id: "4",
      title: "Contact Support",
      href: '#',
      description:
        "Let's help you resolve all the technical issues",
      image: "/secure.png",
      href: "/contact/support",
      icon: UserIcon,
    },
    
    
    
  ];

const resources = [
  
  {
    id: "1",
    title: "Contact Sales",
    href: '#',
    description:
      "Let's talk about how we can help your business",
    image: "/secure.png",
    href: "/contact/sales",
    icon: UserIcon,
  },
  {
    id: "2",
    title: "Q&A",
    href: '#',
    description:
      "Find quick answers to resolve your issues",
    image: "/secure.png",
    href: "/helpcenter",
    icon: UserIcon,
  },
  {
    id: "3",
    title: "Contact Support",
    href: '#',
    description:
      "Let's help you resolve all the technical issues",
    image: "/secure.png",
    href: "/contact/support",
    icon: UserIcon,
  },
  {
    id: "4",
    title: "Contact Support",
    href: '#',
    description:
      "Let's help you resolve all the technical issues",
    image: "/secure.png",
    href: "/contact/support",
    icon: UserIcon,
  },
  
  
  
];
  
  
function index() {
  return (
    <section>
    <Head>
    <title> Nobus | Documentation </title>
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />

    <div className='top-0 grid gap-y-10'>
        <div className='flex-col justify-center text-center' style={{
                backgroundImage: "url('/doc.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}> 
                <div className="py-20 px-8 lg:pt-40 sm:px-20">
                    <h1 className="pb-4 text-3xl md:text-4xl lg:text-5xl tracking-wider leading-relaxed font-bold text-white">
                    Nobus Documentation
                    </h1>
                    <p className="text-sm sm:text-md lg:text-lg font-semibold text-white tracking-wide leading-relaxed pb-4">
                    Find user guides, developer guides, API references, tutorials, and more.
                     </p>
                   
                
                </div>

         
           
        </div>
        <div className='flex-col p-8'>
            <div className="py-5 text-center">
                <h1 className="pb-3 text-xl tracking-wide leading-relaxed font-semibold text-gray-800">
                Guides & API References
                </h1>
                
            </div>
            <div className='grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2'>                  
                {cardData?.map((item) => (
                    <div
                    className="p-5 bg-gray-100 flex flex-col space-x-4 rounded-3xl text-left shadow-3xl border group"
                    >   <img 
                            src={item.image}
                            className="h-20 w-20 flex-shrink-0 text-gray-400" 
                            aria-hidden="true" 
                        />
                        {/* <div className="pl-4">
                        <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />

                        </div> */}
                        <div className="py-5">
                            <h1 className="pb-3 text-2xl tracking-wide leading-relaxed font-semibold text-gray-800">{item.title}</h1>
                            <p className="text-base text-white tracking-wide leading-relaxed text-gray-800">{item.description}</p>
                        </div>
                        
                      
                        
                    </div>
                ))}
            
            </div>
        </div>
        <div className="p-20"
                 style={{
                    backgroundImage: "url('/backup.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                 
                  }}
            >
            
            <div className="flex flex-col lg:flex-row mx-auto">

                <div className="text-left lg:w-1/2 md:pr-20 pt-0 text-white">
                
                <h1 className="text-3xl sm:text-4xl font-semibold">
                We are project focused
                </h1>
              
                <p className="my-5 text-md tracking-wide leading-relaxed max-w-7xl lg:mx-auto lg:pt-5 lg:pb-10">
                Easy and Secure Onboarding. Displaying the highest level of Integrity in the way we conduct our business
                </p>
                <a href="/blog">
                    <button className="w-full sm:w-40 px-4 py-3 rounded hover:shadow active:scale-90 cursor-pointer text-md font-semibold bg-blue-600 text-white border-2 border-blue-600">
                    Get Started
                    </button>
                </a>
                
                </div>
                
                <div className="lg:w-1/2 mt-10 lg:mt-0">
                <div className="flex-col">
                
                    <img src="/backup2.png" />
        
                </div>
                    
                </div>
            </div>
            </div>
        <div className='flex-col p-8'>
            <div className="py-5 text-center">
                <h1 className="pb-3 text-xl tracking-wide leading-relaxed font-semibold text-gray-800">
                General Resources
                </h1>
                
            </div>
            <div className='grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2 lg:grid-cols-4'>                  
                {resources?.map((item) => (
                    <div
                    className="p-5 bg-gray-100 flex flex-col space-x-4 rounded-3xl text-left shadow-3xl border group"
                    >   <img 
                            src={item.image}
                            className="h-20 w-20 flex-shrink-0 text-gray-400" 
                            aria-hidden="true" 
                        />
                        {/* <div className="pl-4">
                        <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />

                        </div> */}
                        <div className="py-5">
                            <h1 className="pb-3 text-2xl tracking-wide leading-relaxed font-semibold text-gray-800">{item.title}</h1>
                            <p className="text-base text-white tracking-wide leading-relaxed text-gray-800">{item.description}</p>
                        </div>
                        
                      
                        
                    </div>
                ))}
            
            </div>
        </div>

    </div>
    <Footer />
</section>
  )
}

export default index