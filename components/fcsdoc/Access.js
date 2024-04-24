import { Tab } from '@headlessui/react'
import React from 'react'
import ScriptSnippet from '../ScriptSnippet'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Access() {

  const categories = ["Sign Up for a Nobus Account","Create or Add Other User","Create Keypairs","Create Virtual Network Environment","Create Security Groups"]

  return (
      <div id='access-security-configurations' className='py-10'>
          <h1 className='text-2xl md:text-3xl tracking-tight font-semibold pb-5'>
          Access and Security Configuration
          </h1>

          <p>If you are yet to sign up for Nobus, or require support to launch
            your first instance, do the following below:
              
          </p>
          
          <p>You can start using Nobus
            FCS immediately if signed up already. 
                
          </p>

          <div className="w-full px-2 py-16 sm:px-0">
            <Tab.Group vertical>
              <div className="grid grid-cols-1">
            
                <Tab.List className="flex-col max-w-sm rounded-xl bg-gray-100">
                <h2 className="py-2 pl-2 text-2xl font-semibold text-[#232f3e]">STEPS</h2>
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
                    <h3 className="py-2 text-2xl font-semibold text-[#232f3e]">
                      Sign Up for a Nobus Account
                    </h3>
                    <p>Your Nobus account has access to all services in Nobus after you sign up for Nobus,  
                        and you are only billed for the services
                        that you use.       
                    </p>

                    <p className="py-2"><b>To create a Nobus account</b></p>
                    <ol className='pl-5 list-decimal space-y-2'>
                      <li>
                        <p>Open <a className='hover:underline' href="/registration">https://nobus.io/registration/</a>.
                        </p>
                        
                      </li>
                      <li>
                        
                        <p>You would receive a mail as part of the sign up requirement.
                        Ensure that all instructions are followed. Provide the verification 
                        code sent as part of the email confirmation message.
                        </p>

                        <p className='py-2'>
                          Please ensure that you have completed all the sign up requirement.
                        </p>
                        
                      </li>
                    </ol>
  
                  </Tab.Panel>
                  <Tab.Panel>
                    <h3 className="py-2 text-2xl font-semibold text-[#232f3e]">
                      Create or Add Other User
                    </h3>
                  
                    <p>
                      Ensure you remember your sign up details (credentials) 
                      because will be required to provide them ( username and password ) when you want to 
                      access some services in Nobus.
                    </p>
                
                    <p className="py-2"><b>To create an administrator user for yourself and add the user to an administrators
                          group (console)</b></p>
                    <ol className='pl-5 list-decimal space-y-2'>
                        <li>
                          <p>Use your Nobus account email address and password to Sign in as the root user to the
                            console at <a className='hover:underline' href="https://cloud.nobus.io/project/">https://cloud.nobus.io/</a>.
                          </p>
                        </li>
                        <li>
                          <p>In the navigation pane, choose <b>Users</b> and then choose <b>Add user</b>.
                          </p>
                        </li>
                        <li>
                          <p>For <b>User name</b>, enter <strong ><code className='text-red-400'>Administrator</code></strong>.
                          </p>
                        </li>
                        <li>
                          <p>Select the check box next to <b>Nobus Management Console access</b>. Then select
                              <b>Custom password</b>, and then enter your new password in the text box.
                          </p>
                        </li>
                        <li>
                          <p>Choose <b>Permissions</b>.
                          </p>
                        </li>
                        <li>
                          <p>Under <b>Set permissions</b>, choose <b>Add user to group</b>.
                          </p>
                          
                        </li>
                        <li>
                          <p>Choose <b>Create group</b>.
                          </p>
                        </li>
                        <li>
                          <p>In the <b>Create group</b> dialog box, for <b>Group name</b> enter <strong><code className='text-red-400'>Administrators</code></strong>.
                          </p>
                          
                        </li>
                        <li>
                          
                          <p>Choose <b>Filter policies</b>, and then select <b>Nobus managed -job
                                function</b> to filter the table contents.
                          </p>
                          
                        </li>
                        <li>
                          
                          <p>In the policy list, select the check box for <b>AdministratorAccess</b>. Then choose <b>Create group</b>.
                          </p>
                        
                        </li>
                        <li>
                          
                          <p>In the list of groups, select the check box for your new group. Choose
                              <b>Refresh</b> if necessary to see the group in the list.
                          </p>
                          
                        </li>
                        <li>
                          
                          <p>Choose <b>Next: Tags</b>.
                          </p>
                          
                        </li>
                        
                        <li>
                          
                          <p>Choose <b>Next: Review</b> to see the list of group memberships to be
                              added to the new user. When you are ready to proceed, choose <b>Create
                                user</b>.
                          </p>
                          
                        </li>
                    </ol>
                    
                    <p>You can use this same method to add more groups and users then give your users
                        access to the resources of your account. 
                    </p>
                    <p>Sign out of the Nobus console to sign in as the new user, then use the following
                        URL, where your <b>account_id</b> is your Nobus account number without
                        the hyphens.
                    </p>
                    <p>Do not enter your email address rather enter the new user name and password that you created recently.
                      When you're signed in, the navigation bar displays your "<b>user_name</b> @
                      <b>account_id</b>".
                    </p>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className='space-y-2'>
                      <h3 className="py-2 text-2xl font-semibold text-[#232f3e]">
                      Create a Key Pair
                      </h3>
                      <p>Key pairs are SSH credentials that are attached to an instance at
                        launched. 
                        </p>
                      <p>If you have generated a key pair with an external tool, you can import
                      it. Multiple instances can benefit from a single Keypair that
                      belong to a project.</p>
                    
                      <b className="py-2">Note</b>
                      <p>A key pair belongs to an individual user.
                        To share a key pair across multiple users, each user
                        must import that key pair.
                      </p>
                      <p>
                        <span>You can log in to your instance safely using a keypair ( which is public-key cryptography ).</span> 
                        When you launch your instance, specify the name of the key pair, then provide
                        the private key <span>when you log in using SSH.</span>
                              
                      </p>
                      <p>you can create a keypair using the Nobus FCS
                        console.
                      </p>
                          
                      <div>
                        <h5 className='py-2 font-bold text-lg'>To create a key pair</h5>
                        
                        <p className='py-2'>Create at least one key pair for each project.</p>
                        
                        <ol className="pl-5 list-decimal space-y-2">
                        
                        <li><p><a href="https://cloud.nobus.io/">Log in to the Nobus Management console.</a></p></li>
                      
                        <li><p>On the <span className="italic font-semibold">Project</span> tab, open the <span className="italic font-semibold">Compute</span> tab.</p></li>
                        <li><p>Click the <span className="italic font-semibold">Key Pairs</span> tab, which shows the key pairs that
                        are available for this project.</p></li>
                        <li><p>Click <span className="italic font-semibold">Create Key Pair</span>.</p></li>
                        <li><p>In the <span className="italic font-semibold">Create Key Pair</span> dialog box, enter a name for your
                        key pair, and click <span className="italic font-semibold">Create Key Pair</span>.</p></li>
                        <li><p>The private key will be downloaded automatically.</p></li>
                        <li> 
                          <dl>
                            
                            
                            <dd>
                              
                              <p>Alternatively, you can create a new key pair or import one at launch of the instance. 
                            
                              </p>

                              <p>To create a new keypair, Select <b>Create a new
                                
                                  key pair</b>, enter a name for the key pair, and then choose
                                  <b>Create Keypair</b>. This is the only chance for you to
                                  save the private key file, so be sure to select <b>Copy private key to clipboard </b>. Open Notepad or any editor and paste.
                                  Save the private key file with the (.pem) extention
                                  in a safe place. <b >click "Done" </b>. Remember that you'll need to provide the name of your key pair when you
                                  launch an instance and the corresponding private key each time you connect to
                                  the instance.
                              </p>

                          
                            </dd>
                          </dl>
                        </li>
                        <li>

                        <b className="">Note</b>
                      
                        <p>To connect to your Linux instance from a computer running Mac or Linux, you'll specify
                            the <code>.pem</code> file to your SSH client with the <code className="code">-i</code> option
                            and the path to your private key. 

                            To connect to your Linux instance from a computer
                            running Windows, use PuTTY, the Windows Subsystem for Linux. To do so, use the following 
                            to convert the <code>.pem</code> file to a <code>.ppk</code> file.
                                  
                        </p>
                      
                        <p><b>Optionally, to prepare to connect to a Linux instance from Windows using PuTTY</b></p>
                        <ol className='pl-5 list-decimal space-y-2 py-2' >
                            <li>
                                      
                              <p>Download and install PuTTY from <a href="https://winscp.net/eng/docs/ui_puttygen">
                                "https://winscp.net/eng/docs/ui_puttygen"</a>.
                              </p>
                                    
                            </li>
                            <li>
                                      
                              <p>Start PuTTYgen (for example, from the <b>Start</b> menu, choose <b>All Programs &gt; PuTTY &gt; PuTTYgen</b>).
                              </p>
                                    
                            </li>
                            <li>
                                      
                              <p>Under <b>Type of key to generate</b>, select <b>RSA</b>.
                              </p>
                                
                            </li>
                            <li>
                                      
                              <p>Select <b>Load</b>. PuTTYgen shows
                                only files with the extension <code>.ppk</code> by default. To locate your <code>.pem</code> file, 
                                select display files of all types.
                              </p>
                                      
                              
                            </li>
                            <li>
                                      
                              <p>Select the private key file that you created initially and choose <b>Open</b>. select <b>OK</b> to close the dialog box.
                              </p>
                                    
                            </li>
                            <li>
                                      
                              <p>Choose <b>Save private key</b>. When PuTTYgen pop a warning regarding saving the key without a passphrase. Choose <b>Yes</b>.
                              </p>
                                    
                            </li>
                            <li>
                                      
                              <p>Same name should be specified for the key used for the key pair.
                              Automatically, PuTTY adds the <code>.ppk</code> file extension.
                              </p>
                                    
                            </li>
                        </ol>
                        
                        </li>
                        <li><p>To make the key pair known to SSH, run the <strong>ssh-add</strong> command.</p>                  
                         
                          <ScriptSnippet script="$ssh-add yourPrivateKey.pem" language="bash" />
           
                        </li>
                        </ol>
                      </div>

                      <h5 className='py-2 font-bold text-lg'>Import a key pair</h5>
                      <ol className="pl-5 list-decimal space-y-2">
                        <li><p>Log in to the console.</p></li>
                        <li><p>On the <span className="italic font-semibold">Project</span> tab, open the <span className="italic font-semibold">Compute</span> tab.</p></li>
                        <li><p>Click the <span className="italic font-semibold">Key Pairs</span> tab, which shows the key pairs that
                        are available for this project.</p></li>
                        <li><p>Click <span className="italic font-semibold">Import Key Pair</span>.</p></li>
                        <li><p>In the <span className="italic font-semibold">Import Key Pair</span> dialog box, enter the name of your
                        key pair, copy the public key into the <span className="italic font-semibold">Public Key</span> box,
                        and then click <span className="italic font-semibold">Import Key Pair</span>.</p></li>
                      </ol>
                      <p>The Nobus store the public key of the key pair.</p>
                      <p>The console lists the key pair on the <span className="italic font-semibold">Key Pairs</span> tab.</p>
                    
                    </div>
                  
                        
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className='space-y-2'>
              
                      <h3 className="py-2 text-2xl font-semibold text-[#232f3e]">
                      Create a Virtual Network Environment
                      </h3>

                      <p>
                          You can launch Nobus resources in a predefined virtual network environment. 
                          Enabling you provision a logically isolated section of the Nobus Cloud.
                      </p>
                        <p>
                          You have complete control over your virtual networking environment, including:   
                      </p>
                        <p>
                          - Selection of your own IP address range,    
                      </p>
                      <p>
                          - Creation of subnets, and 
                      </p>
                      <p>
                          - Configuration of route tables and network gateways. 
                      </p>
                      <p>
                          - Allows bridging with an onsite IT infrastructure with an encrypted VPN (MPLS or Internet) connection with Multiple ISPs locally. 
                      </p>
              
                      
                      <p>When you create an instance, it is automatically assigned a
                        fixed IP address in the network to which the instance is attached. This
                        IP address is permanently associated with the instance until the
                        instance is terminated. 
                      </p>
                      
                      <p>
                        In addition to the fixed IP address, you can also attach a
                        floating IP address to your instance. 
                      </p>

                      <p>
                        
                        Unlike fixed IP addresses, floating IP
                        addresses can be modified at any time,
                        regardless of the instances state.
                      </p>

                    
                      <p className="font-bold text-lg py-2">To create a Virtual Network Environment</p>
                      <ol className='space-y-2 list-decimal pl-5'>
                          <li>
                            <p>Open the Nobus Virtual Network console at <a className='hover:underline' href="https://cloud.nobus.io/networks"> https://cloud.nobus.io/networks/</a>.
                            </p>
                          </li>
                          <li><p>On the <span className="italic font-semibold">Project</span> tab, open the <span className="italic font-semibold">Network</span> tab.</p></li>
                          
                          <li>
                            <p>On the Network console, choose <b>Create Network</b>.
                            </p>
                          </li>
                          <li>
                                    
                            <p><b>Step 1: Select a Network Configuration</b> page, ensure that <b>Private network with a Single Public Subnet</b> is selected, and choose <b>Select</b>.
                            </p>
                                  
                          </li>
                          <li>
                                    
                            <p><b>Step 2: Private network with a Single Public Subnet</b> page, enter a <b>Private network name</b> in the field. Leave the other
                              default configuration settings, and select <b>Create Network</b>.
                            </p>
                                  
                          </li>
                      </ol>
                            
                    </div>


                    <div className='space-y-2'>
                      <h5 className='py-2 text-lg font-bold'>Allocate a floating IP address to an instance</h5>
                      
                      <p> This procedure details the
                      reservation of a floating IP address from an existing pool of addresses
                      and the association of that address with a specific instance.</p>
                      <ol className='space-y-2 list-decimal pl-5'>
                        <li><p>On the <span className="italic font-semibold">Project</span> tab, open the <span className="italic font-semibold">Network</span> tab.</p></li>
                        <li><p>Click the <span className="italic font-semibold">Floating IPs</span> tab, which shows the floating IP
                        addresses allocated to instances.</p></li>
                        <li><p>Click <span className="italic font-semibold">Allocate IP To Project</span>.</p></li>
                        <li><p>Choose the pool from which to pick the IP address.</p></li>
                        <li><p>Click <span className="italic font-semibold">Allocate IP</span>.</p></li>
                        <li><p>In the <span className="italic font-semibold">Floating IPs</span> list, click <span className="italic font-semibold">Associate</span>.</p></li>
                        <li><p>In the <span className="italic font-semibold">Manage Floating IP Associations</span> dialog box,
                        choose the following options:</p>
                          <ul className='space-y-2 list-disc pl-5'>
                            <li><p>The <span className="italic font-semibold">IP Address</span> field is filled automatically,
                            but you can add a new IP address by clicking the
                            <span className="italic font-semibold">+</span> button.</p></li>
                            <li><p>In the <span className="italic font-semibold">Port to be associated</span> field, select a port
                            from the list.</p>
                            <p>The list shows all the instances with their fixed IP addresses.</p>
                            </li>
                          </ul>
                        </li>
                        <li><p>Click <span className="italic font-semibold">Associate</span>.</p></li>
                      </ol>
                      
                        <b>Note</b>
                        <p>To disassociate an IP address from an instance, click the
                        <span className="italic font-semibold">Disassociate</span> button.</p>
                      </div>
                      
                      <p>To release the floating IP address back into the floating IP pool, click
                      the <span className="italic font-semibold">Release Floating IP</span> option in the <span className="italic font-semibold">Actions</span> column.</p>
                     
                    
                  </Tab.Panel>
                  <Tab.Panel>
                    <h3 className="py-2 text-2xl font-semibold text-[#232f3e]">
                    Create a Security Group
                    </h3>

                    <p>Before you launch an instance, you must add rules to a security 
                      group that enable you to connect to your instance
                      from your IP address using <span>SSH</span>.  Security
                      groups are sets of IP filter rules that define networking access.
                      It Serve as firewall for your instances, controlling both inbound
                      and outbound traffic at the instance level and are
                      applied to all instances within a project. To do so, you either add
                      rules to the default security group 
                      or add a new security group with rules.</p>
                    
                    <p className="text-lg font-bold py-2">Requirements</p>
                          
                    <p> The public IPv4 address of your local computer is required. The security group editor
                        in the Nobus FCS console can automatically detect the public IPv4 address for you.
                        Alternatively, you can use the search phrase "what is my IP address" in an Internet
                        browser. 
                        
                    </p>
                    <p> You have to find out the range of IP addresses used by client computers
                        If you are connecting through an Internet service provider (ISP) or from behind
                        a firewall without a static IP address.   
                    </p>

                    
                    <h4 className='text-xl py-2 font-semibold text-[#232f3e]'>Add a rule to the default security group</h4>

                    <p>This procedure enables SSH and ICMP (ping) access to instances. The
                    rules apply to all instances within a given project and it can be modified to add additional security
                    group rules as required by you.
                    </p>

                    
                    <p className="font-bold py-2">Note</p>
                    <p>When adding a rule, you must specify the protocol used with the
                    destination port or source port.</p>
                
                    <ol className="pl-5 list-decimal space-y-2">
                    <li><p><a className='hover:underline' href="https://cloud.nobus.io/">Log in to the Nobus Cloud Console.</a></p></li>
                  
                    <li><p>On the <span className="italic font-semibold">Project</span> tab, open the <span className="italic font-semibold">Network</span> tab. The
                    <span className="italic font-semibold"> Security Groups</span> tab shows the security groups that are
                    available for this project.</p></li>
                    <li><p>Select the default security group and click <span className="italic font-semibold">Manage Rules</span>.</p></li>
                    <li><p>To allow SSH access, click <span className="italic font-semibold">Add Rule</span>.</p></li>
                    <li><p>In the <span className="italic font-semibold">Add Rule</span> dialog box, enter the following values:</p>
                    <ul className="py-2 list-outside">
                    <li><p><strong>Rule</strong>: <code className="docutils literal notranslate"><span className="pre">SSH</span></code></p></li>
                    <li><p><strong>Remote</strong>: <code className="docutils literal notranslate"><span className="pre">CIDR</span></code></p></li>
                    <li><p><strong>CIDR</strong>: <code className="docutils literal notranslate"><span className="pre">0.0.0.0/0</span></code></p></li>
                    </ul>
                    

                    <p className="font-bold py-2">Note</p>
                    <p>To accept requests from a particular range of IP
                    addresses, specify the IP address block in the
                    <span className="italic font-semibold"> CIDR</span> box.</p>
               
                    </li>
                    <li><p>Click <span className="italic font-semibold">Add</span>.</p>
                    <p>Instances will now have SSH port 22 open for requests from any IP
                    address.</p>
                    </li>
                    <li><p>To add an ICMP rule, click <span className="italic font-semibold">Add Rule</span>.</p></li>
                    <li><p>In the <span className="italic font-semibold">Add Rule</span> dialog box, enter the following values:</p>
                    <ul className="py-2 list-outside">
                    <li><p><strong>Rule</strong>: <code className="docutils literal notranslate"><span className="pre">All</span> <span className="pre">ICMP</span></code></p></li>
                    <li><p><strong>Direction</strong>: <code className="docutils literal notranslate"><span className="pre">Ingress</span></code></p></li>
                    <li><p><strong>Remote</strong>: <code className="docutils literal notranslate"><span className="pre">CIDR</span></code></p></li>
                    <li><p><strong>CIDR</strong>: <code className="docutils literal notranslate"><span className="pre">0.0.0.0/0</span></code></p></li>
                    </ul>
                    </li>
                    <li><p>Click <span className="italic font-semibold">Add</span>.</p>
                    <p>Instances will now accept all incoming ICMP packets.</p>
                    </li>
                    </ol>
                    
                    <div className="py-5">
                      <p className="py-2 font-bold">Warning</p>
                      <p> we don't recommend that you allow <span>SSH</span> access
                        from all IPv4 addresses (<code className="code">0.0.0.0/0</code>) to your instance,
                        for the purpose of safety, unless for short term testing.
                        
                      </p>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              
              </div>
            </Tab.Group>
          </div>

      </div>
  )
}
