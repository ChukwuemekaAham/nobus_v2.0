import React from 'react'
import ScriptSnippet from '../ScriptSnippet';

function Quickstart() {

  return (
    <div id='quickstart' className='py-10'>
      <h1 className='text-2xl md:text-3xl tracking-tight font-semibold pb-5'>
        Quickstart Guide
      </h1>

      <p> 
        You can set up and configure the operating system and applications that run on your instance using Nobus FCS.   
      </p>
        
      <h4 className="py-2 text-xl font-bold">Launch and Manage an Instance</h4>
      
      <h6 className="font-bold py-2">Example with <span>Linux</span> Instances</h6>
      
      <p>Ensure that you've completed the access and security configuration procedure for Nobus FCS.
      </p>

      <p>
        You can view the status of the launch. Although it take a few minute to load,
        view the status information in the <b>Status</b> column.
          
        At instance launch the initial state is <code className="text-red-400">build</code>. When you start the instance,
        it enters <code className="text-red-400">running</code> state and receives a public DNS name. 
      </p>
    
      <p className="font-bold py-2">To launch an instance using the Nobus Management Console</p>
        
      <p>
      You can launch an instance from the following sources:
      </p>

      <ul className="list-disc space-y-2 pl-5">
        <li><p>Images uploaded to the Image service.</p></li>
        <li><p>Image that you have copied to a persistent volume.</p></li>
        <li><p>Instance snapshot.</p></li>
      </ul>


      <div className='py-3' id="launch-an-instance">
        <ol className="pl-5 list-decimal space-y-2 py-2">
          <li><p> <a className='hover:underline' href="https://cloud.nobus.io/">Log in to the Nobus Management Dashboard</a></p></li>
        
          <li><p>On the <span className="italic font-semibold">Project</span> tab, open the <span className="italic font-semibold">Compute</span> tab and
          click <span className="italic font-semibold">Instances</span></p>
          <p>The dashboard shows the instances with its name, its private and
          floating IP addresses, size, status, task, power state, and so on.</p>
          </li>
          <li><p>Click <span className="italic font-semibold">Launch Instance</span>.</p></li>
          <li><p>In the <span className="italic font-semibold">Launch Instance</span> dialog box, specify the following values:</p>
                
          <p><span className="italic font-semibold">Details</span> tab</p>

          <div>

            <h6 className='font-bold py-2'>Instance Name</h6>
            <div>
              <p>Assign a name to the virtual machine.</p>
            
              <p className="py-2 font-bold">Note</p>

              <p>The name you assign here becomes the initial host name of the server.
              </p>
            </div>
              
            <h6 className='font-bold py-2'>Description</h6>
            <p>You can assign a brief description of the virtual machine.</p>
            
            <h6 className='font-bold py-2'>Availability Zone</h6>
            <div>
              <p>By default
                <code className='text-red-400'>
                  <span className="pre"> nova</span>
                </code>
              </p>
            </div>

            <h6 className='font-bold py-2'>Count</h6>
            <div>
              <p>To launch several instances, enter a value greater than <code className='text-red-400'><span className="pre"> 1</span></code> The default is <code className='text-red-400'><span className="pre"> 1</span></code></p>
            </div>
            </div>

            <p><span className="italic font-semibold">Source</span> tab</p>
            <div>
              <h6 className='font-bold py-2'>Instance Boot Source</h6>
              <div>
                <p>Your options are:</p>

                <div className="simple">
                  <h6 className='font-bold py-2'>Boot from image</h6>
                  <div><p>If you choose this option, a new field for 
                    <span className="italic font-semibold"> Image Name </span>
                    displays. You can select the image from the list.</p>
                  </div>

                  <h6 className='font-bold py-2'>Boot from snapshot</h6>
                  <div>
                    <p>If you choose this option, a new field for 
                    <span className="italic font-semibold"> Instance Snapshot</span> displays. You can select the snapshot from the list.</p>
                  </div>

                  <h6 className='font-bold py-2'>Boot from volume</h6>
                  <div><p>If you choose this option, a new field for 
                    <span className="italic font-semibold">Volume</span>
                    displays. You can select the volume from the list.</p>
                  </div>
                  
                  <h6 className='font-bold py-2'>Boot from image (creates a new volume)</h6>
                  <div>
                    <p>With this option, you can boot from an image and create a volume
                    by entering the <span className="italic font-semibold">Device Size</span> and 
                    <span className="italic font-semibold"> Device Name</span> 
                    for your volume. Click the <span className="italic font-semibold"> Delete Volume on
                    Instance Delete</span> option to delete the volume on deleting the
                    instance.
                    </p>
                  </div>

                  <h6 className='font-bold py-2'>Boot from volume snapshot (creates a new volume)</h6>
                  <div>
                    <p>Using this option, you can boot from a volume snapshot and create
                    a new volume by choosing <span className="italic font-semibold">Volume Snapshot</span> from a list
                    and Adding a <span className="italic font-semibold"> Device Name</span> for your volume. Click the
                    <span className="italic font-semibold"> Delete Volume on Instance Delete</span> option to delete the
                    volume on deleting the instance.</p>
                  </div>
                </div>
              </div>

              <h6 className='font-bold py-2'>Image Name</h6>
              <div>
                <p>This field changes based on your previous selection. If you have
                chosen to launch an instance using an image, the <span className="italic font-semibold"> Image Name </span>
                field displays. Select the image name from the dropdown list.</p>
              </div>

              <h6 className='font-bold py-2'>Instance Snapshot</h6>
              <div>
                <p>This field changes based on your previous selection. If you have
                chosen to launch an instance using a snapshot, the
                <span className="italic font-semibold"> Instance Snapshot</span> field displays.
                Select the snapshot name from the dropdown list.</p>
              </div>

              <h6 className='font-bold py-2'>Volume</h6>
              <div>
                <p>This field changes based on your previous selection. If you have
                chosen to launch an instance using a volume, the <span className="italic font-semibold"> Volume </span>
                field displays. Select the volume name from the dropdown list.
                If you want to delete the volume on instance delete,
                check the <span className="italic font-semibold"> Delete Volume on Instance Delete </span> option.</p>
              </div>
            </div>

            <p><span className="italic font-semibold">Flavor</span> tab</p>
            <div>
              <h6 className='font-bold py-2'>Flavor</h6>
              <div>
                <p>Specify the size of the instance to launch.</p>

                <p className="py-2 font-bold">Note</p>
                <p>The flavor is selected based on the size of the image selected
                for launching an instance.</p>
            
              </div>
            </div>

            <p><span className="italic font-semibold">Networks</span> tab</p>
            <div className="simple">
              <h6 className='font-bold py-2'>Selected Networks</h6>
              <div><p>To add an existing network to the instance, click the <span className="italic font-semibold">+</span> in the
              <span className="italic font-semibold"> Available </span> field.</p>
              </div>
            </div>

            <p><span className="italic font-semibold">Network Ports</span> tab</p>
            <div className="simple">
              <h6 className='font-bold py-2'>Ports</h6>
              <p>Activate the ports that you want to assign to the instance.</p>
            </div>

            <p><span className="italic font-semibold">Security Groups</span> tab</p>
            <div className="simple">
              <h6 className='font-bold py-2'>Security Groups</h6>
              <div>
                <p>Activate the security groups that you want to assign to the instance.</p>
                <p>Security groups are a kind of cloud firewall that define which
                incoming network traffic is forwarded to instances.</p>
                <p>If you have not created any security groups, you can assign
                only the default security group to the instance.</p>
              </div>
            </div>

            <p><span className="italic font-semibold">Key Pair</span> tab</p>
            <div className="simple">
              <h6 className='font-bold py-2'>Key Pair</h6>
              <div><p>Specify a key pair.</p>
              <p>When prompted for a key pair, select <b>Choose an existing key pair</b>, 
                  then select the key pair that you created when setting up.
              </p>
            
              <div>
                <p>Alternatively, you can create a new key pair or import one at launch from the instance launch window. 
                </p>

                <p>To create a new keypair, Select <b>Create a new
                    key pair</b>, enter a name for the key pair, and then choose
                    <b> Create Keypair </b>. This is the only chance for you to
                    save the private key file, so be sure to select <b> Copy private key to clipboard </b>. Open Notepad or any editor and paste.
                    Save the private key file with the (.pem) extention
                    in a safe place. <b > click "Done" </b>. Remember that you'll need to provide the name of your key pair when you
                    launch an instance and the corresponding private key each time you connect to
                    the instance.
                </p>
              </div>

              <p>
                If the image uses a static root password or a static key set
                although none is recommended by NCS, you do not need to provide a key pair
                to launch the instance.
              </p>
            </div>

          </div>
            
            <p><span className="italic font-semibold">Configuration</span> tab</p>
            
            <div className="simple">
              <h6 className='font-bold py-2'>Customization Script Source</h6>
              <div>
                <p>
                  Specify a customization script that runs after your instance
                  launches.
                </p>
              </div>

            </div>

            <p><span className="italic font-semibold">Metadata</span> tab</p>
            <div className="simple">
              <h6 className='font-bold py-2'>Available Metadata</h6>
              <div>
                <p>Add Metadata items to your instance.</p>
              </div>
            </div>

          </li>
            
          <li>
            <p>Click <span className="italic font-semibold">Launch Instance</span>.</p>
            <p>To launch your instance</p>
          </li>
        </ol>
  
        <p className="py-2 font-bold">Note</p>

        <p>
          If you did not provide a key pair, security groups, or rules, users
          can access the instance only from inside the cloud through VNC. Even
          pinging the instance is not possible without an ICMP rule configured.
        </p>
        
        <p className='py-2'>
          You can also launch an instance from the 
          <span className="italic font-semibold"> Images </span> or
          <span className="italic font-semibold"> Volumes </span> 
          when you launch an instance from an image or a volume respectively.
        </p>

        <p> 
          When you launch an instance from an image, a local
          copy of the image on the compute node where the instance starts.
        </p>

        <p className='py-2'>When you launch an instance from a volume, note the following steps:</p>
        
        <ul className='list-disc pl-5 space-y-2'>
          <li>
            <p>
              To select the volume from which to launch, launch an instance from
              an arbitrary image on the volume. The arbitrary image that you select
              does not boot. Instead, it is replaced by the image on the volume that
              you choose in the next steps.
            </p>
            <p>
              To boot a linux image from a volume, the image you launch in must be
              the same type, fully virtualized or paravirtualized, as the one on
              the volume.
            </p>
          </li>
          <li>
            <p>Select the volume or volume snapshot from which to boot. Enter a
            device name. Enter <code className='text-red-400'><span className="pre">vda</span></code> 
            for KVM images or <code className='text-red-400'><span className="pre">xvda</span></code> for Xen images.
            </p>
          </li>
        </ul>
      
      </div>
        
      <div className='py-3' id="connect-to-your-instance-by-using-ssh">
        <h5 className='py-2 font-bold text-lg'>Connect to your instance by using SSH</h5>
        <p>To use SSH to connect to your instance, use the downloaded keypair
          file.
        </p>
        <p className="font-bold py-2">Note</p>
        <p>You can't connect to your instance unless you launched it with a key pair for
            which you have the <code className='text-red-400'>.pem</code> file and you launched it with a 
            security group that allows SSH access from your computer. 
        </p>

        <ol className="pl-5 list-decimal space-y-2 py-2">
          <li><p>Copy the IP address for your instance.</p></li>
          <li>
            <p>
              Use the <strong className="command">ssh</strong> command to make a secure connection to the instance.
              For example:
            </p>
           
            <ScriptSnippet script="$ssh -i MyKey.pem ubuntu@10.0.0.2" language="bash" />
           
          </li>
          <li>
            <p>At the prompt, type <code className='text-red-400'><span className="pre">yes</span></code>.
            </p>
          </li>
        </ol>

        <p>
          It is also possible to SSH into an instance without a SSH keypair, 
          with your root password. See <a className='hover:underline'  href="#">Adding SSH Keys</a> for comprehensive documentation on ssh.
        </p>
      </div>
        
      <div className='py-3' id="track-usage-for-instances">
        <h5 className='py-2 font-bold text-lg'>Track usage for instances </h5>

        <p>
          You can track usage for instances for each project. You can track costs
          per month by showing meters like number of vCPUs, disks, RAM, and
          uptime for all your instances.
        </p>
        <ol className="pl-5 list-decimal space-y-2 py-2 simple">
          <li><p>Log in to the dashboard.</p></li>
        
          <li><p>On the <span className="italic font-semibold">Project</span> tab, open the <span className="italic font-semibold">Compute</span> tab and
          click <span className="italic font-semibold">Overview</span> </p></li>
          <li><p>To query the instance usage for a month, select a month and click
          <span className="italic font-semibold"> Submit </span>.</p></li>
          <li><p>To download a summary, click <span className="italic font-semibold">Download CSV Summary</span>.</p></li>
        </ol>
      </div>

      <div className='py-3' id="create-an-instance-snapshot">
        <h5 className='py-2 font-bold text-lg'>Create an instance snapshot</h5>

        <ol className="pl-5 list-decimal space-y-2 py-2">
          <li><p>Log in to the dashboard.</p></li>
        
          <li><p>On the <span className="italic font-semibold">Project</span> tab, open the <span className="italic font-semibold">Compute</span> tab and
          click the <span className="italic font-semibold">Instances</span> category.</p></li>
          <li><p>Select the instance from which to create a snapshot.</p></li>
          <li><p>In the actions column, click <span className="italic font-semibold">Create Snapshot</span>.</p></li>
          <li><p>In the <span className="italic font-semibold">Create Snapshot</span> dialog box, enter a name for the
          snapshot, and click <span className="italic font-semibold">Create Snapshot</span>.</p>
          <p>The <span className="italic font-semibold">Images</span> category shows the instance snapshot.</p>
          </li>
        </ol>

        <p>To launch an instance from the snapshot, select the snapshot and click
        <span className="italic font-semibold">Launch</span>. Proceed with launching an instance.</p>
      </div>

      <div className='py-3' id="manage-an-instance">
        <h5 className='py-2 font-bold text-lg'>Manage an instance</h5>
        <ol className="pl-5 list-decimal space-y-2 py-2">
          <li><p>Log in to the dashboard.</p></li>
        
          <li><p>On the <span className="italic font-semibold">Project</span> tab, open the <span className="italic font-semibold">Compute</span> tab and
          click <span className="italic font-semibold">Instances</span> category.</p></li>
          <li><p>Select an instance.</p></li>
          <li><p>In the menu list in the actions column, select the state.</p>
          <p>You can resize or rebuild an instance. You can also choose to view
          the instance console log, edit instance or the security groups.
          Depending on the current state of the instance, you can pause,
          resume, suspend, soft or hard reboot, or terminate it.</p>
          </li>
        </ol>
      </div>
   
      <p>
        See <a className='hover:underline' href="#">Launching an Instance</a> to explore advanced options.
      </p>
    </div>
   
           
  )
}

export default Quickstart