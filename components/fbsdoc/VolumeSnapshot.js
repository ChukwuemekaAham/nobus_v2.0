import React from "react";

function VolumeSnapshot() {
  return (
    <div id="volume-snapshots" className="py-10">
      <h1 className=" pb-5">FBS Volume Snapshots</h1>

      <div className="space-y-5">
        <p>
          When you keep writing data in a volume, you can regularly snapshot a
          volume that will be used as a reference for new volumes. Nobus FBS can
          backup all FBS volumes and These snapshots may be used to create
          several new FBS volumes or move volumes to the available areas.The
          snapshots can be shared with specific account or made public. To take
          a snapshot it is not necessary to add the volume to a running
          instances.
        </p>
        <p>
          Although snapshots are progressively saved, only the most recent
          snapshots are maintained in restoring the volume. Snapshots of FBS
          volumes are automatically encrypted. When you create a new volume in a
          snapshot, the original volume is exactly copied when you take the
          snapshot. There is automated encryption of FBS volumes restored from
          encrypted snapshots.
        </p>
        <p>
          Group snapshots allow you to capture accurate, organized,
          crash-compatible snapshots of the FCS instance over several FBS
          volumes because the transition is automatic. You can track the status
          of your FBS snapshots through the Dashboard
        </p>
      </div>

      <div className="mr-auto my-5 max-w-sm bg-slate-100 p-4 border-l-2 border-l-slate-400">
        <h5>Items</h5>
        <ul className="list-none pl-0 ">
          <li className="hover:scale-105">
            <a
              className="hover:bg-white rounded-md p-1"
              href="#creating-nobus-fbs-snapshots"
            >
              Creating Nobus FBS Snapshots
            </a>
          </li>
          <li className="hover:scale-105">
            <a
              className="hover:bg-white rounded-md p-1"
              href="#copying-nobus-fbs-snapshot"
            >
              Copying a Nobus FBS Snapshot
            </a>
          </li>
          <li className="hover:scale-105">
            <a
              className="hover:bg-white rounded-md p-1"
              href="#sharing-nobus-fbs-snapshot"
            >
              Sharing a Nobus FBS Snapshot
            </a>
          </li>
          <li className="hover:scale-105">
            <a
              className="hover:bg-white rounded-md p-1"
              href="#deleting-nobus-fbs-snapshot"
            >
              Deleting a Nobus FBS Snapshot
            </a>
          </li>
          <li className="hover:scale-105">
            <a
              className="hover:bg-white rounded-md p-1"
              href="#viewing-nobus-fbs-snapshot-information"
            >
              Viewing Nobus FBS Snapshot Information
            </a>
          </li>
        </ul>
      </div>

      <div className="pt-5 space-y-5">
        <h3 id="creating-nobus-fbs-snapshots">Creating Nobus FBS Snapshots</h3>
        <p>
          You can create a FBS snapshot at a particular moment and use it as a
          reference to new volumes or to backup your data. Snapshots taken at a
          particular moment is created immediately, but while in progress it is
          not affected by an ongoing reads and writes to the volume.
        </p>
        <p>
          It is possible to take a snapshot of an attached volume that is in
          use. data written to your Nobus FBS volume are only recorded at the
          time of the output of the snapshot command. When the snapshot state is
          pending, the volume can be remounted and used.
        </p>
        <h4>Snapshot Encryption</h4>
        <p>
          Snapshots that are taken from encrypted volumes are automatically
          encrypted. Volumes that are created from encrypted snapshots are also
          automatically encrypted. At any point in time the data in your
          encrypted volumes and any associated snapshots are protected.
        </p>
        <h6>Consider the following when creating snapshots</h6>
        <ol>
          <li>
            Ensure that the instance is stopped before taking the snapshot when
            you create a snapshot for a FBS volume that serves as a root device.
          </li>
          <li>
            While you can take a volume snapshot when the status of a previous
            snapshot of that volume is pending, having multiple pending volume
            snapshots will result in reduced volume output until the snapshots
            complete.
          </li>
          <li>Snapshots cannot be created from hibernated instances.</li>
        </ol>
        <div className="space-y-5">
          <h4>Creating a Snapshot</h4>
          <h6>
            Take the following steps to make a snapshot of the volume listed
            using the console.
          </h6>
          <ol>
            <li>
              Open the Nobus FCS console at{" "}
              <a href="https://cloud.nobus.io/project/">
                https://cloud.nobus.io/
              </a>
              .
            </li>
            <li>
              Choose <span className="step-item">Snapshots</span> under{" "}
              <span className="step-item">Volumes</span> in the navigation pane.
            </li>
            <li>
              Choose <span className="step-item">Create Snapshot</span>.
            </li>
            <li>
              For <span className="step-item">Select resource type</span>,
              choose <span className="step-item">Volume</span>.
            </li>
            <li>
              For <span className="step-item">Volume</span>, select the volume.
            </li>
            <li>(Optional) Enter a description for the snapshot.</li>
            <li>
              (Optional) Choose <span className="step-item">Add Tag</span> to
              add tags to your snapshot. For each tag, provide a tag key and a
              tag value.
            </li>
            <li>
              Choose <span className="step-item">Create Snapshot</span>.
            </li>
          </ol>
        </div>
      </div>
      <div className="pt-5 space-y-5">
        <h3 id="copying-nobus-fbs-snapshot">Copying a Nobus FBS Snapshot</h3>
        <p>
          You could use many accounts for data center relocation and disaster
          recovery by copying snapshots across accounts. After you create a
          snapshot of a FBS volume, you can use it to create new volumes in the
          same Account. A snapshot is restricted to the Nobus Account where it
          was created.
        </p>
        <div className="space-y-5">
          <h6>To copy a snapshot using the console</h6>
          <ol>
            <li>
              Open the Nobus FCS console at{" "}
              <a href="https://cloud.nobus.io/project/">
                https://cloud.nobus.io/
              </a>
              .
            </li>
            <li>
              In the navigation pane, choose{" "}
              <span className="step-item">Snapshots</span>.
            </li>
            <li>
              Select the snapshot to copy, and then choose{" "}
              <span className="step-item">Copy</span> from the
              <span className="step-item">Actions</span> list.
            </li>
            <li>
              In the <span className="step-item">Copy Snapshot</span> dialog
              box, update the following as necessary:
              <div>
                <ul>
                  <li>
                    <span className="step-item">Destination Account</span>:
                    Select the Account where you want to write the copy of the
                    snapshot.
                  </li>
                  <li>
                    <span className="step-item">Description</span>: By default,
                    the description includes information about the source
                    snapshot so that you can identify a copy from the original.
                    You can change this description as necessary.
                  </li>
                </ul>
              </div>
            </li>
            <li>
              Choose <span className="step-item">Copy</span>.
            </li>
            <li>
              In the <span className="step-item">Copy Snapshot</span>{" "}
              confirmation dialog box, choose
              <span className="step-item">Snapshots</span> to go to the{" "}
              <span className="step-item">Snapshots</span> page in the Account
              specified, or choose <span className="step-item">Close</span>. To
              view the progress of the copy process, switch to the destination
              Account, and then refresh the{" "}
              <span className="step-item">Snapshots</span> page. Copies in
              progress are listed at the top of the page.
            </li>
          </ol>
        </div>
      </div>
      <div className="pt-5 space-y-5">
        <h3 id="sharing-nobus-fbs-snapshot">Sharing a Nobus FBS Snapshot</h3>
        <p>
          When sharing a snapshot, you give other people access to all of the
          snapshot details. Share snapshots only with people you wish to share
          all of your snapshot data with. You can share a snapshot with the
          Nobus Availability Zone you define by changing a snapshot's
          permissions. Authorized users can use the snapshots you share as the
          basis for creating their own FBS volumes, while your original snapshot
          remains unaffected. If you choose, you can make your snapshots
          available publicly to all other users.
        </p>
        <div className="space-y-5">
          <h6>To share a snapshot using the console</h6>
          <ol>
            <li>
              Open the Nobus FCS console at{" "}
              <a href="https://cloud.nobus.io/project/">
                https://cloud.nobus.io/
              </a>
              .
            </li>
            <li>
              Choose <span className="step-item">Snapshots</span> in the
              navigation pane.
            </li>
            <li>
              Select the snapshot and then choose{" "}
              <span className="step-item">Actions</span>,{" "}
              <span className="step-item">Modify Permissions</span>.
            </li>
            <li>
              Make the snapshot public or share it with specific Nobus
              Availability Zone as follows:
              <ul>
                <li>
                  To make the snapshot public, choose{" "}
                  <span className="step-item">Public</span>.
                </li>
              </ul>
            </li>
            <li>
              Then <span className="step-item">Save</span>.
            </li>
          </ol>
        </div>
      </div>
      <div className="pt-5 space-y-5">
        <h3 id="deleting-nobus-fbs-snapshot">Deleting a Nobus FBS Snapshot</h3>
        <p>
          Deleting a snapshot of a volume has no effect on the volume. Deleting
          a volume has no effect on the snapshots made from it. When you delete
          a snapshot, only the data referenced exclusively by that snapshot is
          removed. Unique data will not be deleted unless all of the snapshots
          that reference that data are deleted. Deleting previous snapshots of a
          volume does not affect your ability to restore volumes from later
          snapshots of that volume.
        </p>
        <p>
          If you make periodic snapshots of a volume, the snapshots are
          incremental. This means that only the blocks on the device that have
          changed after your last snapshot are saved in the new snapshot. Even
          though snapshots are saved incrementally, the snapshot deletion
          process is designed so that you need to retain only the most recent
          snapshot in order to restore the volume. Data that was present on a
          volume, held in an earlier snapshot or series of snapshots, that is
          subsequently deleted from that volume at a later time, is still
          considered unique data of the earlier snapshots. This unique data is
          not deleted from the sequence of snapshots unless all snapshots that
          reference the unique data are deleted.
        </p>
        <p>
          Deleting a snapshot might not reduce your organization's data storage
          costs. Other snapshots might reference that snapshot's data, and
          referenced data is always preserved. If you delete a snapshot
          containing data being used by a later snapshot, costs associated with
          the referenced data are allocated to the later snapshot.
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
            While you can delete a snapshot that is still in progress, the
            snapshot must complete before the deletion takes effect. This may
            take a long time. If you are also at your concurrent snapshot limit
            (five snapshots in progress), and you attempt to take an additional
            snapshot, you may get a <code class="code">error</code>
            message.
          </p>
        </div>
        <div className="space-y-5">
          <h6>To delete a snapshot using the console</h6>
          <ol>
            <li>
              Open the Nobus FCS console at{" "}
              <a
                class="font-weight-bold"
                href="https://cloud.nobus.io/project/"
              >
                https://cloud.nobus.io/
              </a>
              .
            </li>
            <li>
              Choose <span className="step-item">Snapshots</span> in the
              navigation pane.
            </li>
            <li>
              Select a snapshot and then choose Delete from the Actions list.
            </li>
            <li>Choose Yes, Delete.</li>
          </ol>
        </div>
      </div>
      <div className="pt-5 space-y-5">
        <h3 id="viewing-nobus-fbs-snapshot-information">
          Viewing Nobus FBS Snapshot Information
        </h3>
        <p>You can view detailed information about your snapshots.</p>

        <div className="space-y-5">
          <h6>To view snapshot information using the console</h6>
          <ol>
            <li>
              Open the Nobus FCS console at{" "}
              <a
                class="font-weight-bold"
                href="https://cloud.nobus.io/project/"
              >
                https://cloud.nobus.io/
              </a>
              .
            </li>
            <li>
              In the navigation pane select{" "}
              <span className="step-item">Snapshots</span>.
            </li>
            <li>
              Select an option from the{" "}
              <span className="step-item">Filter</span> list to decrease the
              list. You can filter your snapshots also by using the advanced
              search options. Choose the search bar to view the filters
              available. View more information about a snapshot by also
              selecting it.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default VolumeSnapshot;
