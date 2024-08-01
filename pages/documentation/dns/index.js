import Head from "next/head";
import { React, useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer1";
import { PhoneIcon } from "@heroicons/react/outline";
import SidebarDocs from "../../../components/SidebarDocs";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/solid";
import Quickstart from "../../../components/dnsdoc/Quickstart";

function index() {
  const [open, setOpen] = useState(true);

  return (
    <section>
      <Head>
        <title> Nobus Domains and DNS Documentation </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="flex px-5 py-3 justify-between shadow-2xl border-y border-gray-300">
          <div className="flex">
            <div className="flex">
              {!open ? (
                <button
                  type="button"
                  className="rounded-full bg-gray-100 p-2 text-gray-400 shadow-md"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <ChevronDoubleRightIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </button>
              ) : (
                <button
                  type="button"
                  className="rounded-full bg-gray-100 p-2 text-gray-400 shadow-md"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <ChevronDoubleLeftIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </button>
              )}
              <h1 className="pl-2 pt-2 text-lg font-medium text-gray-500 ">
                Domains and DNS Documentation
              </h1>
            </div>
          </div>
          <div className="flex">
            <a href="/contact/support">
              <div className="flex justify-center px-2 py-2 sm:mt-0 sm:ml-4 sm:w-40 hover:bg-blue-50 hover:shadow-lg active:scale-90 rounded cursor-pointer border font-semibold text-md bg-white text-gray-500 border-gray-400">
                <PhoneIcon className="h-6" />
                <span className="inline-flex ml-2">Support</span>
              </div>
            </a>
          </div>
        </div>
        <div className={`grid grid-cols-1 lg:grid-cols-4`}>
          <div className={`${!open && "hidden"}`}>
            <SidebarDocs open={open} setOpen={setOpen} />
          </div>

          <div
            className={`lg:col-span-3 bg-gray-200 h-[600px] overflow-y-scroll scrollbar-hide ${
              !open && "lg:col-span-4"
            }`}
          >
            <div className="p-5">
              <div className={`bg-white shadow-lg border border-gray-300`}>
                <div id="overview" className="flex-col p-5 lg:p-10">
                  <h1 className="pb-10 text-center">Nobus Domains and DNS</h1>
                  <section className="mx-auto text-justify">
                    <div className="pt-5 space-y-5">
                      <p>
                        Deploying any type of internet-base service often
                        requires setting up a domain name. For example, a domain
                        is needed to obtain SSL certificates or primarily allow
                        users to locate your web application by a pre-assigned
                        name.
                      </p>
                      <p>
                        Creating a domain in nobus, enables you to effectively
                        manage the domain's DNS records via the nobus dashboard.
                        Domain name records are used as a naming system for
                        servers, computer systems and various Internet-based
                        services.
                      </p>
                      <p>
                        Domain Name System (DNS) enables the mapping of domain
                        names to Internet resources. It translates human
                        readable domain names (for example, www.example.com) to
                        numerical IP addresses (for example, 102.223.22.22)
                        which is essential for locating these internet
                        resources. It delegate the responsibility of name
                        assignment and mapping by designating authoritative name
                        servers for each domain. Also, Network administrators
                        may delegate authority over sub-domains of their
                        allocated name space to other name servers thus,
                        ensuring a distributed and fault-tolerant service.
                      </p>
                      <p>
                        DNS management is available for Nobus all resources as
                        well as non-Nobus resources at no extra cost.
                      </p>

                      <div className="space-y-5">
                        <h3>Features </h3>

                        <ul>
                          <li>
                            <span className="font-semibold">
                              Address (A) record
                            </span>
                            ; holds the IPv4 address of a domain and is the most
                            important of these records. and are used to point a
                            domain or sub-domain to an IP address. For example,
                            your request from your browser to the subdomain
                            <span>www.example.com</span>; is directed to the
                            server with IP address 102.223.22.1.
                          </li>
                          <li>
                            <span className="font-semibold">AAAA record</span>;
                            equivalent to A record but basically for IPv6
                            addresses.
                          </li>
                          <li>
                            <span className="font-semibold">
                              Pointer (PTR) record
                            </span>
                            ; resolves an IP address to a domain or host name.
                            PTR records are used for reverse DNS lookup.
                          </li>
                          <li>
                            <span className="font-semibold">
                              Canonical (CNAME) record
                            </span>
                            ; maps a domain or sub-domain to another domain
                            without. This can be a better option when running
                            several services from a single IP address.
                          </li>
                          <li>
                            <span className="font-semibold">
                              Mail exchanger (MX) record
                            </span>
                            ; directs mail to an email server. you can setup
                            multiple MX records to point to a collection of mail
                            servers thereby ensuring redundancy.
                          </li>
                          <li>
                            <span className="font-semibold">
                              Text (TXT) record
                            </span>
                            ; lets you associate text with a hostname or zone.
                            It can be used for several purposes including
                            verification and mail security.
                          </li>
                          <li>
                            <span className="font-semibold">
                              Name Server (NS) record
                            </span>
                            ; indicates the permissive name servers. A domain
                            often has multiple name servers. Thus, NS record can
                            asscertain which server contains the actual DNS
                            records.
                          </li>
                        </ul>

                        <p>
                          Nobus name servers are{" "}
                          <code className="code">ns1.nobus.com</code> and{" "}
                          <code className="code">ns2.nobus.com</code>.
                        </p>
                        <p>
                          You can check any existing records using domain name
                          lookup tools such as <tt>nslookup</tt> or <tt>dig</tt>
                          .
                        </p>
                        <div className="p-2 bg-green-100 mr-auto max-w-sm">
                          <pre>nslookup ns1.nobus.com </pre>
                          <pre>nslookup -q=ns ns2.nobus.com </pre>

                          <pre>dig ns2.nobus.com </pre>
                          <pre>dig ns2.nobus.com txt </pre>
                        </div>

                        <p>
                          These lookup tools can be very useful when
                          troubleshooting issues with domain name records. The
                          process of creating domain name records will largely
                          depend on the domain name registrar you are using to
                          manage your domain. A good number of registrars have
                          comprehensive documentation on domain name records
                          configurations.
                        </p>

                        <p>
                          Nobus does not currently provide domain registration
                          services. To use Nobus DNS, you need to register a
                          domain name with a registrar and update your domain's
                          NS records to point to Nobus's name servers
                        </p>
                      </div>
                    </div>
                  </section>
                  <Quickstart />
                </div>
              </div>
              <div className="p-5 text-sm tracking-wide leading-relaxed">
                <p>Except otherwise...</p>
              </div>
            </div>
            <div className="overflow-hidden">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default index;
