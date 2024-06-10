import React from 'react'
import { Carousel } from "flowbite-react";
import { StarIcon } from '@heroicons/react/solid';

const posts = [
    {
      id: 1,
      title: 'Nobus Flexible Object Storage (FOS)',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      category: { title: 'Cloud Economics', href: '#' },
      author: {
        name: 'Ebun Ekundayo',
        role: 'CEO, Bento',
        href: '#',
        imageUrl:
          '/bento.png',
      },
    },
    {
      id: 2,
      title: 'Cloud Adoption in Nigeria',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      category: { title: 'Migration', href: '#' },
      author: {
        name: 'Tom Williams',
        role: 'Senior Software Developer',
        href: '#',
        imageUrl:
          '/review.png',
      },
    },
    {
      id: 3,
      title: 'Optimally utilizing the Nobus DNS service',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      category: { title: 'Networking', href: '#' },
      author: {
        name: 'Chinonso Ohakwe',
        role: 'CEO, Paay.ng',
        href: '#',
        imageUrl:
          '/paay.png',
      },
    },
  ]

  const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
  
function Testimonials() {
  return (

    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" >
        <div className="flex mx-auto max-w-2xl lg:mx-0">
            <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">What users are saying</h2>
                <p className="mt-2 text-md text-gray-600">
                Don't just take our word for it - see what actual users are saying about Nobus Cloud.
                </p>
            </div>
            <div>
                <img src="/quote.png" className="h-full w-full" alt="quote" />
            </div>
        </div>
        <div className="hidden lg:grid gap-4 h-96 ">
            <Carousel indicators={true} pauseOnHover>
                <div className="flex h-full items-center justify-center">
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            
                            <div className="group relative">
                                
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                              
                                <div className="flex items-center mt-3 ">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                        key={rating}
                                        className={classNames(
                                            reviews.average > rating ? 'text-yellow-400' : 'text-gray-200',
                                            'h-5 w-5 flex-shrink-0'
                                        )}
                                        aria-hidden="true"
                                        />
                                    ))}
                                </div>
                            
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                
                                <div className="text-sm leading-6">
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <p className="font-semibold text-gray-900">
                                    <a href={post.author.href}>
                                    <span className="absolute inset-0" />
                                    {post.author.name}
                                    </a>
                                </p>
                                <p className="text-gray-600">{post.author.role}</p>
                                </div>
                            </div>
                            </article>
                        ))}
                    </div>
                </div>
                <div className="flex h-full items-center justify-center">
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            
                            <div className="group relative">
                                
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                              
                                <div className="flex items-center mt-3 ">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                        key={rating}
                                        className={classNames(
                                            reviews.average > rating ? 'text-yellow-400' : 'text-gray-200',
                                            'h-5 w-5 flex-shrink-0'
                                        )}
                                        aria-hidden="true"
                                        />
                                    ))}
                                </div>
                            
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                
                                <div className="text-sm leading-6">
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <p className="font-semibold text-gray-900">
                                    <a href={post.author.href}>
                                    <span className="absolute inset-0" />
                                    {post.author.name}
                                    </a>
                                </p>
                                <p className="text-gray-600">{post.author.role}</p>
                                </div>
                            </div>
                            </article>
                        ))}
                    </div>
                </div>
                
            
            </Carousel>
        </div>
        <div className="grid gap-4 h-96 lg:hidden">
          <div className='border-t border-gray-200 mt-10'>
            <Carousel indicators={true} pauseOnHover>
            {posts.map((post) => (
                <div className="flex h-full items-center justify-center">
                    <div className="mt-5">
                      <article key={post.id} className="flex max-w-2xl flex-col items-start justify-between">
                        <div className="group relative"> 
                          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                          <div className="flex items-center mt-3 ">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                  <StarIcon
                                  key={rating}
                                  className={classNames(
                                      reviews.average > rating ? 'text-yellow-400' : 'text-gray-200',
                                      'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                  />
                              ))}
                          </div>
                        </div>
                        <div className="relative mt-8 flex items-center gap-x-4">
                            
                            <div className="text-sm leading-6">
                            <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                            <p className="font-semibold text-gray-900">
                                <a href={post.author.href}>
                                <span className="absolute inset-0" />
                                {post.author.name}
                                </a>
                            </p>
                            <p className="text-gray-600">{post.author.role}</p>
                            </div>
                        </div>
                      </article>
                        
                    </div>
                </div>
               
              ))}
            </Carousel>   
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Testimonials


    