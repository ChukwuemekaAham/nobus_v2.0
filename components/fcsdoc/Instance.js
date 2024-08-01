import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Instance() {
  const categories = [
    "Types of Instance",
    "Instance Purchasing Options",
    "Instance Routine and Billing",
  ];

  return (
    <div id="instance" className="py-10">
      <h2 className="pb-5">Instance</h2>

      <p>
        Nobus FCS provides several flavors to enable you to select the CPU,
        memory, storage, and networking capacity required by your workload. Each
        instance is backed by Nobus FBS or Instance store.
      </p>

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
          Nobus FCS Instance is Pre-Billed at any given time.
        </p>
      </div>

      <h4 class="py-5">Launching an Instance Options</h4>
      <div class="pt-4 overflow-x-auto">
        <table class="w-full text-left table-auto">
          <thead>
            <tr class="bg-gray-200">
              <th class="px-4 py-2">Field Name</th>
              <th class="px-4 py-2">Required</th>
              <th class="px-4 py-2">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="px-4 py-2 font-semibold">Instance Name</td>
              <td class="px-4 py-2">Required</td>
              <td class="px-4 py-2">
                The name of the new instance, which becomes the initial host
                name of the server. If the server name is changed in the API or
                directly changed, the Dashboard names remain unchanged
              </td>
            </tr>
            <tr class="border-b">
              <td class="px-4 py-2 font-semibold">Availability Zone</td>
              <td class="px-4 py-2">Required</td>
              <td class="px-4 py-2">
                The availability zone in which the image service creates the
                instance. Default availability zone is Nova.
              </td>
            </tr>
            <tr class="border-b">
              <td class="px-4 py-2 font-semibold">Image</td>
              <td class="px-4 py-2">Required</td>
              <td class="px-4 py-2">Select a Nobus Machine Image</td>
            </tr>
            <tr class="border-b">
              <td class="px-4 py-2 font-semibold">Flavor</td>
              <td class="px-4 py-2">Required</td>
              <td class="px-4 py-2">
                The vCPU, Memory, and Disk configuration. Select from the list
                of available flavors.
              </td>
            </tr>
            <tr class="border-b">
              <td class="px-4 py-2 font-semibold">Instance Count</td>
              <td class="px-4 py-2">Required</td>
              <td class="px-4 py-2">
                If creating multiple instances with this configuration, enter an
                integer up to the number permitted by the quota, which is{" "}
                <code class="inline-code">10</code> by default.
              </td>
            </tr>
            <tr class="border-b">
              <td class="px-4 py-2 font-semibold">Instance Boot Source</td>
              <td class="px-4 py-2">Required</td>
              <td class="px-4 py-2">
                Specify whether the instance will be based on an image or a
                snapshot. If it is the first time creating an instance, there
                will not yet be any snapshots available.
              </td>
            </tr>
            <tr class="border-b">
              <td class="px-4 py-2 font-semibold">Image Name</td>
              <td class="px-4 py-2">Required</td>
              <td class="px-4 py-2">
                The instance will boot from the selected image. This option will
                be pre-populated with the instance selected from the table.
                However, choose{" "}
                <code class="inline-code">Boot from Snapshot</code> in{" "}
                <strong>Instance Boot Source</strong>, and it will default to{" "}
                <code class="inline-code">Snapshot</code> instead.
              </td>
            </tr>
            <tr class="border-b">
              <td class="px-4 py-2 font-semibold">Security Groups</td>
              <td class="px-4 py-2">Optional</td>
              <td class="px-4 py-2">
                This option assigns security groups to an instance. The default
                security group activates you do not specify a customized group.
                Security Groups, similar to a cloud firewall, define which
                incoming network traffic enters or leaves an instance.
              </td>
            </tr>
            <tr class="border-b">
              <td class="px-4 py-2 font-semibold">Keypair</td>
              <td class="px-4 py-2">Optional</td>
              <td class="px-4 py-2">
                Choose a key pair with this option. You can assign a single
                keypair to several instances. You can also create your own
                keypair if none is available.
              </td>
            </tr>
            <tr class="border-b">
              <td class="px-4 py-2 font-semibold">Selected Networks</td>
              <td class="px-4 py-2">Optional</td>
              <td class="px-4 py-2">
                To add a network to an instance, click the <strong>+</strong> in
                the <strong>Networks field</strong>.
              </td>
            </tr>
            <tr class="border-b">
              <td class="px-4 py-2 font-semibold">Customization Script</td>
              <td class="px-4 py-2">Optional</td>
              <td class="px-4 py-2">
                Specify a customization script. This script runs after the
                instance launches and becomes active.
              </td>
            </tr>
          </tbody>
        </table>

        <p className="my-5">
          See <a href="/documentation/fcs#quickstart">FCS Quickstart</a> for
          details on how to launch an instance
        </p>
      </div>
      <div className="w-full px-2 py-16 sm:px-0">
        <Tab.Group vertical>
          <div className="grid grid-cols-1">
            <Tab.List className="flex-col max-w-sm rounded-xl bg-gray-100">
              <h2 className="py-2 pl-2 text-2xl font-semibold text-[#232f3e]">
                TOPICS
              </h2>
              {categories.map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 pl-2 text-md text-left font-medium leading-5",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none",
                      selected
                        ? "bg-white text-blue-500 shadow"
                        : "text-gray-800 hover:bg-white/[0.12] hover:text-gray-400"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels className="flex-col py-10">
              <Tab.Panel>
                <div className="space-y-5">
                  <h3>Types of Instance</h3>
                  <div>
                    <h5>Standard Instance Linux/Unix and Windows</h5>

                    <p>
                      Standard instances provide a balance of compute, memory,
                      and networking resources, and can be used for a variety of
                      workloads.
                    </p>
                    <div className="space-y-5 mt-5">
                      <p>
                        <span className="step-item">
                          si.1.2.30.l, si.2.2.30.l, si.2.4.6.30.l, si.2.8.30.l,
                          si.2.2.50.w, si.2.4.50.w, si.2.4.6.50.w, si.2.8.50.w{" "}
                        </span>{" "}
                        instances are ideally suited for scale-out workloads
                        that are supported by the Arm ecosystem. These instances
                        are well-suited for the following applications:
                      </p>

                      <ul>
                        <li>
                          <p>Web servers</p>
                        </li>
                        <li>
                          <p>Containerized microservices</p>
                        </li>
                        <li>
                          <p>Caching fleets</p>
                        </li>
                        <li>
                          <p>Distributed data stores</p>
                        </li>
                        <li>
                          <p>
                            Applications that require the Arm instruction set
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-5 mt-5">
                      <p>
                        <span className="step-item">
                          si.4.4.30.l, si.4.6.30.l, si.4.16.30.l, si.4.24.30.l,
                          si.4.32.30.l, si.4.4.50.w, si.4.6.50.w, si.4.12.50.w,
                          si.4.16.50.w, si.4.24.50.w, and si.4.32.50.w{" "}
                        </span>{" "}
                        instances provide an ideal cloud infrastructure,
                        offering a balance of compute, memory, and networking
                        resources for a broad range of applications that are
                        deployed in the cloud. well-suited for the following
                        applications:
                      </p>

                      <ul>
                        <li>
                          <p>Web and application servers</p>
                        </li>
                        <li>
                          <p>Small and medium databases</p>
                        </li>

                        <li>
                          <p>Caching fleets</p>
                        </li>
                        <li>
                          <p>
                            Running backend servers for SAP, Microsoft
                            SharePoint, cluster computing, and other enterprise
                            applications
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-5 mt-5">
                      <p>
                        {" "}
                        <span className="step-item">
                          si.8.16.30.l, si.8.24.30.l, si.8.32.30.l,
                          si.8.16.50.w, si.8.24.50.w and si.8.32.50.w
                        </span>{" "}
                        instances provide your applications with direct access
                        to physical resources of the host server, such as
                        processors and memory. These instances are well suited
                        for the following:
                      </p>

                      <ul>
                        <li>
                          Workloads that require access to low-level hardware
                          features that are not available or fully supported in
                          virtualized environments
                        </li>
                        <li>
                          Applications that require a non-virtualized
                          environment for licensing or support
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-5 mt-5">
                      <p>
                        <span className="step-item">
                          si.8.64.30.l, si.16.64.30.l, si.8.64.50.w and
                          si.16.64.50.w{" "}
                        </span>{" "}
                        instances provide a baseline level of CPU performance
                        with the ability to burst to a higher level when
                        required by your workload. An Unlimited instance can
                        sustain high CPU performance for any period of time
                        whenever required. For more information, see These
                        instances are well-suited for the following
                        applications:
                      </p>

                      <ul>
                        <li>Websites and web applications</li>
                        <li>Code repositories</li>
                        <li>
                          Development, build, test, and staging environments
                        </li>
                        <li>Microservices</li>
                      </ul>
                    </div>

                    <p className="mt-5">
                      For advance information about the hardware specifications
                      for each Nobus FCS instance type, see{" "}
                      <a href="#">Nobus FCS Instance Types</a>.
                    </p>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div>
                  <h3>Purchasing Options for Instance</h3>
                  <div className="space-y-5">
                    <p>
                      Nobus FCS provides the two purchasing options to suite the
                      needs of your workload.
                    </p>
                    <ul>
                      <li>
                        On-Demand Instances let you pay for compute capacity by
                        the hour with no long-term commitments.
                      </li>
                      <li>
                        Reserved Instances give you the option to make a low,
                        one-time payment for each instance you want to reserve
                        and in turn receive a significant discount on the
                        hourlychargeforthatinstance.
                      </li>
                    </ul>
                    <p>
                      See <a href="#">Nobus FCS Pricing</a> for more information
                    </p>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="space-y-5">
                  <h3>Instance Billing</h3>
                  <div>
                    <p>
                      Nobus adopts a Pre-Billing System of two major components,
                      billed as low as N293.00 Naira/ daily. Recommended for:
                    </p>
                    <ul>
                      <li>
                        Users that prefer the low cost and flexibility of Nobus
                        FCS without any up-front payment or long-term commitment
                      </li>
                      <li>
                        Users with urgent computing needs for large amounts of
                        additional capacity
                      </li>
                      <li>
                        Applications with short-term or unpredictable workloads
                        that cannot be interrupted
                      </li>
                      <li>
                        Applications that have flexible start and end times
                      </li>
                      <li>
                        Applications being developed or tested on Nobus FCS for
                        the first time.
                      </li>
                    </ul>

                    <div className="space-y-5 mt-5">
                      <h4>Cycle Billing</h4>
                      <p>
                        Customers pay for all the resources in use at the
                        beginning of the cycle. You pay for compute capacity by
                        the number of days in the billing period depending on
                        which instances you run. No upfront payments or
                        commitments are needed. You can increase or decrease
                        your compute capacity depending on the needs of your
                        application
                      </p>
                    </div>
                    <div className="space-y-5 mt-5">
                      <h4>Auto Billing</h4>
                      <p>
                        User pays for any instance running from the time/date it
                        was spun up to the next billing cycle. Daily usage
                        amount between the spin-up date and the next billing
                        date are accounted for.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <h3>Instance Routine</h3>
                    <p>
                      An instance is governed by a routine; starts at launch
                      time and ends on termination. The routine is affected by
                      the billing option selected by you. When you launch an
                      instance, as soon as the status of an instance changes to{" "}
                      <code class="code">running</code> you start incurring
                      charges for that instance. See{" "}
                      <a href="#"> FCS Instance pricing</a> for more details
                    </p>

                    <p>
                      When you don't need an instance you can terminate it. As
                      soon as the status of an instance changes to{" "}
                      <code class="code">shut-down</code> you stop incurring
                      charges for that instance.
                    </p>

                    <p>
                      When your instance transition from{" "}
                      <code class="code">build</code> to{" "}
                      <code class="code">running</code> state, you can connect
                      to the running instance and use it the way that you'd use
                      any physical computer. Rebooting an instance will not
                      start a new instance billing cycle since the instance is
                      still running.
                    </p>
                    <p>
                      The table below shows instance status and indicates if it
                      is billed or not.
                    </p>
                  </div>
                  <div className="space-y-5">
                    <h5 id="instance-shut off-start">
                      Instance Shut off and Start (Nobus FBS-Backed Instances
                      Only)
                    </h5>

                    <p>
                      If your instance fails a status check or is not running
                      your applications as expected, and if the root volume of
                      your instance is a NobusFBS volume, you can shut off and
                      start your instance to try to fix the problem.
                    </p>

                    <p>
                      When you shut off your instance (
                      <code class="code">shut down</code> state), Nobus don't
                      charge usage or data transfer fees. Modifications can be
                      made to a shut down instance. Note that storage for any
                      NobusFBS volumes is billed for.
                    </p>

                    <p>
                      When you start your instance, it enters the{" "}
                      <code class="code">build</code> state, and in most cases,
                      we move the instance to a new host computer. (Your
                      instance may stay on the same host computer if there are
                      no problems with the host computer.) When you shut off and
                      start your instance, you lose any data on the instance
                      store volumes on the previous host computer.
                    </p>

                    <p>
                      Your instance retains its private IPv4 address, which
                      means that a Flexible IP address associated with the
                      private IPv4 address or network interface is still
                      associated with your instance. If your instance has an
                      IPv6 address, it retains its IPv6 address.
                    </p>

                    <p>
                      Anytime instance transition from{" "}
                      <code class="code">shut down</code> to{" "}
                      <code class="code">running</code> status, we charge{" "}
                      <span>
                        per second when the instance is running, with a minimum
                        of one minute every time you restart your instance.
                      </span>
                    </p>

                    <p>Follow the steps below to shut off an instance</p>

                    <p>
                      <ol>
                        <li>
                          <p>
                            <a href="https://cloud.nobus.io/">
                              Log in to the Nobus Management dashboard.
                            </a>
                          </p>
                        </li>

                        <li>
                          <p>
                            On the <span class="step-item">Project</span> tab,
                            open the <span class="step-item">Compute</span> tab.
                          </p>
                        </li>

                        <li>
                          <p>
                            Click the <span class="step-item">Instances</span>{" "}
                            tab, which shows the available list.
                          </p>
                        </li>

                        <li>
                          <p>
                            Select the checkbox for the instance that you want
                            to reboot
                          </p>
                        </li>

                        <li>
                          <p>
                            Click More Action select box on the toolbar seen
                            above-right of the list of instances.
                          </p>
                        </li>

                        <li>
                          <p>
                            Select{" "}
                            <span className="step-item">Shut off Instance</span>
                            .
                          </p>
                        </li>

                        <li>
                          <p>Confirmation wizard pops up</p>
                        </li>

                        <li>
                          <p>
                            Click{" "}
                            <span className="step-item">Shut off Instance</span>
                            .
                          </p>
                        </li>
                      </ol>
                    </p>

                    <p>
                      shut down instance can be started by clicking on{" "}
                      <span className="step-item">Start Instance</span> see
                      below
                    </p>

                    <ol>
                      <li>
                        <p>
                          Select the checkbox for the instance that you want to
                          restart
                        </p>
                      </li>

                      <li>
                        <p>
                          Click More Action select box dropdow-toggle on the
                          toolbar seen above-right of the list of instances.
                        </p>
                      </li>

                      <li>
                        <p>
                          Select{" "}
                          <span className="step-item">Start Instance</span>.
                        </p>
                      </li>
                    </ol>

                    <h4>Pause Instance</h4>

                    <p>
                      The entire state of the instance is kept in{" "}
                      <span className="step-item">RAM</span> when an instance is{" "}
                      <span className="step-item">paused</span>. Pausing an
                      instance will disable access to that instance, but won't
                      free up any resources attached to it.
                    </p>

                    <p>
                      Your instance retains its private IPv4 or IPv6 address,
                      which means that a Flexible IP address associated with the
                      private IPv4 or IPv6 address or network interface is still
                      associated with your instance.
                    </p>

                    <p>Follow the steps below to pause an instance</p>

                    <p>
                      <ol>
                        <li>
                          <p>
                            <a href="https://cloud.nobus.io/">
                              Log in to the Nobus Management dashboard.
                            </a>
                          </p>
                        </li>

                        <li>
                          <p>
                            On the <span class="step-item">Project</span> tab,
                            open the <span class="step-item">Compute</span> tab.
                          </p>
                        </li>
                        <li>
                          <p>
                            Click the <span class="step-item">Instances</span>{" "}
                            tab, which shows the available list.
                          </p>
                        </li>

                        <li>
                          <p>
                            Note the Instance you want to pause from the list of
                            available instances
                          </p>
                        </li>
                        <li>Beneath Actions</li>

                        <li>
                          <p>Click on the select box dropdown-toggle icon.</p>
                        </li>

                        <li>
                          <p>
                            Select{" "}
                            <span className="step-item">Pause Instance</span>.
                          </p>
                        </li>

                        <li>
                          <p>
                            Your instance enters the{" "}
                            <span className="code">Paused</span> state.
                          </p>
                        </li>
                      </ol>
                    </p>

                    <p>
                      To resume a paused instance see <b>resume instance</b>{" "}
                      below
                    </p>

                    <h4>Resume Instance</h4>

                    <p>
                      You can resume a paused or suspended instance. A resume
                      operation does not initiate a reboot of the instance. The
                      instance is available for use without a restart or reboot
                      of the instance on resumption of the instance.
                    </p>

                    <p>follow the steps below to resume an instance</p>

                    <p>
                      <ol>
                        <li>
                          <p>
                            <a href="https://cloud.nobus.io/">
                              Log in to the Nobus Management dashboard.
                            </a>
                          </p>
                        </li>

                        <li>
                          <p>
                            On the <span class="step-item">Project</span> tab,
                            open the <span class="step-item">Compute</span> tab.
                          </p>
                        </li>
                        <li>
                          <p>
                            Click the <span class="step-item">Instances</span>{" "}
                            tab, which shows the available list.
                          </p>
                        </li>
                        <li>
                          <p>
                            Note the Paused instance you want to Resume, from
                            the list of available instances
                          </p>
                        </li>
                        <li>
                          <p>Beneath Actions</p>
                        </li>

                        <li>
                          <p>Click on the select box dropdown-toggle icon.</p>
                        </li>

                        <li>
                          <p>
                            Select{" "}
                            <span className="step-item">Resume Instance</span>.
                          </p>
                        </li>

                        <li>
                          <p>
                            Your instance enters the{" "}
                            <span className="code">Running</span> state.
                          </p>
                        </li>
                      </ol>
                    </p>

                    <h4>Suspend Instance</h4>

                    <p>
                      Another option is to suspend, and then resume, the
                      instance. Like paused instances, a suspended instance
                      keeps its current state, but it is written to storage.
                      Suspension, which frees up an instance's resources, is a
                      better choice for instances that an not required for a
                      longer period of time.
                    </p>

                    <p>
                      When you suspend your instance, it enters the{" "}
                      <code class="code">suspended</code> state, and the
                      <code class="code">shut down</code>power state. Nobus will
                      charge usage for a instance when it is in the{" "}
                      <code class="code">shut down</code> state,
                    </p>

                    <p>
                      In (<code class="code">suspended</code> state), file is
                      stil written to the storage and Nobus charge for data
                      transfer fees. Note that storage for any NobusFBS volumes
                      is billed for.
                    </p>

                    <p>Follow the steps below to suspend an instance:</p>

                    <p>
                      <ol>
                        <li>
                          <p>
                            <a href="https://cloud.nobus.io/">
                              Log in to the Nobus Management dashboard.
                            </a>
                          </p>
                        </li>

                        <li>
                          <p>
                            On the <span class="step-item">Project</span> tab,
                            open the <span class="step-item">Compute</span> tab.
                          </p>
                        </li>
                        <li>
                          <p>
                            Click the <span class="step-item">Instances</span>{" "}
                            tab, which shows the available list.
                          </p>
                        </li>
                        <li>
                          <p>
                            Note the Instance you want to suspend from the list
                            of available instances
                          </p>
                        </li>
                        <li>
                          <p>Beneath Actions</p>
                        </li>

                        <li>
                          <p>Click on the select box dropdown-toggle icon.</p>
                        </li>

                        <li>
                          <p>
                            Select{" "}
                            <span className="step-item">Suspend Instance</span>.
                          </p>
                        </li>

                        <li>
                          <p>Success: Instance suspended.</p>
                        </li>
                      </ol>
                    </p>

                    <h4>Instance Resize</h4>

                    <p>
                      You can change the size of an instance by changing its
                      flavor. This rebuilds the instance and therefore results
                      in a restart. Resizing can take a few minute with the
                      instance status being{" "}
                      <span className="step-item">
                        Confirm or Revert Resize/Migrate
                      </span>{" "}
                      and state being <code className="code">Running</code>.
                    </p>

                    <p>follow the steps below to Resize an instance</p>

                    <p>
                      <ol>
                        <li>
                          <p>
                            <a href="https://cloud.nobus.io/">
                              Log in to the Nobus Management dashboard.
                            </a>
                          </p>
                        </li>

                        <li>
                          <p>
                            On the <span class="step-item">Project</span> tab,
                            open the <span class="step-item">Compute</span> tab.
                          </p>
                        </li>
                        <li>
                          <p>
                            Click the <span class="step-item">Instances</span>{" "}
                            tab, which shows the available list.
                          </p>
                        </li>

                        <li>
                          <p>
                            Select the checkbox for the instance that you want
                            to reboot
                          </p>
                        </li>
                        <li>
                          <p>
                            Note the Instance you want to resize from the list
                            of available instances
                          </p>
                        </li>
                        <li>
                          <p>Beneath Actions</p>
                        </li>

                        <li>
                          <p>Click on the select box dropdown-toggle icon.</p>
                        </li>

                        <li>
                          <p>
                            Select{" "}
                            <span className="step-item">Resize Instance</span>.
                          </p>
                        </li>

                        <li>
                          <p>In the Resize Instance wizard.</p>
                        </li>
                        <li>
                          <p>You should see New Flavor</p>
                        </li>
                        <li>
                          <p>Click on select a new flavor.</p>
                        </li>
                        <li>
                          <p>Choose the flavor that you want to resize to</p>
                        </li>
                        <li>
                          <p>
                            Click <span className="step-item">Resize</span>.
                          </p>
                        </li>
                        <li>
                          <p>Click on confirm resize to confirm the resize.</p>
                        </li>
                      </ol>
                    </p>

                    <h4>Shelve Instance</h4>

                    <p>
                      A shelved instance, maintains all associated resources. So
                      if the instance uses ephemeral storage, it keeps that
                      resource when shelved, and continues to use that resource
                      when unshelved.
                    </p>

                    <p>A shelved instance is actually shut down.</p>

                    <p>follow the steps below to shelve an instance</p>

                    <p>
                      <ol>
                        <li>
                          <p>
                            <a href="https://cloud.nobus.io/">
                              Log in to the Nobus Management dashboard.
                            </a>
                          </p>
                        </li>

                        <li>
                          <p>
                            On the <span class="step-item">Project</span> tab,
                            open the <span class="step-item">Compute</span> tab.
                          </p>
                        </li>
                        <li>
                          <p>
                            Click the <span class="step-item">Instances</span>{" "}
                            tab, which shows the available list.
                          </p>
                        </li>

                        <li>
                          <p>
                            Note the instance you want to shelve, from the list
                            of available instances
                          </p>
                        </li>
                        <li>
                          <p>Beneath Actions</p>
                        </li>

                        <li>
                          <p>Click on the select box dropdown-toggle icon.</p>
                        </li>

                        <li>
                          <p>
                            Select{" "}
                            <span className="step-item">Shelve Instance</span>.
                          </p>
                        </li>

                        <li>
                          <p>
                            Your instance enters the{" "}
                            <code className="code">Shut down</code> state.
                          </p>
                        </li>
                      </ol>
                    </p>

                    <p>To unshelve the instance:</p>

                    <p>
                      <ol>
                        <li>
                          <p>
                            Note the Shelve instance you want to unshelve, from
                            the list of available instances
                          </p>
                        </li>
                        <li>
                          <p>Beneath Actions</p>
                        </li>

                        <li>
                          <p>Click on the select box dropdown-toggle icon.</p>
                        </li>

                        <li>
                          <p>
                            Select{" "}
                            <span className="step-item">Unshelve Instance</span>
                            .
                          </p>
                        </li>

                        <li>
                          <p>
                            Your instance enters the{" "}
                            <code className="code">running</code> state.
                          </p>
                        </li>
                      </ol>
                    </p>

                    <h4 id="instance-reboot">Rebooting Instance</h4>

                    <p>
                      You can reboot your instance using the Nobus FCS console.
                      Reboot might take few minutes to complete, debuild on the
                      configuration of your instance.
                    </p>

                    <p>
                      While your instance is rebooting it stays on the same host
                      computer and maintains its public private IP address, DNS
                      name, and any data on its instance store volumes.
                    </p>

                    <p>follow the steps below to shut off an instance</p>

                    <p>
                      <ol>
                        <li>
                          <p>
                            <a href="https://cloud.nobus.io/">
                              Log in to the Nobus Management dashboard.
                            </a>
                          </p>
                        </li>

                        <li>
                          <p>
                            On the <span class="step-item">Project</span> tab,
                            open the <span class="step-item">Compute</span> tab.
                          </p>
                        </li>
                        <li>
                          <p>
                            Click the <span class="step-item">Instances</span>{" "}
                            tab, which shows the available list.
                          </p>
                        </li>

                        <li>
                          <p>
                            Select the checkbox for the instance that you want
                            to reboot
                          </p>
                        </li>

                        <li>
                          <p>
                            Click More Action select box on the toolbar seen
                            above-right of the list of instances.
                          </p>
                        </li>

                        <li>
                          <p>
                            Select{" "}
                            <span className="step-item">
                              Soft Reboot Instance
                            </span>
                            .
                          </p>
                        </li>

                        <li>
                          <p>Confirmation wizard pops up</p>
                        </li>

                        <li>
                          <p>
                            Click{" "}
                            <span className="step-item">
                              Soft Reboot Instance
                            </span>
                            .
                          </p>
                        </li>
                      </ol>
                    </p>
                    <p>
                      When an irreparable failure of the underlying hardware
                      hosting the instance is noticed by Nobus, the instance is
                      scheduled to be removed ( shut down or deleted by Nobus ).
                      If your instance root device is a NobusFBS volume, the
                      instance is shut down, and you can start it again at any
                      time. If your instance root device is an instance store
                      volume, the instance is deleted, and cannot be used again.
                    </p>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Instance;
