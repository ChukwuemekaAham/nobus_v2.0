import { XIcon } from "@heroicons/react/outline";
import React from "react";
import { useState, useEffect } from "react";

const CalPrice = () => {
  const vcpu_unit_price = 100;
  const ram_unit_price = 83;
  const fos_unit_price = 2;
  const volume_unit_price = 3;

  const [num_ram, setnum_ram] = useState("Ram(GB)");
  const [local_disk, setlocal_disk] = useState("Local Disk(GB)");
  const [num_cores, setnum_cores] = useState("VCPU(Cores)");
  const [inst_type, setinst_type] = useState("");
  const [os_type, setos_type] = useState("");
  const [min_vol, setmin_vol] = useState("");
  const [inst_vol, setinst_vol] = useState("");
  const [FBS_vol_type, setFBS_vol_type] = useState("");
  const [FBS_vol_size, setFBS_vol_size] = useState(0);
  const [FBS_vol_count, setFBS_vol_count] = useState(0);
  const [FOS_vol_size, setFOS_vol_size] = useState(0);
  const [daily_total_price, setdaily_total_price] = useState("");
  const [total_price, settotal_price] = useState("");
  const [inst_total_price, setinst_total_price] = useState("");
  const [FBS_total_price, setFBS_total_price] = useState("");
  const [FBS_price, setFBS_price] = useState("");
  const [FOS_total_price, setFOS_total_price] = useState("");
  const [FOS_price, setFOS_price] = useState("");
  const [inst_daily_price, setinst_daily_price] = useState("");
  const [runtime, setruntime] = useState("30");
  const [FBS_runtime, setFBS_runtime] = useState("30");
  const [FOS_runtime, setFOS_runtime] = useState("30");
  const [fcs_success, setfcs_success] = useState(false);
  const [fcs_error, setfcs_error] = useState(false);
  const [fbs_success, setfbs_success] = useState(false);
  const [fbs_error, setfbs_error] = useState(false);
  const [fos_success, setfos_success] = useState(false);
  const [fos_error, setfos_error] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(true);

  const os = os_type;

  if (os === "windows") {
    min_vol = "50";
    local_disk = "50";
  } else if (os === "ubuntu") {
    min_vol = "30";
    local_disk = "30";
  } else if (os === "redhat") {
    min_vol = "30";
    local_disk = "30";
  } else if (os === "fedora") {
    min_vol = "30";
    local_disk = "30";
  } else if (os === "debian") {
    min_vol = "30";
    local_disk = "30";
  } else if (os === "suse") {
    min_vol = "30";
    local_disk = "30";
  }

  const instance_type = inst_type;

  if (instance_type === "si1130l") {
    num_cores = "1";
    num_ram = "1";
    min_vol = "30";
    local_disk = "30";
  } else if (instance_type === "si1230l") {
    num_cores = "1";
    num_ram = "2";
    min_vol = "30";
    local_disk = "30";
  } else if (instance_type === "si2430l") {
    num_cores = "2";
    num_ram = "4";
    min_vol = "30";
    local_disk = "30";
  } else if (instance_type === "si2630l") {
    num_cores = "2";
    num_ram = "6";
    min_vol = "30";
    local_disk = "30";
  } else if (instance_type === "si4430l") {
    num_cores = "4";
    num_ram = "4";
    min_vol = "30";
    local_disk = "30";
  } else if (instance_type === "si2830l") {
    num_cores = "2";
    num_ram = "8";
    min_vol = "30";
    local_disk = "30";
  } else if (instance_type === "si4630l") {
    num_cores = "4";
    num_ram = "6";
    min_vol = "30";
    local_disk = "30";
  } else if (instance_type === "si4830l") {
    num_cores = "4";
    num_ram = "8";
    min_vol = "30";
    local_disk = "30";
  } else if (instance_type === "si41630l") {
    num_cores = "4";
    num_ram = "16";
    min_vol = "30";
    local_disk = "30";
  } else if (instance_type === "si41230l") {
    num_cores = "4";
    num_ram = "12";
    min_vol = "30";
    local_disk = "30";
  } else if (instance_type === "si42430l") {
    num_cores = "4";
    num_ram = "24";
    min_vol = "30";
    local_disk = "30";
  } else if (instance_type === "si43230l") {
    num_cores = "4";
    num_ram = "32";
    min_vol = "30";
    local_disk = "30";
  } else if (instance_type === "si81630l") {
    num_cores = "8";
    num_ram = "16";
    min_vol = "30";
    local_disk = "30";
  } else if (instance_type === "si82430l") {
    num_cores = "8";
    num_ram = "24";
    min_vol = "30";
    local_disk = "30";
  } else if (instance_type === "si83230l") {
    num_cores = "8";
    num_ram = "32";
    min_vol = "30";
    local_disk = "30";
  } else if (instance_type === "si86430l") {
    num_cores = "8";
    num_ram = "64";
    min_vol = "30";
    local_disk = "30";
  } else if (instance_type === "si166430l") {
    num_cores = "16";
    num_ram = "64";
    min_vol = "30";
    local_disk = "30";
  } else if (instance_type === "si1150w") {
    num_cores = "1";
    num_ram = "1";
    min_vol = "50";
    local_disk = "50";
  } else if (instance_type === "si2250w") {
    num_cores = "2";
    num_ram = "2";
    min_vol = "50";
    local_disk = "50";
  } else if (instance_type === "si2450w") {
    num_cores = "2";
    num_ram = "4";
    min_vol = "50";
    local_disk = "50";
  } else if (instance_type === "si2650w") {
    num_cores = "2";
    num_ram = "6";
    min_vol = "50";
    local_disk = "50";
  } else if (instance_type === "si4450w") {
    num_cores = "4";
    num_ram = "4";
    min_vol = "50";
    local_disk = "50";
  } else if (instance_type === "si2850w") {
    num_cores = "2";
    num_ram = "8";
    min_vol = "50";
    local_disk = "50";
  } else if (instance_type === "si4650w") {
    num_cores = "4";
    num_ram = "6";
    min_vol = "50";
    local_disk = "50";
  } else if (instance_type === "si4850w") {
    num_cores = "4";
    num_ram = "8";
    min_vol = "50";
    local_disk = "50";
  } else if (instance_type === "si41250w") {
    num_cores = "4";
    num_ram = "12";
    min_vol = "50";
    local_disk = "50";
  } else if (instance_type === "si41650w") {
    num_cores = "4";
    num_ram = "16";
    min_vol = "50";
    local_disk = "50";
  } else if (instance_type === "si42450w") {
    num_cores = "4";
    num_ram = "24";
    min_vol = "50";
    local_disk = "50";
  } else if (instance_type === "si43250w") {
    num_cores = "4";
    num_ram = "32";
    min_vol = "50";
    local_disk = "50";
  } else if (instance_type === "si81650w") {
    num_cores = "8";
    num_ram = "16";
    min_vol = "50";
    local_disk = "50";
  } else if (instance_type === "si82450w") {
    num_cores = "8";
    num_ram = "24";
    min_vol = "50";
    local_disk = "50";
  } else if (instance_type === "si83250w") {
    num_cores = "8";
    num_ram = "32";
    min_vol = "50";
    local_disk = "50";
  } else if (instance_type === "si86450w") {
    num_cores = "8";
    num_ram = "64";
    min_vol = "50";
    local_disk = "50";
  } else if (instance_type === "si166450w") {
    num_cores = "16";
    num_ram = "64";
    min_vol = "50";
    local_disk = "50";
  }

  const calc_price = (e) => {
    e.preventDefault();
    let cores = parseInt(num_cores);
    let ram = parseInt(num_ram);

    console.log(typeof cores);
    console.log(typeof ram);

    let FOS_data = parseInt(FOS_vol_size);
    let FOS_price = FOS_data * fos_unit_price;
    FOS_price = FOS_price;

    let FBS_data = parseInt(FBS_vol_size) * parseInt(FBS_vol_count);
    let instance_vol_data = parseInt(local_disk);

    let core_price = cores * vcpu_unit_price;
    let ram_price = ram * ram_unit_price;
    let instance_volume_price = instance_vol_data * volume_unit_price;
    let FBS_price = FBS_data * volume_unit_price;

    FBS_price = FBS_price;

    let inst_daily_price = core_price + ram_price + instance_volume_price;
    inst_daily_price = inst_daily_price;

    let daily_total_price = inst_daily_price + FBS_price + FOS_price;
    daily_total_price = daily_total_price;

    let inst_total_price = inst_daily_price * parseInt(runtime);
    let FBS_total_price = FBS_price * parseInt(FBS_runtime);
    let FOS_total_price = FOS_price * parseInt(FOS_runtime);

    inst_total_price = inst_total_price;
    FBS_total_price = FBS_total_price;
    FOS_total_price = FOS_total_price;

    let total_price = inst_total_price + FBS_total_price + FOS_total_price;
    total_price = total_price;

    setdaily_total_price(daily_total_price);
    settotal_price(total_price);

    if (total_price) {
      setSuccess(true);
    } else {
      setSuccess(false);
      setError(`Error Occurred Couldn't Calculate Total Price \n
            This is mainly due to incomplete data`);
    }
  };

  const calc_fcs_price = (e) => {
    e.preventDefault();

    let cores = parseInt(num_cores);
    let ram = parseInt(num_ram);

    let instance_vol_data = parseInt(local_disk);

    let core_price = cores * vcpu_unit_price;
    let ram_price = ram * ram_unit_price;
    let instance_volume_price = instance_vol_data * volume_unit_price;

    let inst_daily_price = core_price + ram_price + instance_volume_price;

    let inst_total_price = inst_daily_price * parseInt(runtime);
    inst_total_price = inst_total_price;
    inst_daily_price = inst_daily_price;
    setinst_total_price(inst_total_price);
    setinst_daily_price(inst_daily_price);

    if (inst_total_price) {
      setfcs_success(true);
    } else {
      setfcs_success(false);
      setfcs_error(`Error! Couldn't calculate FCS price... \n
            This is mainly due to incomplete data`);
    }
  };

  const calc_fbs_price = (e) => {
    e.preventDefault();
    let FBS_data = parseInt(FBS_vol_size) * parseInt(FBS_vol_count);
    let FBS_price = FBS_data * volume_unit_price;

    let FBS_total_price = FBS_price * parseInt(FBS_runtime);
    FBS_total_price = FBS_total_price;
    FBS_price = FBS_price;

    setFBS_total_price(FBS_total_price);
    setFBS_price(FBS_price);

    if (FBS_total_price) {
      setfbs_success(true);
    } else {
      setfbs_success(false);
      setfbs_error(`Error! Couldn't calculate FBS price... \n
            This is mainly due to incomplete data`);
    }
  };

  const calc_fos_price = (e) => {
    e.preventDefault();
    let FOS_data = parseInt(FOS_vol_size);
    let FOS_price = FOS_data * fos_unit_price;

    let FOS_total_price = FOS_price * parseInt(FOS_runtime);
    FOS_total_price = FOS_total_price;
    FOS_price = FOS_price;
    setFOS_total_price(FOS_total_price);
    setFOS_price(FOS_price);

    if (FOS_total_price) {
      setfos_success(true);
    } else {
      setfos_success(false);
      setfos_error(`Error Occurred Couldn't Calculate FOS Price \n
      This is mainly due to incomplete data. \n
      The minimum object storage is 1GB.`);
    }
  };
  return (
    <div className="grid grid-cols-1 gap-y-20 sm:gap-x-4 lg:gap-x-20 md:grid-cols-2">
      <div id="fcs" className="group ">
        <div className="rounded-3xl border shadow-lg group-hover:scale-95 bg-white">
          <div className="rounded-t-3xl shadow-lg py-4 bg-blue-600">
            <h2 className="text-xl text-white text-center font-semibold">
              FCS Cost Estimator
            </h2>
          </div>

          <form
            onSubmit={calc_fcs_price}
            className="pt-8 px-4 text-gray-700 text-base"
          >
            <div className="flex mb-5">
              <div className="bg-gray-700 rounded-l-2xl shadow-lg py-2 px-4 ">
                <label
                  className="font-semibold text-white"
                  for="inputGroupSelect01"
                >
                  Operating System
                </label>
              </div>

              <select
                className="outline-none shadow-lg rounded-r-2xl "
                value={os_type}
                onChange={(e) => setos_type(e.target.value)}
                id="inputGroupSelect01"
              >
                <option selected>Choose OS...</option>
                <option value="windows">Windows</option>
                <option value="ubuntu">Ubuntu Linux</option>
                <option value="redhat">RedHat Linux</option>
                <option value="fedora">Fedora Linux</option>
                <option value="debian">Debian Linux</option>
                <option value="suse">Suse</option>
              </select>
            </div>
            <div className="flex mb-5">
              <div className="bg-gray-700 rounded-l-2xl shadow-lg py-2 px-4">
                <label
                  className="font-semibold text-white"
                  for="inputGroupSelect01"
                >
                  Flavor
                </label>
              </div>
              <select
                className="outline-none shadow-lg rounded-r-2xl"
                value={inst_type}
                onChange={(e) => setinst_type(e.target.value)}
                id="inputGroupSelect01"
              >
                <option selected>Choose Instance Type...</option>
                <option value="si1130l">si.1.1.30l</option>
                <option value="si1230l">si.1.2.30l</option>
                <option value="si2230l">si.2.2.30l</option>
                <option value="si2430l">si.2.4.30l</option>
                <option value="si2630l">si.2.6.30l</option>
                <option value="si4430l">si.4.4.30l</option>
                <option value="si4630l">si.4.6.30l</option>
                <option value="si2830l">si.2.8.30l</option>
                <option value="si4830l">si.4.8.30l</option>
                <option value="si41230l">si.4.12.30l</option>
                <option value="si41630l">si.4.16.30l</option>
                <option value="si42430l">si.4.24.30l</option>
                <option value="si43230l">si.4.32.30l</option>
                <option value="si81630l">si.8.16.30l</option>
                <option value="si82430l">si.8.24.30l</option>
                <option value="si83230l">si.8.32.30l</option>
                <option value="si86430l">si.8.64.30l</option>
                <option value="si166430l">si.16.64.30l</option>
                <option value="si1150w">si.1.1.50w</option>
                <option value="si2250w">si.2.2.50w</option>
                <option value="si2450w">si.2.4.50w</option>
                <option value="si2650w">si.2.6.50w</option>
                <option value="si4450w">si.4.4.50w</option>
                <option value="si4650w">si.4.6.50w</option>
                <option value="si2850w">si.2.8.50w</option>
                <option value="si4850w">si.4.8.50w</option>
                <option value="si41250w">si.4.12.50w</option>
                <option value="si41650w">si.4.16.50w</option>
                <option value="si42450w">si.4.24.50w</option>
                <option value="si43250w">si.4.32.50w</option>
                <option value="si81650w">si.8.16.50w</option>
                <option value="si82450w">si.8.24.50w</option>
                <option value="si83250w">si.8.32.50w</option>
                <option value="si86450w">si.8.64.50w</option>
                <option value="si166450w">si.16.64.50w</option>
              </select>
            </div>
            <div className="flex mb-5">
              <div className="bg-gray-700 rounded-l-2xl shadow-lg py-2 px-4">
                <span className="font-semibold text-white" id="basic-addon1">
                  VCPU(Cores)
                </span>
              </div>
              {num_cores && (
                <input
                  type="number"
                  className="outline-none shadow-lg rounded-r-2xl bg-gray-200"
                  value={num_cores}
                  placeholder="Number of Cores"
                  aria-label="Cores"
                  aria-describedby="basic-addon1"
                  disabled
                />
              )}
            </div>
            <div className="flex mb-5 ">
              <div className="bg-gray-700 rounded-l-2xl shadow-lg py-2 px-4">
                <span className="font-semibold text-white" id="basic-addon1">
                  Ram(GB)
                </span>
              </div>
              {num_ram && (
                <input
                  type="number"
                  className="outline-none shadow-lg rounded-r-2xl bg-gray-200"
                  placeholder="Ram"
                  value={num_ram}
                  aria-label="Ram"
                  aria-describedby="basic-addon1"
                  disabled
                />
              )}
            </div>
            <div className="flex mb-5 ">
              <div className="bg-gray-700 rounded-l-2xl shadow-lg py-2 px-4">
                <span className="font-semibold text-white" id="basic-addon1">
                  Local Disk(GB)
                </span>
              </div>
              {local_disk && (
                <input
                  type="number"
                  className="outline-none shadow-lg rounded-r-2xl bg-gray-200"
                  placeholder="Root Disk"
                  value={local_disk}
                  min={min_vol}
                  aria-label="Disk"
                  aria-describedby="basic-addon1"
                  disabled
                />
              )}
            </div>
            <div className="flex mb-5">
              <div className="bg-gray-700 rounded-l-2xl shadow-lg py-2 px-4">
                <label
                  className="font-semibold text-white"
                  for="inputGroupSelect01"
                >
                  Estimated Instance Runtime
                </label>
              </div>
              <select
                value={runtime}
                onChange={(e) => setruntime(e.target.value)}
                className="outline-none shadow-lg rounded-r-2xl"
                id="inputGroupSelect01"
              >
                <option value="30" selected>
                  One Month(30 Days)
                </option>
                <option value="90">One Quarter(90 Days)</option>
                <option value="186">Six Months(186 Days)</option>
                <option value="366">One Year(366 Days)</option>
                <option value="1098">Three Years(1098 Days)</option>
                <option value="1830">Five Years(1830 Days)</option>
                <option value="3660">Ten Years(3660 Days)</option>
              </select>
            </div>

            <div className="px-4 pb-5 text-right sm:px-6">
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-lg tracking-wide leading-relaxed-md border border-transparent bg-blue-600 py-2 px-4 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Get FCS Estimate
              </button>
            </div>
          </form>

          <div class="result">
            {fcs_success && (
              <div
                id="fcs_success"
                className="text-white bg-green-600 rounded-b-3xl p-3"
              >
                <h2 className="text-lg text-center font-semibold ">Result</h2>

                <ul className="">
                  {inst_daily_price && (
                    <li className="list-group-item">
                      Total Daily Fcs Price: {inst_daily_price}
                    </li>
                  )}
                  {inst_total_price && (
                    <li className="list-group-item">
                      Total Fcs Price: {inst_total_price}
                    </li>
                  )}
                </ul>
              </div>
            )}
            <div id="fcs_error" className="rounded-b-3xl">
              <div className="shadow-lg rounded-b-3xl">
                <div
                  style={{ display: visible ? "block" : "none" }}
                  className=""
                >
                  {fcs_error && (
                    <div className="flex flex-wrap rounded-b-3xl bg-red-500 w-50 px-3 py-2 text-md text-white font-semibold justify-between">
                      <div className="flex w-0 flex-1 p-2">{fcs_error}</div>{" "}
                      <div className="order-2 flex-shrink-0 sm:order-3">
                        <button
                          type="button"
                          onClick={() => setVisible(!visible)}
                          className="-mr-1 p-2 bg-red-500 focus:outline-none sm:-mr-2"
                        >
                          <span className="sr-only">Dismiss</span>
                          <XIcon
                            className="h-6 w-6 text-white hover:scale-95"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="fbs" className="group">
        <div className="rounded-3xl border shadow-lg group-hover:scale-95 bg-white">
          <div className="rounded-t-3xl shadow-lg py-4 bg-blue-600">
            <h2 className="text-xl text-white text-center font-semibold">
              FBS Cost Estimator
            </h2>
          </div>

          <form
            onSubmit={calc_fbs_price}
            className="pt-8 px-4 text-gray-700 text-base"
          >
            <div className="flex mb-3">
              <div className="bg-gray-700 rounded-l-2xl shadow-lg py-2 px-4 ">
                <label
                  className="font-semibold text-white"
                  for="inputGroupSelect02"
                >
                  Volume type
                </label>
              </div>

              <select
                className="outline-none shadow-lg rounded-r-2xl "
                value={FBS_vol_type}
                onChange={(e) => setFBS_vol_type(e.target.value)}
                id="inputGroupSelect02"
              >
                {/* <option selected>Choose OS...</option> */}
                <option selected="selected">General Purpose SSD Drives</option>
              </select>
            </div>
            <div className="flex mb-5">
              <div className="bg-gray-700 rounded-l-2xl shadow-lg py-2 px-4">
                <span id="basic-addon2" className="font-semibold text-white">
                  Volume Size(GB)
                </span>
              </div>
              <input
                type="number"
                className="outline-none shadow-lg rounded-r-2xl"
                value={FBS_vol_size}
                onChange={(e) => setFBS_vol_size(e.target.value)}
                min="0"
                placeholder="Size of FBS Volume"
                aria-label="Cores"
                aria-describedby="basic-addon2"
              ></input>
            </div>
            <div className="flex mb-5">
              <div className="bg-gray-700 rounded-l-2xl shadow-lg py-2 px-4">
                <span className="font-semibold text-white" id="basic-addon2">
                  Number Of Volumes
                </span>
              </div>
              <input
                type="number"
                className="outline-none shadow-lg rounded-r-2xl"
                value={FBS_vol_count}
                onChange={(e) => setFBS_vol_count(e.target.value)}
                min="0"
                placeholder="Number of Volumes"
                aria-label="Cores"
                aria-describedby="basic-addon2"
              ></input>
            </div>

            <div className="flex mb-5">
              <div className="bg-gray-700 rounded-l-2xl shadow-lg py-2 px-4">
                <label
                  className="font-semibold text-white"
                  for="inputGroupSelect02"
                >
                  Estimated Instance Runtime
                </label>
              </div>
              <select
                value={FBS_runtime}
                onChange={(e) => setFBS_runtime(e.target.value)}
                className="outline-none shadow-lg rounded-r-2xl"
                id="inputGroupSelect02"
              >
                <option value="30" selected>
                  One Month(30 Days)
                </option>
                <option value="90">One Quarter(90 Days)</option>
                <option value="186">Six Months(186 Days)</option>
                <option value="366">One Year(366 Days)</option>
                <option value="1098">Three Years(1098 Days)</option>
                <option value="1830">Five Years(1830 Days)</option>
                <option value="3660">Ten Years(3660 Days)</option>
              </select>
            </div>

            <div className="px-4 pb-5 text-right sm:px-6">
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-lg tracking-wide leading-relaxed-md border border-transparent bg-blue-600 py-2 px-4 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Get FBS Estimate
              </button>
            </div>
          </form>

          <div class="result">
            {fbs_success && (
              <div
                id="fbs_success"
                className="text-white bg-green-600 rounded-b-3xl p-3"
              >
                <h2 className="text-lg text-center font-semibold ">Result</h2>

                <ul className="">
                  {FBS_price && (
                    <li className="list-group-item">
                      Total Daily FBS Price: {FBS_price}
                    </li>
                  )}
                  {FBS_total_price && (
                    <li className="list-group-item">
                      Total FBS Price: {FBS_total_price}
                    </li>
                  )}
                </ul>
              </div>
            )}
            <div id="fbs_error" className="rounded-b-3xl">
              <div className="shadow-lg rounded-b-3xl">
                <div
                  style={{ display: visible ? "block" : "none" }}
                  className=""
                >
                  {fbs_error && (
                    <div className="flex flex-wrap bg-red-500 rounded-b-3xl w-50 px-3 py-2 text-md text-white font-semibold justify-between">
                      <div className="flex w-0 flex-1 p-2">{fbs_error}</div>{" "}
                      <div className="order-2 flex-shrink-0 sm:order-3">
                        <button
                          type="button"
                          onClick={() => setVisible(!visible)}
                          className="-mr-1 p-2 bg-red-500 focus:outline-none sm:-mr-2"
                        >
                          <span className="sr-only">Dismiss</span>
                          <XIcon
                            className="h-6 w-6 text-white hover:scale-95"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="fos" className="group">
        <div className="rounded-3xl border shadow-lg group-hover:scale-95 bg-white">
          <div className="rounded-t-3xl shadow-lg py-4 bg-blue-600">
            <h2 className="text-xl text-white text-center font-semibold">
              FOS Cost Estimator
            </h2>
          </div>

          <form
            onSubmit={calc_fos_price}
            className="pt-8 px-4 text-gray-700 text-base"
          >
            <div className="flex mb-5">
              <div className="bg-gray-700 rounded-l-2xl shadow-lg py-2 px-4">
                <span id="basic-addon2" className="font-semibold text-white">
                  Object Storage Size(GB)
                </span>
              </div>
              <input
                type="number"
                className="outline-none shadow-lg rounded-r-2xl"
                value={FOS_vol_size}
                onChange={(e) => setFOS_vol_size(e.target.value)}
                min="0"
                placeholder="Size of FBS Volume"
                aria-label="Cores"
                aria-describedby="basic-addon2"
              ></input>
            </div>

            <div className="flex mb-5">
              <div className="bg-gray-700 rounded-l-2xl shadow-lg py-2 px-4">
                <label
                  className="font-semibold text-white"
                  for="inputGroupSelect01"
                >
                  Estimated Instance Runtime
                </label>
              </div>
              <select
                value={FOS_runtime}
                onChange={(e) => setFOS_runtime(e.target.value)}
                className="outline-none shadow-lg rounded-r-2xl"
                id="inputGroupSelect01"
              >
                <option value="30" selected>
                  One Month(30 Days)
                </option>
                <option value="90">One Quarter(90 Days)</option>
                <option value="186">Six Months(186 Days)</option>
                <option value="366">One Year(366 Days)</option>
                <option value="1098">Three Years(1098 Days)</option>
                <option value="1830">Five Years(1830 Days)</option>
                <option value="3660">Ten Years(3660 Days)</option>
              </select>
            </div>

            <div className="px-4 pb-5 text-right sm:px-6">
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-lg tracking-wide leading-relaxed-md border border-transparent bg-blue-600 py-2 px-4 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Get FOS Estimate
              </button>
            </div>
          </form>

          <div class="result">
            {fos_success && (
              <div
                id="fos_success"
                className="text-white bg-green-600 rounded-b-3xl p-3"
              >
                <h2 className="text-lg text-center font-semibold ">Result</h2>

                <ul className="">
                  {FOS_price && (
                    <li className="list-group-item">
                      Total Daily Fcs Price: {FOS_price}
                    </li>
                  )}
                  {FOS_total_price && (
                    <li className="list-group-item">
                      Total Fcs Price: {FOS_total_price}
                    </li>
                  )}
                </ul>
              </div>
            )}
            <div id="fos_error" className="rounded-b-3xl">
              <div className="shadow-lg rounded-b-3xl">
                <div
                  style={{ display: visible ? "block" : "none" }}
                  className=""
                >
                  {fos_error && (
                    <div className="flex flex-wrap bg-red-500 rounded-b-3xl w-50 px-3 py-2 text-md text-white font-semibold justify-between">
                      <div className="flex w-0 flex-1 p-2">{fos_error}</div>{" "}
                      <div className="order-2 flex-shrink-0 sm:order-3">
                        <button
                          type="button"
                          onClick={() => setVisible(!visible)}
                          className="-mr-1 p-2 bg-red-500 focus:outline-none sm:-mr-2"
                        >
                          <span className="sr-only">Dismiss</span>
                          <XIcon
                            className="h-6 w-6 text-white hover:scale-95"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="total" className="group ">
        <div className="text-right">
          <form onSubmit={calc_price}>
            <button
              type="submit"
              className="w-full inline-flex justify-center rounded-lg tracking-wide leading-relaxed-md border border-transparent bg-blue-600 py-2 px-4 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Calculate Total Estimate
            </button>
          </form>
        </div>

        <div class="result">
          {success && (
            <div id="fcs_success" className="text-white bg-gray-600 p-3">
              <h2 className="text-lg text-center font-semibold ">Result</h2>

              <ul className="">
                {daily_total_price && (
                  <li className="list-group-item">
                    Daily Total Price: {daily_total_price}
                  </li>
                )}
                {total_price && (
                  <li className="list-group-item">
                    Total Price: {total_price}
                  </li>
                )}
              </ul>
            </div>
          )}
          <div id="fcs_error" className="">
            <div className="shadow-lg">
              <div style={{ display: visible ? "block" : "none" }} className="">
                {error && (
                  <div className="flex flex-wrap bg-red-500 w-50 px-3 py-2 text-md text-white font-semibold justify-between">
                    <div className="flex w-0 flex-1 p-2">{error}</div>{" "}
                    <div className="order-2 flex-shrink-0 sm:order-3">
                      <button
                        type="button"
                        onClick={() => setVisible(!visible)}
                        className="-mr-1 p-2 bg-red-500 focus:outline-none sm:-mr-2"
                      >
                        <span className="sr-only">Dismiss</span>
                        <XIcon
                          className="h-6 w-6 text-white hover:scale-95"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalPrice;
