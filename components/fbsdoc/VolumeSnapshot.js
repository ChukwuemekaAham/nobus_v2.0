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

      <div className="mr-auto max-w-sm bg-slate-100 p-4 border-l-2 border-l-slate-400">
        <h5>Items</h5>
        <ul className="list-none pl-0">
          <li className="hover:scale-105">
            <a
              className="hover:bg-white rounded-md p-1"
              href="#creating-nobus-fbs-snapshots"
            ></a>
          </li>
          <li className="hover:scale-105">
            <a
              className="hover:bg-white rounded-md p-1"
              href="#copying-nobus-fbs-snapshot"
            ></a>
          </li>
          <li className="hover:scale-105">
            <a
              className="hover:bg-white rounded-md p-1"
              href="#sharing-nobus-fbs-snapshot"
            ></a>
          </li>
          <li className="hover:scale-105">
            <a
              className="hover:bg-white rounded-md p-1"
              href="#deleting-nobus-fbs-snapshot"
            ></a>
          </li>
          <li className="hover:scale-105">
            <a className="hover:bg-white rounded-md p-1" href="#"></a>
          </li>
        </ul>
      </div>

      <div className="pt-5 space-y-5">
        <h3 id="creating-nobus-fbs-snapshots">Creating Nobus FBS Snapshots</h3>

        <div className="space-y-5">
          <h4></h4>
          <p></p>
        </div>
      </div>
      <div className="pt-5 space-y-5">
        <h3 id="copying-nobus-fbs-snapshot">Copying a Nobus FBS Snapshot</h3>

        <div className="space-y-5">
          <h4></h4>
          <p></p>
        </div>
      </div>
      <div className="pt-5 space-y-5">
        <h3 id="sharing-nobus-fbs-snapshot">Sharing a Nobus FBS Snapshot</h3>

        <div className="space-y-5">
          <h4></h4>
          <p></p>
        </div>
      </div>
      <div className="pt-5 space-y-5">
        <h3 id="deleting-nobus-fbs-snapshot">Deleting a Nobus FBS Snapshot</h3>
        <div className="space-y-5">
          <h4></h4>
          <p></p>
        </div>
      </div>
      <div className="pt-5 space-y-5">
        <h3>Viewing Nobus FBS Snapshot Information</h3>

        <div className="space-y-5">
          <h4></h4>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default VolumeSnapshot;
