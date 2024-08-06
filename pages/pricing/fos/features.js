import Head from "next/head";
import { React, useState } from "react";
import classNames from "classnames";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer1";
import { PhoneIcon } from "@heroicons/react/outline";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Spinner from "../../../components/Spinner";

function index() {
  const router = useRouter();

  const categories = ["overview", "features", "price", "storage-category"];

  return (
    <section className="overflow-hidden">
      <Head>
        <title> Pricing - Nobus Flexible Object Storage </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="flex px-5 md:px-10 py-3 justify-between shadow-md border-y border-gray-300">
          <div className="flex">
            <h1 className="pl-2 pt-2 text-lg font-medium text-gray-500 ">
              Flexible Object Storage
            </h1>
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
        <div className="mx-10 md:mx-20">
          <div className="w-full px-2  sm:px-0">
            <Tab.Group defaultIndex={1}>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <Tab.List className="flex flex-col col-span-1 my-4 md:my-16 overflow-y-scroll">
                  <h2 className="pb-5 text-2xl font-semibold text-[#232f3e]">
                    PRICING
                  </h2>
                  {categories.map((category, index) => (
                    <Tab
                      key={category}
                      as={Link}
                      href={`/pricing/fos/${category}`}
                      className={({ selected }) =>
                        classNames(
                          "w-full py-2.5 pl-4 text-md text-left font-medium leading-5",
                          "focus:outline-none",
                          selected
                            ? "category-active text-blue-500 border-l-2 border-l-blue-500"
                            : "text-gray-800 border-l-2 border-l-gray-200 hover:text-gray-500"
                        )
                      }
                    >
                      {category}
                    </Tab>
                  ))}
                </Tab.List>

                <Tab.Panels className="flex flex-col col-span-1 md:col-span-2 lg:col-span-3 py-10 md:py-20 md:pl-20 h-[600px] overflow-y-scroll scrollbar-hide">
                  <Tab.Panel className="mx-auto text-center justify-center max-w-sm my-auto">
                    <Spinner width={10} height={10} />
                  </Tab.Panel>
                  <Tab.Panel data-headlessui-state="selected">
                    <section id="features" className="mx-auto text-justify">
                      <h2 className="pb-10">Features of Nobus FOS</h2>
                      <p>
                        Nobus FOS has a range of features that you can use to
                        organize and manage your data with support for several
                        scenerios, permitting efficient costing, and ensuring
                        protection and compliance. A single object can be up to
                        a petabytes in size Objects can be accessed directly
                        through the FOS container hostname.
                      </p>
                      <div className="space-y-5 mt-5">
                        <h3>Management of Storage</h3>
                        <p>
                          With FOS container names, prefixes, object tags, and
                          FOS Inventory, you have a range of ways to categorize
                          and report on your data, and subsequently can
                          configure other FOS features to take action. Nobus FOS
                          also supports features that help maintain data version
                          control, prevent accidental deletions, and replicate
                          data. With FOS Versioning, you can easily preserve,
                          retrieve, and restore every version of an object
                          stored in Nobus FOS, which allows you to recover from
                          unintended user actions and application failures
                        </p>
                        <p>
                          With FOS Replication, you can replicate objects (and
                          their respective metadata and object tags) into the
                          same or different Nobus Availability Zone for reduced
                          latency, compliance, security, disaster recovery, and
                          other use cases. Source FOS container replicates
                          objects into a destination container within or outside
                          a Nobus Zones.
                        </p>
                      </div>
                      <div className="space-y-5 mt-5">
                        <h3>Access management</h3>
                        <p>
                          To protect your data in Nobus FOS, by default, users
                          only have access to the FOS resources they create. You
                          can grant access to other users by using one or a
                          combination of the following access management
                          features: Nobus Identity and Access Management (IAM)
                          to create users and manage their respective access;
                          Access Control Lists (ACLs) to make individual objects
                          accessible to authorized users; container policies to
                          configure permissions for all objects within a single
                          FOS container; FOS Access Points to simplify managing
                          data access to shared data sets by creating access
                          points with names and permissions specific to each
                          application or sets of applications; and Query String
                          Authentication to grant time-limited access to others
                          with temporary URLs. Nobus FOS also supports Audit
                          Logs that list the requests made against your FOS
                          resources for complete visibility into who is
                          accessing what data.
                        </p>
                      </div>
                      <div className="space-y-5 mt-5">
                        <h3>Security</h3>
                        <p>
                          Nobus FOS offers flexible security features to block
                          unauthorized users from accessing your data. Use Data
                          center endpoints to connect to FOS resources from your
                          Nobus Data Center. Nobus FOS supports both server-side
                          encryption (with three key management options) and
                          client-side encryption for data uploads. Use FOS
                          Inventory to check the encryption status of your FOS
                          objects
                        </p>
                        <p>
                          FOS Block Public Access is a set of security controls
                          that ensures FOS containers and objects do not have
                          public access. With a few clicks in the Nobus FOS
                          Management Console, you can apply the FOS Block Public
                          Access settings to all containers within your Nobus
                          account or to specific FOS containers. Once the
                          settings are applied to an Nobus account, any existing
                          or new containers and objects associated with that
                          account inherit the settings that prevent public
                          access. FOS Block Public Access settings override
                          other FOS access permissions, making it easy for the
                          account administrator to enforce a “no public access”
                          policy regardless of how an object is added, how a
                          container is created, or if there are existing access.
                          You should enable Block Public Access for all accounts
                          and containers that you do not want publicly
                          accessible.
                        </p>
                        <p>
                          Using FOS Access Points that are restricted to a
                          Datacenter, you can easily firewall your FOS data
                          within your private network. Additionally, you can use
                          Nobus Service Control Policies to require that any new
                          FOS Access Point in your organization is restricted to
                          Datacenter-only access.
                        </p>
                        <p>
                          For your Cloud Storage Backup , CloudBerry Backup
                          solution is tested and recommended by Nobus. For
                          storage account type, specify openstack as the storage
                          provider. Use authext.nobus.io as Internal URL for the
                          Authentication Service <span>&gt;</span> Add your
                          Display name <span>&gt;</span> Add your Username{" "}
                          <span>&gt;</span>
                          Replace API Key with your password <span>
                            &gt;
                          </span>{" "}
                          Specify the name of your object storage container.
                        </p>
                      </div>
                      <div className="space-y-5 mt-5">
                        <h3>Query in place</h3>
                        <p>
                          Nobus FOS has a built-in feature and complimentary
                          services that query data without needing to copy and
                          load it into a separate analytics platform or data
                          warehouse. This means you can run big data analytics
                          directly on your data stored in Nobus FOS.
                        </p>
                      </div>
                    </section>
                  </Tab.Panel>
                  <Tab.Panel className="mx-auto text-center justify-center max-w-sm my-auto">
                    <Spinner width={10} height={10} />
                  </Tab.Panel>
                  <Tab.Panel className="mx-auto text-center justify-center max-w-sm my-auto">
                    <Spinner width={10} height={10} />
                  </Tab.Panel>
                </Tab.Panels>
              </div>
            </Tab.Group>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}

export default index;
