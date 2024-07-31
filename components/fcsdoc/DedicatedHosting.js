import React from "react";
import ScriptSnippet from "../ScriptSnippet";

function DedicatedHosting() {
  return (
    <div id="dedicated-hosting" className="py-10">
      <h1 className="pb-5">
        Dedicated hardware to support existing software licenses
      </h1>

      <div className="space-y-5">
        <p>
          Nobus FCS Dedicated Hosts allow you to use your eligible software
          licenses from vendors such as Microsoft and Oracle on Nobus FCS, so
          that you get the flexibility and cost effectiveness of using your own
          licenses, but with the resiliency, simplicity and flexibility of
          Nobus. An Nobus FCS Dedicated Host is a physical server fully
          dedicated for your use, so you can help address corporate compliance
          requirements.
        </p>
        <p>
          Nobus FCS Dedicated Host is also integrated with Nobus License
          Manager, a service which helps you manage your software licenses,
          including Microsoft Windows Server and Microsoft SQL Server licenses.
          In License Manager, you can specify your licensing terms for governing
          license usage, as well as your Dedicated Host management preferences
          for host allocation and host capacity utilization. Once setup, Nobus
          takes care of these administrative tasks on your behalf, so that you
          can seamlessly launch virtual machines (instances) on Dedicated Hosts
          just like you would launch an EC2 instance with Nobus provided
          licenses.
        </p>
        <p>
          Contact <a href="/contact">technical support</a> to start managing
          your Dedicated Hosts.
        </p>
      </div>
      <div className="space-y-5 mt-5">
        <h2>Benefits</h2>
        <div>
          <h4>Save money on licensing costs</h4>
          <p>
            Dedicated Hosts allow you to use your existing per-socket, per-core,
            or per-VM software licenses, including Windows Server, SQL Server,
            <a href="https://www.suse.com/solutions/public-cloud/">
              SUSE Linux Enterprise Server
            </a>
            ,{" "}
            <a href="http://www.redhat.com/en/technologies/cloud-computing/cloud-access">
              Red Hat Enterprise Linux
            </a>
            , or other software licenses that are bound to VMs, sockets, or
            physical cores, subject to your license terms. This helps you to
            save money by leveraging your existing investments. Learn more about
            your
            <a href="#">Windows licensing options.</a>
          </p>
        </div>
        <div>
          <h4>Help meet corporate compliance requirements</h4>
          <p>
            Some organizations need to run their instances on dedicated servers
            instead of multi-tenant servers. With Dedicated Hosts, you get a
            physical server that is dedicated for your use. Dedicated Hosts
            provide visibility and the option to control how you place your
            instances on a specific, physical server. This enables you to deploy
            instances using configurations that help address corporate
            compliance and regulatory requirements.
          </p>
        </div>
        <div>
          <h4>Automatic host maintenance with scheduling control</h4>
          <p>
            Offload undifferentiated heavy-lifting of host maintenance onto
            Nobus to reduce your operational burden, while controlling your
            maintenance event schedules to suit your business’s operational
            needs. In the rare event of a host degradation, or for planned
            maintenances, Nobus will automatically move the EC2 instances
            running on your affected host to a newly allocated dedicated host to
            ensure your workload’s high availability.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DedicatedHosting;
