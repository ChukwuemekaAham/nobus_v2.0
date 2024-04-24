import { Tab } from '@headlessui/react'
import React from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function BestPractices() {

  const categories = ["Networking and Security","Cloud Storage","Resource Management","Back Up and Disastery Recovery"]

  return (
    <div id='best-practices' className='py-10'>
      <h1 className='text-2xl md:text-3xl tracking-tight font-semibold pb-5'>
        Best Practices
      </h1>

      <div className="w-full px-2 py-16 sm:px-0">
        <Tab.Group vertical>
          <div className="grid grid-cols-1">
        
            <Tab.List className="flex-col max-w-sm rounded-xl bg-gray-100">
            <h2 className="py-2 pl-2 text-2xl font-semibold text-[#232f3e]"></h2>
              {categories.map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full py-2.5 pl-2 text-md text-left font-medium leading-5',
                      'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                      selected
                        ? 'bg-white text-blue-500 shadow'
                        : 'text-gray-800 hover:bg-white/[0.12] hover:text-gray-400'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
  
            <Tab.Panels className="flex-col py-10">
              <Tab.Panel>
                <h3 class="py-2 text-2xl font-semibold text-[#232f3e]">
                  1
                </h3>
              </Tab.Panel>
              <Tab.Panel>
                <h3 class="py-2 text-2xl font-semibold text-[#232f3e]">
                  2
                </h3>
              </Tab.Panel>
              <Tab.Panel>
                <h3 class="py-2 text-2xl font-semibold text-[#232f3e]">
                  3
                </h3>
              </Tab.Panel>
              <Tab.Panel>
                <h3 class="py-2 text-2xl font-semibold text-[#232f3e]">
                  4
                </h3>
              </Tab.Panel>
              
            </Tab.Panels>
          
          </div>
        </Tab.Group>
      </div>
    </div>
  )
}

export default BestPractices