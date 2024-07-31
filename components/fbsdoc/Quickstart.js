import React from "react";

function Quickstart() {
  return (
    <div id="quickstart" className="py-10">
      <h2 className="pb-10">Quickstart Guide</h2>

      <div>
        <div className="border-l-2 border-l-blue-500 bg-blue-100 p-2 rounded-md mr-auto max-w-lg">
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
            You can create a Nobus FBS volume that you can then attach to any
            running FCS instance or detach a volume and attach it to another
            instance at any time. within the same Availability Zone
          </p>
        </div>
      </div>

      <div className="pt-10">
        <h3>Creating a Nobus FBS Volume</h3>
        <div className="pt-5 space-y-5">
          <h4>Method of Creating a Volume</h4>
          <ol>
            <li>
              <a href="https://cloud.nobus.io/">Log in to the dashboard.</a>
            </li>
            <li>
              <p>
                Select the appropriate project from the drop down menu at the
                top left.
              </p>
            </li>
            <li>
              <p>
                On the <span class="step-item">Project</span> tab, open the{" "}
                <span className="step-item">Volumes</span>
                tab and click <span className="step-item">Volumes</span>{" "}
                category.
              </p>
            </li>

            <li>
              <p>
                Click <span className="step-item">Create Volume</span>.
              </p>
              <p>
                In the dialog box that opens, enter or select the following
                values.
              </p>
              <p>
                <span className="step-item">Volume Name</span>: Specify a name
                for the volume.
              </p>
              <p>
                <span className="step-item">Description</span>: Optionally,
                provide a brief description for the volume.
              </p>
              <p>
                <span className="step-item">Volume Source</span>: Select one of
                the following options:
              </p>
              <ul className="list-disc">
                <li>
                  <p>
                    No source, empty volume: Creates an empty volume. An empty
                    volume does not contain a file system or a partition table.
                  </p>
                </li>
                <li>
                  <p>
                    Snapshot: If you choose this option, a new field for
                    <span className="step-item">
                      Use snapshot as a source
                    </span>{" "}
                    displays. You can select the snapshot from the list.
                  </p>
                </li>
                <li>
                  <p>
                    Image: If you choose this option, a new field for{" "}
                    <span className="step-item">Use image as a source</span>{" "}
                    displays. You can select the image from the list.
                  </p>
                </li>
                <li>
                  <p>
                    Volume: If you choose this option, a new field for
                    <span className="step-item">
                      Use volume as a source
                    </span>{" "}
                    displays. You can select the volume from the list. Options
                    to use a snapshot or a volume as the source for a volume are
                    displayed only if there are existing snapshots or volumes.
                  </p>
                </li>
              </ul>
              <p>
                <span className="step-item">Type</span>: Leave this field blank.
              </p>
              <p>
                <span className="step-item">Size (GB)</span>: The size of the
                volume in gibibytes (GiB).
              </p>
              <p>
                <span className="step-item">Availability Zone</span>: Select the
                Availability Zone from the list. By default,{" "}
                <code className="code">nova</code>.
              </p>
            </li>
            <li>
              <p>
                Click <span className="step-item">Create Volume</span>.
              </p>
            </li>
          </ol>
          <p>
            The dashboard shows the volume on the{" "}
            <span className="step-item">Volumes</span> tab.
          </p>
        </div>
      </div>

      <div className="pt-5">
        <h3>Attaching a Nobus FBS Volume to an Instance</h3>
        <p>
          You can attach an available FBS volume to one of your instances that
          is in the same Availability Zone as the volume.
        </p>
        <div className="pt-5 space-y-5">
          <h4>To attach a FBS volume to an instance using the console</h4>
          <ol>
            <li>
              <a href="https://cloud.nobus.io/">Log in to the dashboard.</a>
            </li>
            <li>
              <p>
                Select the appropriate project from the drop down menu at the
                top left.
              </p>
            </li>
            <li>
              <p>
                On the <span class="step-item">Project</span> tab, open the{" "}
                <span class="step-item">Volumes</span> tab and click{" "}
                <span class="step-item">Volumes</span> category.
              </p>
            </li>
            <li>
              <p>
                Select the volume to add to an instance and click
                <span class="step-item">Manage Attachments</span>.
              </p>
            </li>
            <li>
              <p>
                In the <span class="step-item">Manage Volume Attachments</span>{" "}
                dialog box, select an instance.
              </p>
            </li>
            <li>
              <p>
                Enter the name of the device from which the volume is accessible
                by the instance.
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
                  {" "}
                  The actual device name might differ from the volume name
                  because of hypervisor settings.
                </p>
              </div>
            </li>
            <li>
              <p>
                Click <span class="step-item">Attach Volume</span>.
              </p>
              <p>
                The dashboard shows the instance to which the volume is now
                attached and the device name.
              </p>
            </li>
          </ol>
          <p>
            You can view the status of a volume in the Volumes tab of the
            dashboard. The volume is either Available or In-Use. You can log in
            to the instance and mount, format, and use the disk.
          </p>
          <p></p>
        </div>
      </div>
      <div className="pt-5">
        <h3>See Nobus FBS Volume Information</h3>
        <div className="pt-5 space-y-5">
          <h4>To view information about a FBS volume using the console</h4>
          <ol>
            <li>
              Open the <a href="https://cloud.nobus.io/">Nobus FCS console</a>
            </li>
            <li>
              In the navigation pane, choose{" "}
              <span className="step-item">Volumes</span>.
            </li>
            <li>
              To view more information about a volume, select it. In the details
              pane, you can inspect the information provided about the volume.
            </li>
            <li>
              In the details pane, you can inspect the information provided
              about the volume.
            </li>
          </ol>

          <h4>To view the FBS volumes that are attached to an instance</h4>
          <ol>
            <li>
              Open the <a href="https://cloud.nobus.io/"> Nobus FCS console</a>.
            </li>
            <li>
              In the navigation pane, choose{" "}
              <span className="step-item">Instances</span>.
            </li>
            <li>To view more information about an instance, select it.</li>
            <li>
              In the details pane, you can inspect the information provided
              about root and block devices.
            </li>
          </ol>
        </div>
      </div>
      <div className="pt-5">
        <h3>Edit a Nobus FBS Volume</h3>
        <div className="pt-5 space-y-5">
          <h4>To edit a Nobus FBS volumes</h4>
          <ol>
            <li>
              <a href="https://cloud.nobus.io/">Log in to the dashboard</a>.
            </li>
            <li>
              <p>
                Select the appropriate project from the drop down menu at the
                top left.
              </p>
            </li>
            <li>
              <p>
                On the <span className="step-item">Project</span> tab, open the{" "}
                <span className="step-item">Volumes</span> tab and click{" "}
                <span className="step-item">Volumes</span> category.
              </p>
            </li>
            <li>Select the volume that you want to edit.</li>
            <li>
              In the <span className="step-item">Actions</span> column, click{" "}
              <span className="step-item">Edit Volume</span>.
            </li>
            <li>
              In the <span className="step-item">Edit Volume</span> dialog box,
              update the name and description of the volume.
            </li>
            <li>
              Click <span className="step-item">Edit Volume</span>.
            </li>
          </ol>
        </div>
      </div>
      <div className="pt-5 space-y-5">
        <h3>Detaching a Nobus FBS Volume from an Instance</h3>
        <p>
          Nobus FBS volume may be expressly detached from an instance or the
          instance can be terminated. Unmount the volume from the instance if
          the instance is running. If an instance's root device is a FBS volume,
          you must interrupt the instance before detaching the volume.
        </p>
        <p>
          You can reattach a volume that you detached (without unmounting it),
          but it might not getthe same mount point. If there were writes to the
          volume in progress when it was detached, the data on the volume might
          be out of sync.
        </p>
        <div className="pt-5 space-y-5">
          <h4>To detach a FBS volume using the console</h4>
          <ol>
            <li>
              <h6>
                Open the Nobus FCS console at
                <a href="https://cloud.nobus.io/project/">
                  https://cloud.nobus.io/
                </a>
                .
              </h6>
            </li>
            <li>
              <h6>
                In the navigation pane, choose{" "}
                <span className="step-item">Volumes</span>.
              </h6>
            </li>
            <li>
              <h6>
                Select a volume and choose{" "}
                <span className="step-item">Actions</span>,{" "}
                <span className="step-item">Detach Volume</span>.
              </h6>
            </li>
            <li>
              <h6>
                In the confirmation dialog box, choose{" "}
                <span className="step-item">Yes, Detach</span>.
              </h6>
            </li>
          </ol>
        </div>
      </div>
      <div className="pt-5">
        <h3>Deleting a Nobus FBS Volume</h3>
        <p>
          when you no longer need a Nobus FBS volume, you can delete it. After
          deletion, the volume can't be attached to any instance because the
          data is gone . You can store a snapshot of the volume, which you can
          use to re-form the volume later before you delete the volume.
        </p>
        <p>To delete a volume, it must not be attached to an instance.</p>
        <div className="pt-5 space-y-5">
          <h4>To delete a FBS volume using the console</h4>
          <ol>
            <li>
              <h6>
                Open the Nobus FCS console at
                <a href="https://cloud.nobus.io/">https://cloud.nobus.io/</a>.
              </h6>
            </li>
            <li>
              <h6>
                In the navigation pane, choose{" "}
                <span className="step-item">Volumes</span>.
              </h6>
            </li>
            <li>
              <h6>
                Select a volume and choose{" "}
                <span className="step-item">Actions</span>,{" "}
                <span className="step-item">Delete Volume</span>.
              </h6>
            </li>

            <li>
              <p>
                Click <span class="guilabel">Delete Volumes</span> and confirm
                your choice.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Quickstart;
