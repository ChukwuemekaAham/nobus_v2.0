import React from "react";

function DataServices() {
  return (
    <div id="data-services" className="py-10">
      <h2 className="pb-5">Data Services</h2>

      <div className="pt-5 space-y-5">
        <h4>Nobus FBS extendable volumes</h4>
        <p>
          You can increase the volume size, change the volume type, or reset the
          performance of your FBS volumes with Nobus FBS extendable volumes.
          without detaching the volume or restarting the instance. Enabling you
          to continue using your application while the changes are effecting. In
          some cases, you must stop the instance or detach the volume for
          modification to continue.
        </p>
        <p>
          After provisioning much IOPS on an existing volume, you may need to do
          one of the following to see the full performance improvements:
        </p>
        <p>1. Detach and attach the volume.</p>
        <p>2. Restart the instance</p>

        <p>
          when you make changes to a volume that has not been fully initialized,
          there is an addition in modification time. when changes to a volume
          has completed, wait at least five (5) hours and ensure that the volume
          is in the available state before attempting extra modifications to the
          same volume. No charges are incured while making changes to the
          confguration of a volume until the volume modification starts.
        </p>
        <div className="space-y-5">
          <h6>To extend a FBS volume using the console</h6>
          <ol class="pl-4">
            <li>
              Open the Nobus FCS console at{" "}
              <a href="https://cloud.nobus.io/project/">
                https://cloud.nobus.io/
              </a>
              .
            </li>
            <li>
              Select Volumes, choose the volume to extend, and then choose
              Actions, Extend Volume.
            </li>
            <li>To extend the size, enter a value (permitted) for Size.</li>
            <li>Click the Extend volume button.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default DataServices;
