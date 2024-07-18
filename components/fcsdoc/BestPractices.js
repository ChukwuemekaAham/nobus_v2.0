import { Tab } from '@headlessui/react'
import React from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function BestPractices() {

  const categories = ["Networking and Security","Cloud Storage","Resource Management","Back Up and Disastery Recovery"]

  return (
    <div id='best-practices' className='py-10'>
      <h1 className='text-3xl md:text-4xl text-[#232f3e] tracking-tight font-semibold pb-5'>
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
                <div>
                  <h3 class="py-2 text-2xl font-semibold text-[#232f3e]">
                  Security and Network
                  </h3>

                  <div className='pt-5'>
                    <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
                    User management
                    </h6>
                    <p>
                    Use Nobus Identity Service to create, distribute, change, and revoke 
                    Nobus access credentials. A credential is a data that confirms the 
                    identity of the user. (It could be a user name and password, user 
                    name and API key, or an authentication token that the Identity 
                    service provides).
                    </p>

                    <div className='border-l-2 border-l-blue-500 bg-blue-100 p-2 rounded-md my-5'>
                    <span className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-blue-600">
                      <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" />
                    </svg> <span className='font-mono font-semibold text-blue-600 pl-2'>Note:</span> </span>
                      <p className='text-sm pt-2 pl-2'>
                      Protect your root user login details, keys and access tokens like you would your credit card numbers or any other sensitive secret. 
                      </p>
                    </div>

                    <p>

                     You are adviced to use your account email address and password to sign in to the Nobus Management Console and create a user for yourself with administrative permissions.
                     Please ensure that you use a strong password to help protect account-level access to the Nobus Management Console and Don't share your Nobus account root user password or access keys with anyone. It must be kept private.
                      
                    </p>

                  </div>
                  
                  <div className='pt-5'>
                    <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
                    Create Individual Users
                    </h6>
                    <p>
                    Don't use your Nobus account root user credentials to access Nobus, and don't give your credentials to anyone else. Instead, create individual users for anyone who needs access to your Nobus account. Create an user for yourself as well, give that user administrative permissions, and use that user for all your work.
                    </p>

                    <div className='border-l-2 border-l-blue-500 bg-blue-100 p-2 rounded-md my-5'>
                    <span className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-blue-600">
                      <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" />
                    </svg> <span className='font-mono font-semibold text-blue-600 pl-2'>Note:</span> </span>
                      <p className='text-sm pt-2 pl-2'>
                      Before you set permissions for individual users, though, see the next point about groups.
                      </p>
                    </div>

                  </div>
                  <div className='pt-5'>
                    <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
                    Use Groups to Assign Permissions to Users
                    </h6>
                    <p>
                    Instead of defining permissions for individual users, it's usually more convenient to create groups that relate to job functions (administrators, developers, accounting, etc.). Next, define the relevant permissions for each group. Finally, assign users to those groups. All the users in an group inherit the permissions assigned to the group. That way, you can make changes for everyone in a group in just one place. As people move around in your company, you can simply change what group their user belongs to.
                    </p>

                  </div>
                  <div className='pt-5'>
                    <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
                    Grant Least Privilege
                    </h6>
                    <p>
                    Follow the standard security advice of granting least privilege, 
                    or granting only the permissions required to perform a task. Determine what users 
                    (and roles) need to do and then craft policies that allow them to perform
                     only those tasks. 
                    </p>

                    <p>
                    Start with a minimum set of permissions and grant additional permissions 
                    as necessary. Doing so is more secure than starting with permissions that
                     are too lenient and then trying to tighten them later.
                    </p>

                  </div>
                  <div className='pt-5'>
                    <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
                    Configure a Strong Password Policy for Your Users
                    </h6>
                    <p>
                    If you allow users to change their own passwords, require that they create strong passwords and that they rotate their passwords periodically. You can use the password policy to define password requirements, such as minimum length, whether it requires non-alphabetic characters, how frequently it must be rotated, and so on.
                    </p>

                  </div>
                  <div className='pt-5'>
                    <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
                    Remove Unnecessary Credentials
                    </h6>
                    <p>
                    Remove user credentials (passwords and keys) that are not needed. For example, 
                    if you created an user for an application that does not use the console, then the 
                    user does not need a password. Similarly, if a user only uses the console, remove 
                    their access keys. Passwords and access keys that have not been used recently might 
                    be good candidates for removal. You can find unused passwords or access keys using the 
                    console.
                    </p>

                  </div>
                </div>

                <div>

                <div className='pt-5'>
                  <div>
                    
                  <h3 class="py-2 text-3xl font-semibold text-[#232f3e]">
                  Security Groups for Instances
                  </h3>
                  <p className='pt-2'>
                  A security group acts as a virtual firewall that controls the traffic for one or more instances. When you launch an instance, you can specify one or more security groups; otherwise, we use the default security group. You can add rules to each security group that allow traffic to or from its associated instances. You can modify the rules for a security group at any time; the new rules are automatically applied to all instances that are associated with the security group. When we decide whether to allow traffic to reach an instance, we evaluate all the rules from all the security groups that are associated with the instance.
                  </p>
                  <p className='pt-2'>
                  When you launch an instance in a Data center, you must specify a security group that's created for that Data center. After you launch an instance, you can change its security groups. Security groups are associated with network interfaces. Changing an instance's security groups changes the security groups associated with the primary network interface (eth0).
                  </p>
                  <p className='pt-2'>
                  If you have requirements that aren't met by security groups, you can maintain your own firewall on any of your instances in addition to using security groups.
                  </p>
                  
                  </div>
                  <div className='pt-5'>
                    <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
                    
                    </h6>
                    <p>
                    
                    </p>

                  </div>
                  <div className='pt-5'>
                    <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
                    
                    </h6>
                    <p>
                    
                    </p>

                  </div>
                  <div className='pt-5'>
                    <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
                    
                    </h6>
                    <p>
                    
                    </p>

                  </div>
                  <div className='pt-5'>
                    <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
                    
                    </h6>
                    <p>
                    
                    </p>

                  </div>


                </div>
                
                
                  
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <h3 class="py-2 text-3xl font-semibold text-[#232f3e]">
                Storage for the Root Device
                </h3>
                <p>

                </p>

                <p>

                </p>
              </Tab.Panel>
              <Tab.Panel>
                <h3 class="py-2 text-3xl font-semibold text-[#232f3e]">
                Resources Management
                </h3>

                <div className='pt-5'>
                    <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
                    
                    </h6>
                    <p>
                    
                    </p>

                  </div>

                  <div className='pt-5'>
                    <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
                    
                    </h6>
                    <p>
                    
                    </p>

                  </div>
              </Tab.Panel>
              <Tab.Panel>
                <h3 class="py-2 text-3xl font-semibold text-[#232f3e]">
                Back Up and Recovery
                </h3>
                <p>

                </p>
                <p>
                  
                </p>
              </Tab.Panel>
              
            </Tab.Panels>
          
          </div>
        </Tab.Group>
      </div>
    </div>
  )
}

export default BestPractices