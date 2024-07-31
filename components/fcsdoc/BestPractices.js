import { Tab } from "@headlessui/react";
import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function BestPractices() {
  const categories = [
    "Networking and Security",
    "Storage for Root Device",
    "Resource Management",
    "Cloud Back Up",
  ];

  return (
    <div id="best-practices" className="py-10">
      <h1 className="text-2xl md:text-3xl text-[#232f3e] tracking-tight font-semibold pb-5">
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
                <div>
                  <h3 class="py-2 text-2xl font-semibold text-[#232f3e]">
                    Security and Networking
                  </h3>

                  <div className="pt-5">
                    <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
                      User management
                    </h6>
                    <p>
                      Use Nobus Identity Service to create, distribute, change,
                      and revoke Nobus access credentials. A credential is a
                      data that confirms the identity of the user. (It could be
                      a user name and password, user name and API key, or an
                      authentication token that the Identity service provides).
                    </p>

                    <div className="border-l-2 border-l-blue-500 bg-blue-100 p-2 rounded-md my-5 mr-auto max-w-md text-justify">
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
                        Protect your root user login details, keys and access
                        tokens like you would your credit card numbers or any
                        other sensitive secret.
                      </p>
                    </div>

                    <p>
                      You are adviced to use your account email address and
                      password to sign in to the Nobus Management Console and
                      create a user for yourself with administrative
                      permissions. Please ensure that you use a strong password
                      to help protect account-level access to the Nobus
                      Management Console and Don't share your Nobus account root
                      user password or access keys with anyone. It must be kept
                      private.
                    </p>
                  </div>

                  <div className="pt-5">
                    <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
                      Create Individual Users
                    </h6>
                    <p>
                      Don't use your Nobus account root user credentials to
                      access Nobus, and don't give your credentials to anyone
                      else. Instead, create individual users for anyone who
                      needs access to your Nobus account. Create an user for
                      yourself as well, give that user administrative
                      permissions, and use that user for all your work.
                    </p>

                    <div className="border-l-2 border-l-blue-500 bg-blue-100 p-2 rounded-md my-5 mr-auto max-w-md text-justify">
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
                        Before you set permissions for individual users, though,
                        see the next point about groups.
                      </p>
                    </div>
                  </div>
                  {/* <div className='pt-5'>
                    <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
                    Use Groups to Assign Permissions to Users
                    </h6>
                    <p>
                    Instead of defining permissions for individual users, it's usually more convenient to create groups that relate to job functions (administrators, developers, accounting, etc.). Next, define the relevant permissions for each group. Finally, assign users to those groups. All the users in an group inherit the permissions assigned to the group. That way, you can make changes for everyone in a group in just one place. As people move around in your company, you can simply change what group their user belongs to.
                    </p>

                  </div> */}
                  <div className="pt-5">
                    <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
                      Grant Least Privilege
                    </h6>
                    <p>
                      Follow the standard security advice of granting least
                      privilege, or granting only the permissions required to
                      perform a task. Determine what users (and roles) need to
                      do and then craft policies that allow them to perform only
                      those tasks.
                    </p>

                    <p>
                      Start with a minimum set of permissions and grant
                      additional permissions as necessary. Doing so is more
                      secure than starting with permissions that are too lenient
                      and then trying to tighten them later.
                    </p>
                  </div>
                  <div className="pt-5">
                    <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
                      Configure a Strong Password Policy for Your Users
                    </h6>
                    <p>
                      If you allow users to change their own passwords, require
                      that they create strong passwords and that they rotate
                      their passwords periodically. You can use the password
                      policy to define password requirements, such as minimum
                      length, whether it requires non-alphabetic characters, how
                      frequently it must be rotated, and so on.
                    </p>
                  </div>
                  <div className="pt-5">
                    <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
                      Remove Unnecessary Credentials
                    </h6>
                    <p>
                      Remove user credentials (passwords and keys) that are not
                      needed. For example, if you created an user for an
                      application that does not use the console, then the user
                      does not need a password. Similarly, if a user only uses
                      the console, remove their access keys. Passwords and
                      access keys that have not been used recently might be good
                      candidates for removal. You can find unused passwords or
                      access keys using the console.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="pt-5">
                    <div>
                      <h3 className="py-2">Security Groups for Instances</h3>
                      <div className="space-y-5">
                        <p>
                          A security group acts as a virtual firewall that
                          controls the traffic for one or more instances. When
                          you launch an instance, you can specify one or more
                          security groups; otherwise, we use the default
                          security group. You can add rules to each security
                          group that allow traffic to or from its associated
                          instances. You can modify the rules for a security
                          group at any time; the new rules are automatically
                          applied to all instances that are associated with the
                          security group. When we decide whether to allow
                          traffic to reach an instance, we evaluate all the
                          rules from all the security groups that are associated
                          with the instance.
                        </p>
                        <p>
                          When you launch an instance in a Data center, you must
                          specify a security group that's created for that Data
                          center. After you launch an instance, you can change
                          its security groups. Security groups are associated
                          with network interfaces. Changing an instance's
                          security groups changes the security groups associated
                          with the primary network interface (eth0).
                        </p>
                        <p>
                          If you have requirements that aren't met by security
                          groups, you can maintain your own firewall on any of
                          your instances in addition to using security groups.
                        </p>
                      </div>
                    </div>
                    <div className="my-5 mr-auto max-w-sm bg-slate-100 p-4 border-l-2 border-l-slate-400">
                      <h5>Items</h5>
                      <ul className="list-none pl-0">
                        <li className="hover:scale-105">
                          <a
                            className="hover:bg-white rounded-md p-1"
                            href="#security-group-rules"
                          >
                            Security Group Rules
                          </a>
                        </li>
                        <li className="hover:scale-105">
                          <a
                            className="hover:bg-white rounded-md p-1"
                            href="#default-security-group"
                          >
                            Default Security Groups
                          </a>
                        </li>
                        <li className="hover:scale-105">
                          <a
                            className="hover:bg-white rounded-md p-1"
                            href="#creating-your-own-security-groups"
                          >
                            Custom Security Groups
                          </a>
                        </li>
                        <li className="hover:scale-105">
                          <a
                            className="hover:bg-white rounded-md p-1"
                            href="#working-with-security-groups"
                          >
                            Working with Security Groups
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-5">
                      <h4 id="security-group-rules">Security Group Rules</h4>
                      <p>
                        The rules of a security group control the inbound
                        traffic that's allowed to reach the instances that are
                        associated with the security group and the outbound
                        traffic that's allowed to leave them.
                      </p>
                      <p>
                        The following are the characteristics of security group
                        rules:
                      </p>

                      <div className="space-y-5">
                        <ul>
                          <li>
                            By default, security groups allow all outbound
                            traffic.
                          </li>
                          <li>
                            Security group rules are always permissive; you
                            can't create rules that deny access.
                          </li>
                          <li>
                            Security groups are stateful — if you send a request
                            from your instance, the response traffic for that
                            request is allowed to flow in regardless of inbound
                            security group rules. For Data center security
                            groups, this also means that responses to allowed
                            inbound traffic are allowed to flow out, regardless
                            of outbound rules.
                          </li>
                          <li>
                            You can add and remove rules at any time. Your
                            changes are automatically applied to the instances
                            associated with the security group.
                          </li>
                          <li>
                            When you associate multiple security groups with an
                            instance, the rules from each security group are
                            effectively aggregated to create one set of rules.
                            We use this set of rules to determine whether to
                            allow access.
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
                                You can assign multiple security groups to an
                                instance, therefore an instance can have
                                hundreds of rules that apply. This might cause
                                problems when you access the instance. We
                                recommend that you condense your rules as much
                                as possible.
                              </p>
                            </div>
                          </li>
                        </ul>

                        <p>For each rule, you specify the following:</p>

                        <ul>
                          <li>
                            <p>
                              <b>Protocol</b>: The protocol to allow. The most
                              common protocols are 6 (TCP) 17 (UDP), and 1
                              (ICMP).
                            </p>
                          </li>
                          <li>
                            <p>
                              <b>Port range</b>: For TCP, UDP, or a custom
                              protocol, the range of ports to allow. You can
                              specify a single port number (for example,
                              <code class="code">22</code>), or range of port
                              numbers (for example,
                              <code class="code">7000-8000</code>).
                            </p>
                          </li>
                          <li>
                            <p>
                              <b>ICMP type and code</b>: For ICMP, the ICMP type
                              and code.
                            </p>
                          </li>
                          <li>
                            <p>
                              <b>Source or destination</b>: The source (inbound
                              rules) or destination (outbound rules) for the
                              traffic. Specify one of these options:
                            </p>

                            <div>
                              <ul>
                                <li>
                                  <p>
                                    An individual IPv4 address. You must use the{" "}
                                    <code class="code">/32</code> prefix length;
                                    for example,{" "}
                                    <code class="code">203.0.113.1/32</code>.
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    An individual IPv6 address. You must use the{" "}
                                    <code class="code">/128</code> prefix
                                    length; for example{" "}
                                    <code class="code">
                                      2001:db8:1234:1a00::123/128
                                    </code>
                                    .
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    A range of IPv4 addresses, in CIDR block
                                    notation, for example,
                                    <code class="code">203.0.113.0/24</code>.
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    A range of IPv6 addresses, in CIDR block
                                    notation, for example,
                                    <code class="code">
                                      2001:db8:1234:1a00::/64
                                    </code>
                                    .
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    The prefix list ID for the NCS service; for
                                    example,
                                    <code class="code">pl-1a2b3c4d</code>. For
                                    more information, see{" "}
                                    <a href="https://docs.ncs.Nobus.com/Data center/latest/userguide/Data centere-gateway.html">
                                      Gateway Data center Endpoints
                                    </a>
                                    in the <em>Nobus Data center User Guide</em>
                                    .
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    Another security group. This allows
                                    instances associated with the specified
                                    security group to access instances
                                    associated with this security group. This
                                    does not add rules from the source security
                                    group to this security group. You can
                                    specify one of the following security
                                    groups:
                                  </p>

                                  <div>
                                    <ul>
                                      <li>
                                        <p>The current security group</p>
                                      </li>
                                      <li>
                                        <p>
                                          A different security group for the
                                          same Data center
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          A different security group for a peer
                                          Data center in a Data center peering
                                          connection
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <b>(Optional) Description</b>: You can add a
                            description for the rule; for example, to help you
                            identify it later. A description can be up to 255
                            characters in length. Allowed characters are a-z,
                            A-Z, 0-9, spaces, and ._-:/()#,@[]+=;{}!$*.
                          </li>
                        </ul>

                        <p>
                          When you specify a security group as the source or
                          destination for a rule, the rule affects all instances
                          associated with the security group. Incoming traffic
                          is allowed based on the private IP addresses of the
                          instances that are associated with the source security
                          group (and not the public IP or Elastic IP addresses).
                          If your security group rule references a security
                          group in a peer Data center, and the referenced
                          security group or Data center peering connection is
                          deleted, the rule is marked as stale.
                        </p>
                        <p>
                          If there is more than one rule for a specific port, we
                          apply the most permissive rule. For example, if you
                          have a rule that allows access to{" "}
                          <span className="code">TCP port 22 (SSH)</span> from
                          IP address <code class="code">105.0.113.1</code> and
                          another rule that allows access to{" "}
                          <span className="code">TCP port 22</span> from
                          everyone, everyone has access to{" "}
                          <span className="code">TCP port 22</span>.
                        </p>
                      </div>

                      <div className="space-y-5">
                        <h5 id="security-group-connection-tracking">
                          Connection Tracking
                        </h5>

                        <p>
                          Your security groups use connection tracking to track
                          information about traffic to and from the instance.
                          Rules are applied based on the connection state of the
                          traffic to determine if the traffic is allowed or
                          denied. This allows security groups to be stateful —
                          responses to inbound traffic are allowed to flow out
                          of the instance regardless of outbound security group
                          rules, and vice versa. For example, if you initiate an
                          ICMP <code class="code">ping</code> command to your
                          instance from your home computer, and your inbound
                          security group rules allow ICMP traffic, information
                          about the connection (including the port information)
                          is tracked. Response traffic from the instance for the{" "}
                          <code class="code">ping</code> command is not tracked
                          as a new request, but rather as an established
                          connection and is allowed to flow out of the instance,
                          even if your outbound security group rules restrict
                          outbound ICMP traffic.
                        </p>
                        <p>
                          Not all flows of traffic are tracked. If a security
                          group rule permits TCP or UDP flows for all traffic (
                          <code class="code">0.0.0.0/0</code>) and there is a
                          corresponding rule in the other direction that permits
                          all response traffic (
                          <code class="code">0.0.0.0/0</code>) for all ports
                          (0-65535), then that flow of traffic is not tracked.
                          The response traffic is therefore allowed to flow
                          based on the inbound or outbound rule that permits the
                          response traffic, and not on tracking information.
                        </p>

                        <p>
                          In the following example, the security group has
                          specific inbound rules for TCP and ICMP traffic, and
                          an outbound rule that allows all outbound traffic.
                        </p>
                        <div className="max-w-md">
                          <table class="w-full table-auto bg-striped">
                            <tbody>
                              <tr class="bg-gray-200">
                                <td colspan="3" class="text-left font-semibold">
                                  Inbound rules
                                </td>
                              </tr>
                              <tr class="bg-gray-200 border-t border-t-slate-300">
                                <td class="font-semibold">Protocol type</td>
                                <td class="font-semibold">Port number</td>
                                <td class="font-semibold">Source IP</td>
                              </tr>
                              <tr>
                                <td>TCP</td>
                                <td>22 (SSH)</td>
                                <td>203.0.113.1/32</td>
                              </tr>
                              <tr>
                                <td>TCP</td>
                                <td>80 (HTTP)</td>
                                <td>0.0.0.0/0</td>
                              </tr>
                              <tr>
                                <td>ICMP</td>
                                <td>All</td>
                                <td>0.0.0.0/0</td>
                              </tr>
                              <tr class="bg-gray-200">
                                <td colspan="3" class="text-left font-semibold">
                                  Outbound rules
                                </td>
                              </tr>
                              <tr class="bg-gray-200 border-t border-t-slate-300">
                                <td class="font-semibold">Protocol type</td>
                                <td class="font-semibold">Port number</td>
                                <td class="font-semibold">Destination IP</td>
                              </tr>
                              <tr>
                                <td>All</td>
                                <td>All</td>
                                <td>0.0.0.0/0</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p>
                          TCP traffic on port 22 (SSH) to and from the instance
                          is tracked, because the inbound rule allows traffic
                          from <code class="code">203.0.113.1/32</code> only,
                          and not all IP addresses (
                          <code class="code">0.0.0.0/0</code>). TCP traffic on
                          port 80 (HTTP) to and from the instance is not
                          tracked, because both the inbound and outbound rules
                          allow all traffic (<code class="code">0.0.0.0/0</code>
                          ). ICMP traffic is always tracked, regardless of
                          rules. If you remove the outbound rule from the
                          security group, then all traffic to and from the
                          instance is tracked, including traffic on port 80
                          (HTTP).
                        </p>
                        <p>
                          An existing flow of traffic that is tracked may not be
                          interrupted when you remove the security group rule
                          that enables that flow. Instead, the flow is
                          interrupted when it's stopped by you or the other host
                          for at least a few minutes (or up to 5 days for
                          established TCP connections). For UDP, this may
                          require terminating actions on the remote side of the
                          flow. An untracked flow of traffic is immediately
                          interrupted if the rule that enables the flow is
                          removed or modified. For example, if you remove a rule
                          that allows all inbound SSH traffic to the instance,
                          then your existing SSH connections to the instance are
                          immediately dropped.
                        </p>

                        <p>
                          For protocols other than TCP, UDP, or ICMP, only the
                          IP address and protocol number is tracked. If your
                          instance sends traffic to another host (host B), and
                          host B initiates the same type of traffic to your
                          instance in a separate request within 600 seconds of
                          the original request or response, your instance
                          accepts it regardless of inbound security group rules,
                          because it’s regarded as response traffic.
                        </p>

                        <p>
                          To ensure that traffic is immediately interrupted when
                          you remove a security group rule, or to ensure that
                          all inbound traffic is subject to firewall rules, you
                          can use a network ACL for your subnet — network ACLs
                          are stateless and therefore do not automatically allow
                          response traffic.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-5 mt-5">
                      <h4 id="default-security-group">
                        Default Security Groups
                      </h4>
                      <div>
                        <p>
                          Your NCS account automatically has a default security
                          group for the default Data center in each Region. If
                          you don't specify a security group when you launch an
                          instance, the instance is automatically associated
                          with the default security group for the Data center.
                        </p>
                        <p>
                          A default security group is named{" "}
                          <code class="code">default</code>, and it has an ID
                          assigned by NCS. The following are the default rules
                          for each default security group:
                        </p>
                        <ul>
                          <li>
                            <p>
                              Allows all inbound traffic from other instances
                              associated with the default security group (the
                              security group specifies itself as a source
                              security group in its inbound rules)
                            </p>
                          </li>
                          <li>
                            <p>
                              Allows all outbound traffic from the instance.
                            </p>
                          </li>
                        </ul>
                        <p>
                          You can add or remove inbound and outbound rules for
                          any default security group.
                        </p>

                        <p>
                          You can't delete a default security group. If you try
                          to delete a default security group, you see the
                          following error:{" "}
                          <code class="code">
                            Client.CannotDelete: the specified group:
                            "sg-51530134" name: "default" cannot be deleted by a
                            user
                          </code>
                          .
                        </p>
                      </div>
                    </div>
                    <div className="space-y-5">
                      <h4
                        className="mt-5"
                        id="creating-your-own-security-groups"
                      >
                        Custom Security Groups
                      </h4>
                      <div>
                        <p>
                          If you don't want your instances to use the default
                          security group, you can create your own security
                          groups and specify them when you launch your
                          instances. You can create multiple security groups to
                          reflect the different roles that your instances play;
                          for example, a web server or a database server.
                        </p>
                        <p>
                          When you create a security group, you must provide it
                          with a name and a description. Security group names
                          and descriptions can be up to 255 characters in
                          length, and are limited to the following characters:
                        </p>
                        <p>
                          a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=&amp;;{}!$*
                        </p>
                        <p>
                          A security group name cannot start with{" "}
                          <code class="code">sg-</code>. A security group name
                          must be unique for the Data center.
                        </p>
                      </div>

                      <div>
                        <p>
                          The following are the default rules for a security
                          group that you create:
                        </p>

                        <ul>
                          <li>Allows no inbound traffic</li>
                          <li>Allows all outbound traffic</li>
                        </ul>

                        <p>
                          After you've created a security group, you can change
                          its inbound rules to reflect the type of inbound
                          traffic that you want to reach the associated
                          instances. You can also change its outbound rules.
                        </p>

                        <p>
                          For more information about the rules you can add to a
                          security group, see{" "}
                          <a href="#"> Security Group Rules Reference</a>
                        </p>
                      </div>
                    </div>
                    <div className="space-y-5">
                      <h4 className="mt-5" id="working-with-security-groups">
                        Working with Security Groups
                      </h4>
                      <p>
                        You can create, view, update, and delete security groups
                        and security group rules using the Nobus FCS console.
                      </p>

                      <div>
                        <h5 id="creating-security-group">
                          Creating a Security Group
                        </h5>
                        <p>
                          You can create a custom security group using the Nobus
                          FCS console. You must specify the Data center for
                          which you're creating the security group.
                        </p>
                        <div>
                          <h6>
                            To create a new security group using the console
                          </h6>
                          <ol>
                            <li>
                              <p>
                                Open the{" "}
                                <a href="#">Nobus Management Dashboard</a>.
                              </p>
                            </li>
                            <li>
                              <p>
                                choose{" "}
                                <span className="step-item">
                                  Security Groups
                                </span>
                                .
                              </p>
                            </li>
                            <li>
                              <p>
                                Choose{" "}
                                <span className="step-item">
                                  Create Security Group
                                </span>
                                .
                              </p>
                            </li>
                            <li>
                              <p>
                                Specify a name and description for the security
                                group.
                              </p>
                            </li>
                            <li>
                              <p>
                                For{" "}
                                <span className="step-item">Data center</span>,
                                choose the ID of the Data center.
                              </p>
                            </li>
                            <li>
                              <p>
                                You can start adding rules, or you can choose{" "}
                                <span className="step-item">Create</span>
                                to create the security group now (you can always
                                add rules later). For more information about
                                adding rules, see{" "}
                                <a href="#">
                                  {" "}
                                  Adding Rules to a Security Group
                                </a>
                                .
                              </p>
                            </li>
                          </ol>
                        </div>

                        <p>
                          The Nobus FCS console enables you to copy the rules
                          from an existing security group to a new security
                          group.
                        </p>

                        <div>
                          <h6>To copy a security group using the console</h6>
                          <ol>
                            <li>
                              <p>
                                Open the Nobus FCS console at{" "}
                                <a href="#">Nobus Management Dashboard</a>.
                              </p>
                            </li>
                            <li>
                              <p>
                                In the navigation pane, choose{" "}
                                <span className="step-item">
                                  Security Groups
                                </span>
                                .
                              </p>
                            </li>
                            <li>
                              <p>
                                Select the security group you want to copy,
                                choose
                                <span className="step-item">Actions</span>,{" "}
                                <span className="step-item">Copy to new</span>.
                              </p>
                            </li>
                            <li>
                              <p>
                                The{" "}
                                <span className="step-item">
                                  Create Security Group
                                </span>{" "}
                                dialog opens, and is populated with the rules
                                from the existing security group. Specify a name
                                and description for your new security group. For{" "}
                                <span className="step-item">Data center</span>,
                                choose the ID of the Data center. When you are
                                done, choose{" "}
                                <span className="step-item">Create</span>.
                              </p>
                            </li>
                          </ol>
                        </div>

                        <p>
                          You can assign a security group to an instance when
                          you launch the instance. When you add or remove rules,
                          those changes are automatically applied to all
                          instances to which you've assigned the security group.
                        </p>

                        <p>
                          After you launch an instance, you can change its
                          security groups. For more information, see{" "}
                          <a href="#">
                            {" "}
                            Changing an Instance's Security Groups
                          </a>
                          .
                        </p>
                      </div>
                      <div>
                        <h5 id="describing-security-group">
                          Describing Your Security Groups
                        </h5>

                        <p>
                          You can view information about your security groups
                          using the Nobus FCS console or the command line.
                        </p>

                        <div>
                          <h6>
                            To describe your security groups using the console
                          </h6>
                          <ol>
                            <li>
                              <p>
                                Open the Nobus FCS console at{" "}
                                <a href="#"> Nobus Management Dashboard</a>.
                              </p>
                            </li>
                            <li>
                              <p>
                                In the navigation pane, choose{" "}
                                <span className="step-item">
                                  Security Groups
                                </span>
                                .
                              </p>
                            </li>
                            <li>
                              <p>
                                (Optional) Select{" "}
                                <span className="step-item">
                                  Data center ID
                                </span>{" "}
                                from the filter list, then choose the ID of the
                                Data center.
                              </p>
                            </li>
                            <li>
                              <p>
                                Select a security group. We display general
                                information in the
                                <span className="step-item">
                                  Description
                                </span>{" "}
                                tab, inbound rules on the
                                <span className="step-item">Inbound</span> tab,
                                outbound rules on the
                                <span className="step-item">Outbound</span> tab,
                                and tags on the
                                <span className="step-item">Tags</span> tab.
                              </p>
                            </li>
                          </ol>
                        </div>
                      </div>
                      <div>
                        <h5 id="adding-security-group-rule">
                          Adding Rules to a Security Group
                        </h5>

                        <p>
                          When you add a rule to a security group, the new rule
                          is automatically applied to any instances associated
                          with the security group after a short period.
                        </p>

                        <p>
                          For more information about choosing security group
                          rules for specific types of access, see{" "}
                          <a href="#">Security Group Rules Reference</a>.
                        </p>
                        <div>
                          <h6>
                            To add rules to a security group using the console
                          </h6>
                          <ol>
                            <li>
                              <p>
                                Open the Nobus FCS console at{" "}
                                <a href="#"> Nobus Management Dashboard</a>.
                              </p>
                            </li>
                            <li>
                              <p>
                                In the navigation pane, choose{" "}
                                <span className="step-item">
                                  Security Groups
                                </span>{" "}
                                and select the security group.
                              </p>
                            </li>
                            <li>
                              <p>
                                On the{" "}
                                <span className="step-item">Inbound</span> tab,
                                choose <span className="step-item">Edit</span>.
                              </p>
                            </li>
                            <li>
                              <p>
                                In the dialog, choose{" "}
                                <span className="step-item">Add Rule</span> and
                                do the following:
                              </p>
                              <div>
                                <ul>
                                  <li>
                                    <p>
                                      For{" "}
                                      <span className="step-item">Type</span>,
                                      select the protocol.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      If you select a custom TCP or UDP
                                      protocol, specify the port range in{" "}
                                      <span className="step-item">
                                        Port Range
                                      </span>
                                      .
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      If you select a custom ICMP protocol,
                                      choose the ICMP type name from{" "}
                                      <span className="step-item">
                                        Protocol
                                      </span>
                                      , and, if applicable, the code name from{" "}
                                      <span className="step-item">
                                        Port Range
                                      </span>
                                      .
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      For{" "}
                                      <span className="step-item">Source</span>,
                                      choose one of the following:
                                    </p>
                                    <div>
                                      <ul>
                                        <li>
                                          <p>
                                            <span className="step-item">
                                              Custom
                                            </span>
                                            : in the provided field, you must
                                            specify an IP address in CIDR
                                            notation, a CIDR block, or another
                                            security group.
                                          </p>
                                        </li>
                                        <li>
                                          <p>
                                            <span className="step-item">
                                              {" "}
                                              Anywhere
                                            </span>
                                            : automatically adds the{" "}
                                            <code class="code">
                                              0.0.0.0/0
                                            </code>{" "}
                                            IPv4 CIDR block. This option enables
                                            all traffic of the specified type to
                                            reach your instance. This is
                                            acceptable for a short time in a
                                            test environment, but it's unsafe
                                            for production environments. In
                                            production, authorize only a
                                            specific IP address or range of
                                            addresses to access your instance.
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
                                              If your security group is in a
                                              Data center that's enabled for
                                              IPv6, the{" "}
                                              <span className="step-item">
                                                Anywhere
                                              </span>{" "}
                                              option creates two rules—one for
                                              IPv4 traffic (
                                              <code class="code">
                                                0.0.0.0/0
                                              </code>
                                              ) and one for IPv6 traffic (
                                              <code class="code">::/0</code>).
                                            </p>
                                          </div>
                                        </li>
                                        <li>
                                          <p>
                                            <span className="step-item">
                                              My IP
                                            </span>
                                            : automatically adds the public IPv4
                                            address of your local computer.
                                          </p>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li>
                                    <p>
                                      For{" "}
                                      <span className="step-item">
                                        Description
                                      </span>
                                      , you can optionally specify a description
                                      for the rule.
                                    </p>
                                  </li>
                                </ul>
                              </div>

                              <p>
                                For more information about the types of rules
                                that you can add, see{" "}
                                <a href="#">Security Group Rules Reference</a>.
                              </p>
                            </li>
                            <li>
                              <p>
                                Choose <span className="step-item">Save</span>.
                              </p>
                            </li>
                            <li>
                              <p>
                                You can also specify outbound rules. On the
                                <span className="step-item">Outbound tab</span>,
                                choose <span className="step-item">Edit</span>,
                                <span className="step-item">Add Rule</span>, and
                                do the following:
                              </p>
                              <div>
                                <ul>
                                  <li>
                                    <p>
                                      For{" "}
                                      <span className="step-item">Type</span>,
                                      select the protocol.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      If you select a custom TCP or UDP
                                      protocol, specify the port range in{" "}
                                      <span className="step-item">
                                        Port Range
                                      </span>
                                      .
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      If you select a custom ICMP protocol,
                                      choose the ICMP type name from{" "}
                                      <span className="step-item">
                                        Protocol
                                      </span>
                                      , and, if applicable, the code name from{" "}
                                      <span className="step-item">
                                        Port Range
                                      </span>
                                      .
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      For{" "}
                                      <span className="step-item">
                                        Destination
                                      </span>
                                      , choose one of the following:
                                    </p>
                                    <div>
                                      <ul>
                                        <li>
                                          <p>
                                            <span className="step-item">
                                              Custom
                                            </span>
                                            : in the provided field, you must
                                            specify an IP address in CIDR
                                            notation, a CIDR block, or another
                                            security group.
                                          </p>
                                        </li>
                                        <li>
                                          <p>
                                            <span className="step-item">
                                              Anywhere
                                            </span>
                                            : automatically adds the{" "}
                                            <code class="code">0.0.0.0/0</code>{" "}
                                            IPv4 CIDR block. This option enables
                                            outbound traffic to all IP
                                            addresses.
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
                                              If your security group is in a
                                              Data center that's enabled for
                                              IPv6, the{" "}
                                              <span className="step-item">
                                                Anywhere
                                              </span>{" "}
                                              option creates two rules—one for
                                              IPv4 traffic (
                                              <code class="code">
                                                0.0.0.0/0
                                              </code>
                                              ) and one for IPv6 traffic (
                                              <code class="code">::/0</code>).
                                            </p>
                                          </div>
                                        </li>
                                        <li>
                                          <p>
                                            <span className="step-item">
                                              My IP
                                            </span>
                                            : automatically adds the IP address
                                            of your local computer.
                                          </p>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li>
                                    <p>
                                      For{" "}
                                      <span className="step-item">
                                        Description
                                      </span>
                                      , you can optionally specify a description
                                      for the rule.
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <p>
                                Choose <span className="step-item">Save</span>.
                              </p>
                            </li>
                          </ol>
                        </div>
                      </div>
                      <div>
                        <h5 id="updating-security-group-rules">
                          Updating Security Group Rules
                        </h5>

                        <p>
                          When you modify the protocol, port range, or source or
                          destination of an existing security group rule using
                          the console, the console deletes the existing rule and
                          adds a new one for you.
                        </p>

                        <div>
                          <h6>
                            To update a security group rule using the console
                          </h6>
                          <ol>
                            <li>
                              <p>
                                Open the Nobus FCS console at{" "}
                                <a href="#">Nobus Management Dashboard</a>.
                              </p>
                            </li>
                            <li>
                              <p>
                                In the navigation pane, choose{" "}
                                <span className="step-item">
                                  Security Groups
                                </span>
                                .
                              </p>
                            </li>
                            <li>
                              <p>
                                Select the security group to update, and choose{" "}
                                <span className="step-item">Inbound Rules</span>{" "}
                                to update a rule for inbound traffic or
                                <span className="step-item">
                                  Outbound Rules
                                </span>{" "}
                                to update a rule for outbound traffic.
                              </p>
                            </li>
                            <li>
                              <p>
                                Choose <span className="step-item">Edit</span>.
                                Modify the rule entry as required and choose{" "}
                                <span className="step-item">Save</span>.
                              </p>
                            </li>
                          </ol>
                        </div>
                      </div>
                      <div>
                        <h5 id="deleting-security-group-rule">
                          Deleting Rules from a Security Group
                        </h5>

                        <p>
                          When you delete a rule from a security group, the
                          change is automatically applied to any instances
                          associated with the security group.
                        </p>

                        <div>
                          <h6>
                            To delete a security group rule using the console
                          </h6>
                          <ol>
                            <li>
                              <p>
                                Open the Nobus FCS console at{" "}
                                <a href="#">
                                  <span>Nobus Management Dashboard</span>
                                </a>
                                .
                              </p>
                            </li>
                            <li>
                              <p>
                                In the navigation pane, choose{" "}
                                <span className="step-item">
                                  Security Groups
                                </span>
                                .
                              </p>
                            </li>
                            <li>
                              <p>Select a security group.</p>
                            </li>
                            <li>
                              <p>
                                On the{" "}
                                <span className="step-item">Inbound</span> tab
                                (for inbound rules) or{" "}
                                <span className="step-item">Outbound</span> tab
                                (for outbound rules), choose{" "}
                                <span className="step-item">Edit</span>. Choose{" "}
                                <span className="step-item">Delete</span> (a
                                cross icon) next to each rule to delete.
                              </p>
                            </li>
                            <li>
                              <p>
                                Choose <span className="step-item">Save</span>.
                              </p>
                            </li>
                          </ol>
                        </div>
                      </div>
                      <div>
                        <h5 id="deleting-security-group">
                          Deleting a Security Group
                        </h5>
                        <p>
                          You can't delete a security group that is associated
                          with an instance. You can't delete the default
                          security group. You can't delete a security group that
                          is referenced by a rule in another security group in
                          the same Data center. If your security group is
                          referenced by one of its own rules, you must delete
                          the rule before you can delete the security group.
                        </p>

                        <div>
                          <h6>To delete a security group using the console</h6>
                          <ol>
                            <li>
                              <p>
                                Open the Nobus FCS console at{" "}
                                <a href="#">Nobus Management Dashboard</a>.
                              </p>
                            </li>
                            <li>
                              <p>
                                In the navigation pane, choose{" "}
                                <span className="step-item">
                                  Security Groups
                                </span>
                                .
                              </p>
                            </li>
                            <li>
                              <p>
                                Select a security group and choose{" "}
                                <span className="step-item">Actions</span>,{" "}
                                <span className="step-item">
                                  Delete Security Group
                                </span>
                                .
                              </p>
                            </li>
                            <li>
                              <p>
                                Choose{" "}
                                <span className="step-item">Yes, Delete</span>.
                              </p>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <h4 class="py-2">Storage for the Root Device</h4>
                <div className="space-y-5">
                  <p>
                    Understand the implications of the root device type for data
                    persistence, backup, and recovery.
                  </p>
                  <p>
                    Root device volume contains the image used to boot the
                    instance at launch time. if your Nobus Machine Image (NMIs)
                    are backed by NobusFBS, then the root device for every
                    instance launched from the NMI is a NobusFBS volume made
                    from a NobusFBS snapshot.
                  </p>
                  <p>
                    You have the option to use a NobusFBS supported NMI or Nobus
                    FCS instance store supported NMI. We recommend that you use
                    NMIs supported by NobusFBS, since they use persistent
                    storage and launch faster.
                  </p>
                  <p>
                    All NMIs are categorized as either{" "}
                    <em>backed by Nobus FBS</em> or
                    <em>backed by instance store</em>. The former means that the
                    root device for an instance launched from the NMI is an
                    Nobus FBS volume created from an Nobus FBS snapshot. The
                    latter means that the root device for an instance launched
                    from the NMI is an instance store volume created from a
                    template stored in Nobus Flexible Object Storage (FOS).
                  </p>
                  <h6>Nobus FBS-backed Instances</h6>
                  <div className="space-y-5">
                    <p>
                      Instances that use NobusFBS for the root device
                      automatically have a Nobus FBS volume attached. When a
                      NobusFBS-backed instance is launched, a Nobus FBS volume
                      for individual NobusFBS snapshot with reference to the NMI
                      adopted by you is created.
                    </p>

                    <p>
                      {" "}
                      No data are affected when your Nobus FBS-backed instance
                      is shut down and restarted. There are various instance and
                      volume-related tasks you can do when a Nobus FBS-backed
                      instance is in a shut down state. For example, you can
                      modify the properties of the instance, change its size, or
                      update the kernel it is using, or you can attach your root
                      volume to a different running instance for debugging or
                      any other purpose.
                    </p>

                    <p>
                      Try either of the following processes below, on failure of
                      your Nobus FBS-backed instance.
                    </p>

                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <p>shut off and restart</p>
                      </li>
                      <li>
                        <p>
                          Make a volume snapshot automatically and create a new
                          NMI.
                        </p>
                      </li>
                      <li>
                        <p>
                          Attach the volume to the new instance by following
                          these steps:
                        </p>
                        <ol className="">
                          <li>
                            <p>Create a snapshot of the root volume.</p>
                          </li>
                          <li>
                            <p>Register a new NMI using the snapshot.</p>
                          </li>
                          <li>
                            <p>From the new NMI, launch a new instance .</p>
                          </li>
                          <li>
                            <p>
                              Detach the remaining NobusFBS volumes from the
                              previous instance.
                            </p>
                          </li>
                          <li>
                            <p>
                              Reattach the NobusFBS volumes to the new instance.
                            </p>
                          </li>
                        </ol>
                      </li>
                    </ul>

                    <h6>Instance Store-backed Instances</h6>

                    <p>
                      If your instances use instance stores for the root device,
                      then one or more instance store volumes will be attached
                      automatically, one being the root device volume. A
                      duplicate of the image that is used to boot an instance is
                      created in the root volume at the instance launch.
                    </p>

                    <p>
                      There is persistence of data on the instance store volumes
                      as long as the instance is active, although, the data is
                      erased and cannot be restored on termination or failure of
                      the instance.
                    </p>

                    <p>
                      Ensure to back up vital data from your instance store
                      volumes to a persistent storage frequently, if you decide
                      to use Nobus FCS instance store-backed instances.
                    </p>
                  </div>
                  <p>
                    The following table summarizes the important differences
                    when using the two types of NMIs.
                  </p>

                  <div>
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" class="px-6 py-3">
                            Characteristic
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Nobus FBS-Backed NMI
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Nobus Instance Store-Backed NMI
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <td class="px-6 py-4">
                            <p>Boot time for an instance</p>
                          </td>
                          <td class="px-6 py-4">
                            <p>Usually less than 1 minute</p>
                          </td>
                          <td class="px-6 py-4">
                            <p>Usually less than 5 minutes</p>
                          </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <td class="px-6 py-4">
                            <p>Size limit for a root device</p>
                          </td>
                          <td class="px-6 py-4">
                            <p>16 TiB</p>
                          </td>
                          <td class="px-6 py-4">
                            <p>10 GiB</p>
                          </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <td class="px-6 py-4">
                            <p>Root device volume</p>
                          </td>
                          <td class="px-6 py-4">
                            <p>Nobus FBS volume</p>
                          </td>
                          <td class="px-6 py-4">
                            <p>Instance store volume</p>
                          </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <td class="px-6 py-4">
                            <p>Data persistence</p>
                          </td>
                          <td class="px-6 py-4">
                            <p>
                              By default, the root volume is deleted when the
                              instance terminates.* Data on any other Nobus FBS
                              volumes persists after instance termination by
                              default.
                            </p>
                          </td>
                          <td class="px-6 py-4">
                            <p>
                              Data on any instance store volumes persists only
                              during the life of the instance.
                            </p>
                          </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <td class="px-6 py-4">
                            <p>Modifications</p>
                          </td>
                          <td class="px-6 py-4">
                            <p>
                              The instance type, kernel, RAM disk, and user data
                              can be changed while the instance is stopped.
                            </p>
                          </td>
                          <td class="px-6 py-4">
                            <p>
                              Instance attributes are fixed for the life of an
                              instance.
                            </p>
                          </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <td class="px-6 py-4">
                            <p>Charges</p>
                          </td>
                          <td class="px-6 py-4">
                            <p>
                              You're charged for instance usage, Nobus FBS
                              volume usage, and storing your NMI as an Nobus FBS
                              snapshot.
                            </p>
                          </td>
                          <td class="px-6 py-4">
                            <p>
                              You're charged for instance usage and storing your
                              NMI in Nobus S3.
                            </p>
                          </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <td class="px-6 py-4">
                            <p>NMI creation/bundling</p>
                          </td>
                          <td class="px-6 py-4">
                            <p>Uses a single command/call</p>
                          </td>
                          <td class="px-6 py-4">
                            <p>Requires installation and use of NMI tools</p>
                          </td>
                        </tr>
                        <tr class="bg-white">
                          <td class="px-6 py-4">
                            <p>Stopped state</p>
                          </td>
                          <td class="px-6 py-4">
                            <p>
                              Can be placed in stopped state where instance is
                              not running, but the root volume is persisted in
                              Nobus FBS
                            </p>
                          </td>
                          <td class="px-6 py-4">
                            <p>
                              Cannot be in stopped state; instances are running
                              or terminated
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <h5>Choosing a NMI by Root Device Type</h5>
                    <p>
                      The NMI that you select at launch your instance decides
                      the type of root device volume that is associated to your
                      instance.
                    </p>

                    <h6>To choose a NobusFBS-backed NMI using the console</h6>
                    <ol>
                      <li>
                        <p>Open the Nobus FCS console.</p>
                      </li>
                      <li>
                        <p>
                          In the navigation pane, select{" "}
                          <span className="step-item">NMIs</span>.
                        </p>
                      </li>
                      <li>
                        <p>
                          From the list, select the images. choose the Name;
                          operating system (for example
                          <span className="step-item">Nobus Linux</span>), with
                          a <span className="step-item">Root Device Type</span>
                          to make your{" "}
                          <span className="step-item">FBS images</span> choice.
                        </p>
                      </li>
                      <li>
                        <p>
                          Click the <span className="step-item">Show/Hide</span>{" "}
                          icon, to get information that might help through your
                          selection.
                        </p>
                      </li>
                      <li>
                        <p>Select a NMI and note NMI ID.</p>
                      </li>
                    </ol>

                    <h6>
                      To choose an instance store-backed NMI using the console
                    </h6>
                    <ol>
                      <li>
                        <p>Open the Nobus FCS console.</p>
                      </li>
                      <li>
                        <p>
                          In the navigation pane, choose{" "}
                          <span className="step-item">NMIs</span>.
                        </p>
                      </li>
                      <li>
                        <p>
                          From the list, select the images. choose the Name;
                          operating system (for example
                          <span className="step-item">Nobus Linux</span>), with
                          a <span className="step-item">Root Device Type</span>
                          to make your{" "}
                          <span className="step-item">instance store</span>{" "}
                          choice.
                        </p>
                      </li>
                      <li>
                        <p>
                          Click the <span className="step-item">Show/Hide</span>{" "}
                          icon, to get information that might help through your
                          selection.
                        </p>
                      </li>
                      <li>
                        <p>Select a NMI and note its NMI ID.</p>
                      </li>
                    </ol>

                    <h5>Determining the Root Device Type of Your Instance</h5>
                    <h6>
                      To determine the root device type of an instance using the
                      console
                    </h6>
                    <ol>
                      <li>
                        <p>Open the Nobus FCS console.</p>
                      </li>
                      <li>
                        <p>
                          In the navigation pane, select{" "}
                          <span className="step-item">Instances</span>, and
                          choose the instance.
                        </p>
                      </li>
                      <li>
                        <p>
                          Check the value of{" "}
                          <span className="step-item">Root device type</span> in
                          the
                          <span className="step-item">Description</span> tab as
                          follows:
                        </p>

                        <div className="pl-4">
                          <ul className="pl-4 space-y-2 list-disc">
                            <li>
                              <p>
                                If the value is{" "}
                                <code className="text-red-400">fbs</code>, this
                                is a NobusFBS-backed instance.
                              </p>
                            </li>
                            <li>
                              <p>
                                If the value is{" "}
                                <code className="text-red-400">
                                  instance store
                                </code>
                                , this is an instance store-backed instance.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ol>

                    <h5>Changing the Root Device Volume to Persist</h5>

                    <p>
                      By default, the root device volume for a NMI backed by
                      NobusFBS is not deleted when the instance terminates.
                    </p>

                    <h5>
                      Changing the Root Volume to not Persist Using the Console
                    </h5>
                    <h6>
                      To change the root device volume of an instance to not
                      persist at launch using the console
                    </h6>
                    <ol>
                      <li>
                        <p>Open the Nobus FCS console.</p>
                      </li>
                      <li>
                        <p>
                          From the Nobus FCS console, choose{" "}
                          <span className="step-item">Launch Instance</span>.
                        </p>
                      </li>
                      <li>
                        <p>
                          On the{" "}
                          <span className="step-item">
                            Choose a Nobus Machine Image (NMI)
                          </span>{" "}
                          section, select the NMI to use.
                        </p>
                      </li>
                      <li>
                        <p>
                          Follow the wizard to complete the{" "}
                          <span className="step-item">Choose a Flavor</span> and
                          <span className="step-item">
                            Configure Instance Details
                          </span>{" "}
                          pages.
                        </p>
                      </li>
                      <li>
                        <p>
                          On the <span className="step-item">Volume Size</span>{" "}
                          section, select Yes{" "}
                          <span className="step-item">
                            Delete Volume on Instance Delete
                          </span>{" "}
                          for the root volume.
                        </p>
                      </li>
                      <li>
                        <p>
                          Complete the remaining wizard pages, and then choose{" "}
                          <span className="step-item">Launch</span>.
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <h3 class="py-2">Resources Management</h3>

                <div className="space-y-5">
                  <h5>Instance Metadata and User Data</h5>
                  <p>
                    Use instance metadata and custom resource tags to track and
                    identify your Nobus resources.
                  </p>

                  <p>
                    Instance metadata is data about your instance that you can
                    use to configure or manage the running instance. Instance
                    metadata is divided into categories, for example, host name,
                    events, and security groups.
                  </p>
                  <p>
                    You can also use instance metadata to access user data that
                    you specified when launching your instance. For example, you
                    can specify parameters for configuring your instance, or
                    include a simple script. You can build generic NMIs and use
                    user data to modify the configuration files supplied at
                    launch time. For example, if you run web servers for various
                    small businesses, they can all use the same generic NMI and
                    retrieve their content from the Nobus FOS bucket that you
                    specify in the user data at launch. To add a new customer at
                    any time, create a bucket for the customer, add their
                    content, and launch your NMI with the unique bucket name
                    provided to your code in the user data. If you launch more
                    than one instance at the same time, the user data is
                    available to all instances in that reservation. Each
                    instance that is part of the same reservation has a unique
                    NMI-launch-index number, allowing you to write code that
                    controls what to do. For example, the first host might elect
                    itself as an initial master node in a cluster.
                  </p>
                  <p>
                    FCS instances can also include dynamic data, such as an
                    instance identity that is generated when the instance is
                    launched.
                  </p>
                </div>
                <div className="space-y-5">
                  <h5>Nobus FCS Service Limits</h5>
                  <p>
                    View your current limits for Nobus FCS. Plan to request any
                    limit increases in advance of the time that you'll need
                    them.
                  </p>
                  <p>
                    Nobus FCS provides different resources that you can use.
                    These resources include images, instances, volumes, and
                    snapshots. When you create your NCS account, we set default
                    limits (also referred to as quotas) on these resources.
                  </p>
                  <p>
                    The Nobus FCS console provides limit information for the
                    resources managed by the Nobus FCS and Nobus Data center
                    consoles. You can request an increase for many of these
                    limits. Use the limit information that we provide to manage
                    your NCS infrastructure. Plan to request any limit increases
                    in advance of the time that you'll need them.
                  </p>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <h3 class="py-2">Back Up and Recovery</h3>
                <p>
                  Regularly back up yourFBS volumes using NobusFBS snapshots,
                  and create a Nobus Machine Image (NMI) from your instance to
                  save the configuration as a template for launching future
                  instances. Deploy critical components of your application in
                  the Availability Zone, and replicate your data appropriately.
                </p>
                <p>
                  Ensure that you are prepared to handle failover. For a basic
                  solution, you can manually attach a network interface or
                  Flexible IP address to a replacement instance. For an
                  automated solution, you can use Nobus FCS Auto Scaling.
                  Regularly test the process of recovering your instances and
                  NobusFBS volumes if they fail.
                </p>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
  );
}

export default BestPractices;
