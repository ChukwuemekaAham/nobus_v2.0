import React from 'react'
import ScriptSnippet from '../ScriptSnippet';

function Quickstart() {

  return (
    <div id="quickstart" className="py-10">
      <h2 className="pb-5">Quickstart Guide</h2>

      <p>
        You can set up and configure the operating system and applications that
        run on your instance using Nobus FCS.
      </p>

      <h4 className="py-2">Launch and Manage an Instance</h4>

      <h6>
        Example with <span className="step-item">Linux</span> Instances
      </h6>

      <p>
        Ensure that you've completed the access and security configuration
        procedure for Nobus FCS.
      </p>

      <p>
        You can view the status of the launch. Although it take a few minute to
        load, view the status information in the{" "}
        <span className="step-item">Status</span> column. At instance launch the
        initial state is <code className="code">build</code>. When you start the
        instance, it enters <code className="code">running</code> state and
        receives a public DNS name.
      </p>

      <p className="font-semibold py-2">
        To launch an instance using the Nobus Management Console
      </p>

      <p>You can launch an instance from the following sources:</p>

      <ul className="list-disc space-y-2 pl-5">
        <li>
          <p>Images uploaded to the Image service.</p>
        </li>
        <li>
          <p>Image that you have copied to a persistent volume.</p>
        </li>
        <li>
          <p>Instance snapshot.</p>
        </li>
      </ul>

      <div className="py-3" id="launch-an-instance">
        <ol>
          <li>
            <p>
              {" "}
              <a href="https://cloud.nobus.io/">
                Log in to the Nobus Management Dashboard
              </a>
            </p>
          </li>

          <li>
            <p>
              On the <span className="step-item">Project</span> tab, open the{" "}
              <span className="step-item">Compute</span> tab and click{" "}
              <span className="step-item">Instances</span>
            </p>
            <p>
              The dashboard shows the instances with its name, its private and
              floating IP addresses, size, status, task, power state, and so on.
            </p>
          </li>
          <li>
            <p>
              Click <span className="step-item">Launch Instance</span>.
            </p>
          </li>
          <li>
            <p>
              In the <span className="step-item">Launch Instance</span> dialog
              box, specify the following values:
            </p>

            <p>
              <span className="step-item">Details</span> tab
            </p>

            <div>
              <h6>Instance Name</h6>
              <div>
                <p>Assign a name to the virtual machine.</p>
                <div className="border-l-2 border-l-blue-500 bg-blue-100 p-2 my-2 rounded-md mr-auto max-w-md text-justify">
                  <span className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-6 w-6 text-blue-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                        clipRule="evenodd"
                      />
                    </svg>{" "}
                    <span className="font-mono font-semibold text-blue-600 pl-2">
                      Note:
                    </span>{" "}
                  </span>
                  <p className="text-sm pt-2 px-2">
                    The name you assign here becomes the initial host name of
                    the server.
                  </p>
                </div>
              </div>

              <h6>Description</h6>
              <p>You can assign a brief description of the virtual machine.</p>

              <h6>Availability Zone</h6>
              <div>
                <p>
                  By default <code className="code">nova</code>
                </p>
              </div>

              <h6>Count</h6>
              <div>
                <p>
                  To launch several instances, enter a value greater than{" "}
                  <code className="code">
                    <span className="pre"> 1</span>
                  </code>{" "}
                  The default is{" "}
                  <code className="code">
                    <span className="pre"> 1</span>
                  </code>
                </p>
              </div>
            </div>

            <p>
              <span className="step-item">Source</span> tab
            </p>
            <div>
              <h6>Instance Boot Source</h6>
              <div>
                <p>Your options are:</p>

                <div>
                  <h6>Boot from image</h6>
                  <div>
                    <p>
                      If you choose this option, a new field for
                      <span className="step-item"> Image Name </span>
                      displays. You can select the image from the list.
                    </p>
                  </div>

                  <h6>Boot from snapshot</h6>
                  <div>
                    <p>
                      If you choose this option, a new field for
                      <span className="step-item"> Instance Snapshot</span>{" "}
                      displays. You can select the snapshot from the list.
                    </p>
                  </div>

                  <h6>Boot from volume</h6>
                  <div>
                    <p>
                      If you choose this option, a new field for
                      <span className="step-item">Volume</span>
                      displays. You can select the volume from the list.
                    </p>
                  </div>

                  <h6>Boot from image (creates a new volume)</h6>
                  <div>
                    <p>
                      With this option, you can boot from an image and create a
                      volume by entering the{" "}
                      <span className="step-item">Device Size</span> and
                      <span className="step-item"> Device Name</span>
                      for your volume. Click the{" "}
                      <span className="step-item">
                        {" "}
                        Delete Volume on Instance Delete
                      </span>{" "}
                      option to delete the volume on deleting the instance.
                    </p>
                  </div>

                  <h6>Boot from volume snapshot (creates a new volume)</h6>
                  <div>
                    <p>
                      Using this option, you can boot from a volume snapshot and
                      create a new volume by choosing{" "}
                      <span className="step-item">Volume Snapshot</span> from a
                      list and Adding a{" "}
                      <span className="step-item"> Device Name</span> for your
                      volume. Click the
                      <span className="step-item">
                        {" "}
                        Delete Volume on Instance Delete
                      </span>{" "}
                      option to delete the volume on deleting the instance.
                    </p>
                  </div>
                </div>
              </div>

              <h6>Image Name</h6>
              <div>
                <p>
                  This field changes based on your previous selection. If you
                  have chosen to launch an instance using an image, the{" "}
                  <span className="step-item"> Image Name </span>
                  field displays. Select the image name from the dropdown list.
                </p>
              </div>

              <h6>Instance Snapshot</h6>
              <div>
                <p>
                  This field changes based on your previous selection. If you
                  have chosen to launch an instance using a snapshot, the
                  <span className="step-item"> Instance Snapshot</span> field
                  displays. Select the snapshot name from the dropdown list.
                </p>
              </div>

              <h6>Volume</h6>
              <div>
                <p>
                  This field changes based on your previous selection. If you
                  have chosen to launch an instance using a volume, the{" "}
                  <span className="step-item"> Volume </span>
                  field displays. Select the volume name from the dropdown list.
                  If you want to delete the volume on instance delete, check the{" "}
                  <span className="step-item">
                    {" "}
                    Delete Volume on Instance Delete{" "}
                  </span>{" "}
                  option.
                </p>
              </div>
            </div>

            <p>
              <span className="step-item">Flavor</span> tab
            </p>
            <div>
              <h6>Flavor</h6>
              <div>
                <p>Specify the size of the instance to launch.</p>

                <p className="py-2 font-semibold">Note</p>
                <p>
                  The flavor is selected based on the size of the image selected
                  for launching an instance.
                </p>
              </div>
            </div>

            <p>
              <span className="step-item">Networks</span> tab
            </p>
            <div>
              <h6>Selected Networks</h6>
              <div>
                <p>
                  To add an existing network to the instance, click the{" "}
                  <span className="step-item">+</span> in the
                  <span className="step-item"> Available </span> field.
                </p>
              </div>
            </div>

            <p>
              <span className="step-item">Network Ports</span> tab
            </p>
            <div>
              <h6>Ports</h6>
              <p>Activate the ports that you want to assign to the instance.</p>
            </div>

            <p>
              <span className="step-item">Security Groups</span> tab
            </p>
            <div>
              <h6>Security Groups</h6>
              <div>
                <p>
                  Activate the security groups that you want to assign to the
                  instance.
                </p>
                <p>
                  Security groups are a kind of cloud firewall that define which
                  incoming network traffic is forwarded to instances.
                </p>
                <p>
                  If you have not created any security groups, you can assign
                  only the default security group to the instance.
                </p>
              </div>
            </div>

            <p>
              <span className="step-item">Key Pair</span> tab
            </p>
            <div>
              <h6>Key Pair</h6>
              <div>
                <p>Specify a key pair.</p>
                <p>
                  When prompted for a key pair, select{" "}
                  <span className="step-item">Choose an existing key pair</span>
                  , then select the key pair that you created when setting up.
                </p>

                <div>
                  <p>
                    Alternatively, you can create a new key pair or import one
                    at launch from the instance launch window.
                  </p>

                  <p>
                    To create a new keypair, Select{" "}
                    <span className="step-item">Create a new key pair</span>,
                    enter a name for the key pair, and then choose
                    <span className="step-item"> Create Keypair </span>. This is
                    the only chance for you to save the private key file, so be
                    sure to select{" "}
                    <span className="step-item">
                      {" "}
                      Copy private key to clipboard{" "}
                    </span>
                    . Open Notepad or any editor and paste. Save the private key
                    file with the (.pem) extention in a safe place.{" "}
                    <span className="step-item"> click "Done" </span>. Remember
                    that you'll need to provide the name of your key pair when
                    you launch an instance and the corresponding private key
                    each time you connect to the instance.
                  </p>
                </div>

                <p>
                  If the image uses a static root password or a static key set
                  although none is recommended by NCS, you do not need to
                  provide a key pair to launch the instance.
                </p>
              </div>
            </div>

            <p>
              <span className="step-item">Configuration</span> tab
            </p>

            <div>
              <h6>Customization Script Source</h6>
              <div>
                <p>
                  Specify a customization script that runs after your instance
                  launches.
                </p>
              </div>
            </div>

            <p>
              <span className="step-item">Metadata</span> tab
            </p>
            <div>
              <h6>Available Metadata</h6>
              <div>
                <p>Add Metadata items to your instance.</p>
              </div>
            </div>
          </li>

          <li>
            <p>
              Click <span className="step-item">Launch Instance</span>.
            </p>
            <p>To launch your instance</p>
          </li>
        </ol>
        <div className="my-5 border-l-2 border-l-blue-500 bg-blue-100 p-2 rounded-md mr-auto max-w-md text-justify">
          <span className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 text-blue-600"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                clipRule="evenodd"
              />
            </svg>{" "}
            <span className="font-mono font-semibold text-blue-600 pl-2">
              Note:
            </span>{" "}
          </span>
          <p className="text-sm pt-2 px-2">
            If you did not provide a key pair, security groups, or rules, users
            can access the instance only from inside the cloud through VNC. Even
            pinging the instance is not possible without an ICMP rule
            configured.
          </p>
        </div>

        <p className="py-2">
          You can also launch an instance from the
          <span className="step-item"> Images </span> or
          <span className="step-item"> Volumes </span>
          when you launch an instance from an image or a volume respectively.
        </p>

        <p>
          When you launch an instance from an image, a local copy of the image
          on the compute node where the instance starts.
        </p>

        <p className="py-2">
          When you launch an instance from a volume, note the following steps:
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <p>
              To select the volume from which to launch, launch an instance from
              an arbitrary image on the volume. The arbitrary image that you
              select does not boot. Instead, it is replaced by the image on the
              volume that you choose in the next steps.
            </p>
            <p>
              To boot a linux image from a volume, the image you launch in must
              be the same type, fully virtualized or paravirtualized, as the one
              on the volume.
            </p>
          </li>
          <li>
            <p>
              Select the volume or volume snapshot from which to boot. Enter a
              device name. Enter{" "}
              <code className="code">
                <span className="pre">vda</span>
              </code>
              for KVM images or{" "}
              <code className="code">
                <span className="pre">xvda</span>
              </code>{" "}
              for Xen images.
            </p>
          </li>
        </ul>
      </div>

      <div className="py-3" id="connect-to-your-instance-by-using-ssh">
        <h5 className="py-2 font-semibold text-lg">
          Connect to your instance by using SSH
        </h5>
        <p>
          To use SSH to connect to your instance, use the downloaded keypair
          file.
        </p>

        <div className="mt-5 border-l-2 border-l-red-500 bg-red-100 p-2 rounded-md mr-auto max-w-md text-justify">
          <span className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 text-red-600"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                clipRule="evenodd"
              />
            </svg>{" "}
            <span className="font-mono font-semibold text-red-600 pl-2">
              Warning:
            </span>{" "}
          </span>
          <p className="text-sm pt-2 px-2">
            You can't connect to your instance unless you jave launch it with a
            key pair for which you have the <code className="code">.pem</code>{" "}
            file. You must also attach a security group that allows SSH access
            from whitelisted IP Address(es).
          </p>
        </div>
        <p className="my-5">
          See <a href="#">Connecting to Your FCS Instance</a> for a
          comprehensive documentation.
        </p>

        <ol>
          <li>
            <p>Copy the IP address for your instance.</p>
          </li>
          <li>
            <p>
              Use the <strong className="command">ssh</strong> command to make a
              secure connection to the instance. For example:
            </p>

            <ScriptSnippet
              script="$ssh -i ~/path/to/Key.pem ubuntu@10.0.0.2"
              language="bash"
            />
          </li>
          <li>
            <p>
              At the prompt, type{" "}
              <code className="code">
                <span className="pre">yes</span>
              </code>
              .
            </p>
          </li>
        </ol>
      </div>

      <div className="py-3" id="track-usage-for-instances">
        <h5 className="py-2 font-semibold text-lg">
          Track usage for instances{" "}
        </h5>

        <p>
          You can track usage for instances for each project. You can track
          costs per month by showing meters like number of vCPUs, disks, RAM,
          and uptime for all your instances.
        </p>
        <ol className="pl-5 list-decimal space-y-2 py-2 simple">
          <li>
            <p>Log in to the dashboard.</p>
          </li>

          <li>
            <p>
              On the <span className="step-item">Project</span> tab, open the{" "}
              <span className="step-item">Compute</span> tab and click{" "}
              <span className="step-item">Overview</span>{" "}
            </p>
          </li>
          <li>
            <p>
              To query the instance usage for a month, select a month and click
              <span className="step-item"> Submit </span>.
            </p>
          </li>
          <li>
            <p>
              To download a summary, click{" "}
              <span className="step-item">Download CSV Summary</span>.
            </p>
          </li>
        </ol>
      </div>

      <div className="py-3" id="create-an-instance-snapshot">
        <h5 className="py-2 font-semibold text-lg">
          Create an instance snapshot
        </h5>

        <ol>
          <li>
            <p>Log in to the dashboard.</p>
          </li>

          <li>
            <p>
              On the <span className="step-item">Project</span> tab, open the{" "}
              <span className="step-item">Compute</span> tab and click the{" "}
              <span className="step-item">Instances</span> category.
            </p>
          </li>
          <li>
            <p>Select the instance from which to create a snapshot.</p>
          </li>
          <li>
            <p>
              In the actions column, click{" "}
              <span className="step-item">Create Snapshot</span>.
            </p>
          </li>
          <li>
            <p>
              In the <span className="step-item">Create Snapshot</span> dialog
              box, enter a name for the snapshot, and click{" "}
              <span className="step-item">Create Snapshot</span>.
            </p>
            <p>
              The <span className="step-item">Images</span> category shows the
              instance snapshot.
            </p>
          </li>
        </ol>

        <p>
          To launch an instance from the snapshot, select the snapshot and click
          <span className="step-item">Launch</span>. Proceed with launching an
          instance.
        </p>
      </div>

      <div className="py-3" id="manage-an-instance">
        <h5 className="py-2 font-semibold text-lg">Manage an instance</h5>
        <ol>
          <li>
            <p>Log in to the dashboard.</p>
          </li>

          <li>
            <p>
              On the <span className="step-item">Project</span> tab, open the{" "}
              <span className="step-item">Compute</span> tab and click{" "}
              <span className="step-item">Instances</span> category.
            </p>
          </li>
          <li>
            <p>Select an instance.</p>
          </li>
          <li>
            <p>In the menu list in the actions column, select the state.</p>
            <p>
              You can resize or rebuild an instance. You can also choose to view
              the instance console log, edit instance or the security groups.
              Depending on the current state of the instance, you can pause,
              resume, suspend, soft or hard reboot, or terminate it.
            </p>
          </li>
        </ol>
      </div>

      <p>
        See <a href="#">Launching an Instance</a> to explore advanced options.
      </p>
    </div>
  );
}

export default Quickstart