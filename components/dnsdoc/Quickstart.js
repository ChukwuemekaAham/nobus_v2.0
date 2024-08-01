import { Tab } from "@headlessui/react";
import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Quickstart() {
  const categories = ["Add Domains", "Add Subdomain", "Delete Domain"];
  return (
    <div id="quickstart" className="py-10">
      <h2 className="pb-5">DNS Quickstart Guide</h2>
      <p>
        To set up a domain with Nobus, you need to add it (and any of its
        existing DNS records) to the dashboard, then delegate the domain by
        updating your registrar to use Nobus's name servers.
      </p>
      <div className="my-5 border-l-2 border-l-blue-500 bg-blue-100 p-2 rounded-md mr-auto max-w-lg text-justify">
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
          If the domain is already in use, recreate the domain's records on
          Nobus before delegating the domain to avoid downtime.
        </p>
      </div>
      <div className="space-y-5">
        <ol>
          <li>
            <p>
              <a href=" https://cloud.nobus.io/project/">
                Log in to the Nobus Management Dashboard
              </a>
            </p>

            <p>
              Goto <span className="step-item">Project &gt; DNS &gt;</span>
            </p>
            <p>
              click <span className="step-item">Create</span> in the top right.
            </p>
          </li>
          <li>
            <p>
              In the <span className="step-item">Enter Domain</span> section,
              enter the domain name.
            </p>
            <p>
              This is basically domain, such as{" "}
              <code className="code">ns2.nobus.io</code>. To add subdomains,
              like
              <code className="code">www.ns2.nobus.io</code> or{" "}
              <code className="code">app.ns2.nobus.io</code>, create DNS records
              for them after adding the main domain.
            </p>
          </li>
          <li>
            <p>
              Click <span className="step-item">Add Domain</span>. This takes
              you to the
              <span>Create Record Set</span> page and adds NS records for the
              domain on Nobus's name servers.
            </p>
          </li>

          <p>
            For each record, select the record type, fill in the necessary data,
            and click <span className="step-item">Create Record</span>.
          </p>
        </ol>
        <p>
          <em>Example record </em>; you could add a subdomain for your web-app
          server such as <span className="step-item">app.ns2.nobus.io</span>
          and enable an A record that points to that subdomain.
        </p>

        <div>
          DNS A record, that maps your domain name to the server’s public IP
          address ( you cannot use your Server's private IP since they
          unaccessible from outside your own private network).
          <pre className="step-item"> Name Type Address TTL </pre>
          <pre className="code">app.ns2.nobus.io A 102.223.23.2 700</pre>
        </div>
        <p>
          The TTL sets the time-to-live in seconds. This is the amount of time
          the record is cached by a dns resolver. note that longer TTL making
          updates slower.
        </p>

        <p>
          Delegate your domain by pointing your domain name to Nobus's name
          servers through your registrar.
        </p>
      </div>

      <div className="w-full px-2 py-16 sm:px-0">
        <Tab.Group vertical>
          <div className="grid grid-cols-1">
            <Tab.List className="flex-col max-w-sm rounded-xl bg-gray-100">
              <h4 className="py-2 pl-2">TOPICS</h4>
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
                <h3>Add Domains</h3>

                <div className="space-y-5">
                  <div>
                    <p>
                      To add a domain from the{" "}
                      <a href=" https://cloud.nobus.io/project/">
                        Nobus Management Dashboard
                      </a>
                    </p>

                    <p>
                      Goto{" "}
                      <span className="step-item">
                        Project &gt; DNS&gt; Zones
                      </span>
                      , click the <span className="step-item">Create Zone</span>
                    </p>

                    <p>
                      This brings you to the{" "}
                      <span className="step-item">Domains (zone)</span> tab.
                      Enter your domain into the{" "}
                      <span className="step-item">Enter domain</span> field,
                      then click <span className="step-item">Submit</span>.
                    </p>

                    <p>
                      The system performs a DNS lookup to see if the domain has
                      already been added to Nobus. If the domain has not been
                      previously added to Nobus's DNS service, it will be added.
                      otherwise, it will not be created
                    </p>
                    <p>
                      Domains you've added are listed on the{" "}
                      <span className="step-item">Domains</span> dashboard.
                    </p>

                    <p>
                      you can click the name to view and modify its DNS records.
                    </p>

                    <p>
                      You can add records in the{" "}
                      <span className="step-item">Create record set</span>{" "}
                      section. The{" "}
                      <span className="step-item">DNS records</span> section
                      lists any existing records for the domain, and you can
                      update or delete records by clicking the{" "}
                      <span className="step-item">More</span> menu.
                    </p>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <h3>Add Subdomain</h3>

                <div className="space-y-5">
                  <p>
                    A subdomain is a domain that is part of an apex domain. For
                    example, www.example.com and goal.example.com are subdomains
                    of the example.com domain, which in turn is a subdomain of
                    the <em>com</em> apex domain (TLD). Subdomains also point
                    traffic to a particular IP address.
                  </p>

                  <p>
                    {" "}
                    This example uses the <em>A record</em> to give a basic
                    understanding of how to add a new hostname to your domain
                    name and create records for it. Also, follow this procedure
                    to set up a hostname using any DNS record supported by
                    nobus.
                  </p>

                  <p>Ensure you have met the following requirements below:</p>
                  <ul>
                    <li>
                      <p>
                        Register a domain name, such as{" "}
                        <code className="code">ns2.nobus.com</code>. You can
                        purchase one from a domain name registrars like as the
                        following.
                      </p>

                      <div class="overflow-x-auto my-5">
                        <table class="w-full text-left table-auto">
                          <tbody class="divide-y">
                            <tr class="bg-gray-100">
                              <td class="px-4 py-2">
                                <a
                                  href="https://www.ionos.com/help/domains/configuring-your-ip-address/change-a-domains-ip-address-a-record/?utm_source=search&amp;utm_medium=global&amp;utm_term=a%20record&amp;utm_campaign=HELP_CENTER&amp;utm_content=/help/domains/caa-records-konfigurieren/add-change-or-delete-a-caa-record/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  1and1
                                </a>
                              </td>
                              <td class="px-4 py-2">
                                <a
                                  href="https://www.enom.com/kb/kb/kb_0002_change-host-records.htm?Highlight=a%20record"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Enom
                                </a>
                              </td>
                              <td class="px-4 py-2">
                                <a
                                  href="https://billing.flokinet.is/index.php?rp=/knowledgebase/57/Nameserver.html"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  FlokiNET
                                </a>
                              </td>
                              <td class="px-4 py-2">
                                <a
                                  href="https://directnic.com/knowledge/article/142:can+i+redirect+a+subdomain%3F#/knowledge/article/164"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Directnic
                                </a>
                              </td>
                            </tr>
                            <tr class="bg-white">
                              <td class="px-4 py-2">
                                <a
                                  href="https://help.dnsmadeeasy.com/managed-dns/dns-record-types/record/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  DNSMadeEasy
                                </a>
                              </td>
                              <td class="px-4 py-2">
                                <a
                                  href="https://www.domain.com/help/article/dns-management-how-to-update-a-records"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Domain.com
                                </a>
                              </td>
                              <td class="px-4 py-2">
                                <a
                                  href="https://www.dotster.com/help/article/dns-management-how-to-update-dns-records"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Dotster
                                </a>
                              </td>
                              <td class="px-4 py-2">
                                <a
                                  href="https://help.dreamhost.com/hc/en-us/articles/215413857"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  DreamHost
                                </a>
                              </td>
                            </tr>
                            <tr class="bg-gray-100">
                              <td class="px-4 py-2">
                                <a
                                  href="https://help.blacknight.com/hc/en-us/articles/212512209"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Blacknight
                                </a>
                              </td>
                              <td class="px-4 py-2">
                                <a
                                  href="https://my.bluehost.com/cgi/help/559"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Bluehost
                                </a>
                              </td>
                              <td class="px-4 py-2">
                                <a
                                  href="https://kb.easydns.com/knowledge/how-to-make-a-dns-entry/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  EasyDNS
                                </a>
                              </td>
                              <td class="px-4 py-2">
                                <a
                                  href="https://docs.gandi.net/en/domain_names/common_operations/dns_records.html"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Gandi
                                </a>
                              </td>
                            </tr>
                            <tr class="bg-white">
                              <td class="px-4 py-2">
                                <a
                                  href="https://support.hostgator.com/articles/hosting-guide/lets-get-started/dns-name-servers/manage-dns-records-with-hostgatorenom"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  HostGator
                                </a>
                              </td>
                              <td class="px-4 py-2">
                                <a
                                  href="https://my.hostmonster.com/cgi/help/559"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  HostMonster
                                </a>
                              </td>
                              <td class="px-4 py-2">
                                <a
                                  href="https://support.melbourneit.com.au/articles/help/Domain-Name-Administration-FAQ/?q%3Dedit%2Bnameservers%26fs%3DSearch%26pn%3D1"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  MelbourneIT
                                </a>
                              </td>
                              <td class="px-4 py-2">
                                <a
                                  href="https://faq.moniker.com/create-or-delete-subdomain"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Moniker
                                </a>
                              </td>
                            </tr>
                            <tr class="bg-gray-100">
                              <td class="px-4 py-2">
                                <a
                                  href="https://www.ipage.com/help/article/domain-management-how-to-update-subdomains"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  iPage
                                </a>
                              </td>
                              <td class="px-4 py-2">
                                <a
                                  href="https://mediatemple.net/community/products/dv/204403794/how-can-i-change-the-dns-records-for-my-domain"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  MediaTemple
                                </a>
                              </td>
                              <td class="px-4 py-2">
                                <a
                                  href="https://www.godaddy.com/help/change-nameservers-for-your-domain-names-664"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  GoDaddy
                                </a>
                              </td>
                              <td class="px-4 py-2">
                                <a
                                  href="https://support.google.com/domains/answer/9211383?hl=en&amp;ref_topic=9018335"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Google Domains
                                </a>
                              </td>
                            </tr>
                            <tr class="bg-white">
                              <td class="px-4 py-2">
                                <a
                                  href="https://knowledge.web.com/subjects/article/KA-01094/en-us"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Register
                                </a>
                              </td>
                              <td class="px-4 py-2">
                                <a
                                  href="https://www.tucowsdomains.com/provider-search/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Tucows
                                </a>
                              </td>
                              <td class="px-4 py-2">
                                <a
                                  href="https://knowledge.web.com/subjects/article/KA-01094/en-us"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Network Solutions
                                </a>
                              </td>
                              <td class="px-4 py-2">
                                <a
                                  href="https://docs.ovh.com/gb/en/domains/web_hosting_how_to_edit_my_dns_zone/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  OVH
                                </a>
                              </td>
                            </tr>
                            <tr class="bg-gray-100">
                              <td class="px-4 py-2">
                                <a
                                  href="https://www.yola.com/tutorials/article/Adding-A-Records-1285944436490/Publishing_domains_and_email"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Yola
                                </a>
                              </td>
                              <td class="px-4 py-2">
                                <a
                                  href="https://www.namecheap.com/support/knowledgebase/article.aspx/434/2237/how-do-i-set-up-host-records-for-a-domain"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Namecheap
                                </a>
                              </td>
                              <td class="px-4 py-2">
                                <a
                                  href="https://www.name.com/support/articles/115004893508-Adding-an-A-record"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Name.com
                                </a>
                              </td>
                              <td class="px-4 py-2">
                                <a
                                  href="https://support.rackspace.com/how-to/creating-dns-records-with-cloud-dns/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Rackspace
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p>
                        Setting up a domain name record will take a moment to
                        propagate to other DNS servers so it is good to get them
                        done early. Contact your registrar&#8217;s support
                        centre for the most accurate information.
                      </p>
                    </li>
                    <li>Add the registered domain to your Nobus account</li>
                    <li>Delegate the domain to Nobus's name servers</li>
                  </ul>
                  <p>
                    If you have not already added a domain to your Nobus
                    account, you can follow the steps in quickstart; to add a
                    domain on Nobus.
                  </p>

                  <h4>Verify Your Domain's Delegation</h4>

                  <p>
                    click the <span className="step-item">Record Sets</span>,
                    Goto the <span className="step-item">NS Records</span>{" "}
                    section under Types.
                  </p>

                  <p>
                    If the NS records contain data, other than Nobus's name
                    server addresses ({" "}
                    <code className="code">
                      example.com. 1500 IN NS ns1.nobus.com.,ns2.nobus.com.
                    </code>{" "}
                    ), you perhaps, did not delegated the domain correctly.
                  </p>

                  <p>
                    {" "}
                    You can also use the <code className="code">dig</code>{" "}
                    command line tool to verify your domain's delegation by
                    running the command:
                  </p>

                  <pre>
                    <code className="code">
                      <span className="code">dig</span> @ns1.nobus.io{" "}
                      <span class="step-item">&lt;</span>YOUR-DOMAIN
                      <span class="step-item">&gt;</span> NS
                    </code>
                  </pre>

                  <div className="my-5 border-l-2 border-l-blue-500 bg-blue-100 p-2 rounded-md mr-auto max-w-lg text-justify">
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
                      {" "}
                      If you have changed your domain's delegation recently, it
                      may take up to 2 days for your domain's new delegation to
                      propagate through the internet.
                    </p>
                  </div>

                  <h4>Create a Hostname with an A Record</h4>
                  <p>
                    In this step, you'll add a new hostname to your domain and
                    point it to a target IP address. The target IP address can
                    be the your instances or Load Balancers public IP addresses.
                  </p>

                  <p>
                    To add the hostname from the dashboard,
                    <a
                      class="font-weight-bold"
                      href=" https://cloud.nobus.io/project/"
                      target="_blank"
                    >
                      Log in to the Nobus Management Dashboard
                    </a>
                  </p>

                  <p>
                    Goto{" "}
                    <span className="step-item">
                      Project &gt; DNS &gt; Zones
                    </span>
                    .
                  </p>
                  <p>
                    Select the domain name you would like to add the new
                    hostname to
                  </p>
                  <p>
                    Click <span className="step-item">Create Record Set</span>
                  </p>
                  <p>
                    In the <span className="step-item">Create Record Set</span>{" "}
                    window, choose the{" "}
                    <span className="step-item">A record</span>.
                  </p>
                  <p>
                    Enter the new hostname into the{" "}
                    <span className="step-item">Name</span> field. The
                    characters entered into the
                    <span className="step-item">Hostname</span> field append to
                    your domain name. Enter the target IP address (the server
                    you would like to direct traffic to) into the{" "}
                    <span className="step-item">Records</span> field. Leave the{" "}
                    <span className="step-item">TTL</span> (Time To Live)
                    duration as is, <code className="code">3600</code> seconds.
                  </p>

                  <p>
                    Click <span className="step-item">Submit</span>. The record
                    is created at the new hostname.
                  </p>

                  <h4>Test the New Hostname</h4>
                  <p>
                    In this step, you'll verify that the DNS changes have
                    propagated across the internet. Below are three different
                    methods for verifying your DNS changes.
                  </p>

                  <p>
                    All DNS records have a TTL that specifies how long a record
                    should remain in a resolver's cache before the resolver
                    should query a DNS name server for an updated set of records
                    for hostname. This means if a DNS record has a TTL of 3600
                    seconds (1 hour), a resolver will cache the record for 3600
                    seconds after it receives the initial query for a hostname.
                    DNS propagation is the process of allowing DNS records’ TTLs
                    to expire in resolver caches across the internet.
                  </p>

                  <p>
                    If you want to verify your DNS changes without needing to
                    account for propagation times, use the{" "}
                    <code className="code">dig</code> option to query Nobus's
                    name servers directly.
                  </p>

                  <p>
                    Click the <span className="step-item"> Record Sets</span>{" "}
                    tab, below the <em>Types</em>, an A record containing the
                    data of your target IP address (also below the Records)
                    should exist beside{" "}
                    <span className="step-item">A - address record</span> . If
                    no A record exist under the{" "}
                    <span className="step-item">Type </span>, check the{" "}
                    <span className="step-item">DNS records</span> section of
                    your domain in the Nobus dashboard and ensure that the
                    record was created. If the record exists, give the record at
                    least 48 hours to propagate across the internet. Otherwise,
                    try creating it again.
                  </p>

                  <ul>
                    <li>
                      <p>
                        <span className="step-item">
                          Through you web browser
                        </span>
                        You can also enter the newly created hostname into your
                        browser's URL field to ensure that the new hostname is
                        resolving to the correct website. If the website does
                        not resolve, your server may need additional
                        configuration or you may need to allow more time for the
                        new DNS record to propagate across the internet.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="step-item">
                          dig (command line tool)
                        </span>
                        You can use the BIND's dig tool to retrieve DNS record
                        information from Nobus's name servers without having to
                        account for propagation time.{" "}
                        <code className="code">dig</code>
                        DNS look up tool for macOS and Linux operating systems
                        that you can access via the terminal. On windows, you
                        can install the{" "}
                        <span className="step-item">dig tool</span> .
                      </p>
                    </li>
                  </ul>
                  <p>
                    To use <code className="code">dig</code> to see if your DNS
                    record has been set up correctly, enter the following
                    command into your terminal:
                  </p>

                  <pre>
                    <code className="code">
                      <span className="code">dig</span> @dns1.nobus.io{" "}
                      <span class="step-item">&lt;</span>your new hostname
                      <span class="step-item">&gt;</span>`
                    </code>
                  </pre>

                  <p>
                    <code className="code">dig</code> returns DNS record
                    information about your hostname. In the{" "}
                    <span className="step-item">Feed back</span>, you should see
                    the newly created A record. If no A record exists, check the{" "}
                    <span className="step-item">DNS records</span> section of
                    your domain in the Nobus dashboard and ensure that the
                    record was created.
                  </p>

                  <span className="flex mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-6 w-6 text-blue-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-mono font-semibold text-blue-400 pl-2">
                      Important:{" "}
                    </span>{" "}
                  </span>
                  <p>
                    If you are pointing your newly created hostname at a web
                    application or a separate web directory on your server, your
                    target instance or application may require additional
                    network configuration to access it from the hostname.
                  </p>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <h3>Delete Domain</h3>
                <p>
                  If you no longer want to manage the DNS records for a domain
                  on Nobus, you can delete the domain. This removes the domain
                  and its DNS records from the account.
                </p>
                <p>
                  However, deleting a domain from Nobus does not delete the
                  domain name registration. Registrations are managed by the
                  domain registrar.
                </p>
                <div className="space-y-5">
                  <p>
                    To Delete a domain from the{" "}
                    <a href=" https://cloud.nobus.io/project/">
                      Nobus Management Dashboard
                    </a>
                  </p>

                  <p>
                    Goto{" "}
                    <span className="step-item">
                      Project &gt; DNS &gt; Zones
                    </span>
                    .
                  </p>
                  <p>
                    Find the domain name you would like to delete the new
                    hostname to
                  </p>
                  <p>
                    Click the dropdown menu,{" "}
                    <span className="step-item">arrow</span> at the far right of
                    the domain you want to delete, then select{" "}
                    <span className="step-item">Delete</span>. In the
                    confirmation window, click{" "}
                    <span className="step-item">Delete Domain</span> to
                    permanently delete the domain and its records from the
                    account.
                  </p>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Quickstart;
