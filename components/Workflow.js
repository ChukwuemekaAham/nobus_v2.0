import { PhoneIcon } from '@heroicons/react/outline'
import { CheckIcon } from '@heroicons/react/solid'

const includedFeatures = [
  'Virtual Hosting',
  'Storage Services',
  'Cloud Backup/Disaster Recovery',
  'Networking Services',
  'Cloud Security',
  'Advanced Cyber Sercurity Service',
  'Image Services',
]

export default function Content() {
  return (
    <div className="bg-white py-24 sm:py-32"  style={{
      backgroundImage: "url('/ellipse.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl md:text-4xl text-center font-semibold tracking-tight text-gray-900">Global Cloud-Based Offerings</h2>
          <p className="mt-6 text-justify sm:text-center text-md font-small tracking-wide text-gray-900">
          Helping organizations to minimize the time and amount 
          used to plan, procure, and manage their infrastructure 
          in a scalable and secure way, over a private WAN or the internet.
          </p>
          <div className="flex justify-center mx-auto mt-10">
            <a href="/contact">
              <div className="flex justify-center px-4 py-3 sm:w-40 hover:bg-blue-500 hover:shadow-md active:scale-90 rounded cursor-pointer border font-semibold text-md bg-blue-600 text-white border-blue-600">
                
                <span className="text-lg">Contact Sales</span>
              </div>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-semibold tracking-wide text-gray-900">Experience Workflow Boost</h3>
            <p className="mt-6 text-base text-gray-600 tracking-wide max-w-lg">
            Enhanced workflows with guided digital solutions for global optimization;
            implement new processes faster, simplify data <br className='hidden md:block' /> storage and improve productivity.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-md font-semibold leading-6 text-blue-600">What’s available</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-base leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-indigo-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold tracking-wide text-gray-600"> Flexible Capacity As Low As</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-semibold tracking-tight text-gray-900">#3.00</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">NGN</span>
                </p>
                <a
                  href="https://cloud.nobus.io/"
                  className="mt-10 cursor-pointer block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Visit Cloud Console
                </a>
                <p className="mt-6 text-xs leading-5 tracking-wide text-gray-600">
                  Start building your future
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



