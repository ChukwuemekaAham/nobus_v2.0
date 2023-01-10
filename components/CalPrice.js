import React from "react";
import { useState, useEffect } from "react";

const CalPrice = () => {
  const vcpu_unit_price = 100;
  const ram_unit_price = 83;
  const fos_unit_price = 2;
  const volume_unit_price = 3;

  const [num_ram, setnum_ram] = useState(4);
  const [local_disk, setlocal_disk] = useState(30);
  const [num_cores, setnum_cores] = useState("");
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
  const [runtime, setruntime] = useState("30");
  const [inst_total_price, setinst_total_price] = useState("");
  const [FBS_total_price, setFBS_total_price] = useState("");
  const [FBS_price, setFBS_price] = useState("");
  const [FOS_total_price, setFOS_total_price] = useState("");
  const [FOS_price, setFOS_price] = useState("");
  const [inst_daily_price, setinst_daily_price] = useState("");
  const [FBS_runtime, setFBS_runtime] = useState("30");
  const [FOS_runtime, setFOS_runtime] = useState("30");
  const [fcs_result_message, setfcs_result_message] = useState("");
  const [FBS_result_message, setFBS_result_message] = useState("");
  const [FOS_result_message, setFOS_result_message] = useState("");
  const [fcs_result_class, setfcs_result_class] = useState("");
  const [FBS_result_class, setFBS_result_class] = useState("");
  const [FOS_result_class, setFOS_result_class] = useState("");
  const [success, setsuccess] = useState(false);
  const [error, seterror] = useState(false);
  const [fcs_success, setfcs_success] = useState(false);
  const [fcs_error, setfcs_error] = useState(false);
  const [FBS_success, setFBS_success] = useState(false);
  const [FBS_error, setFBS_error] = useState(false);
  const [FOS_success, setFOS_success] = useState(false);
  const [FOS_error, setFOS_error] = useState(false);
  const [error_message, seterror_message] = useState("");

  const update_inst_vol = (e) => {
    let os = setos_type(e.target.value);

    if (os == "windows") {
      min_vol = "50";
      local_disk = "50";
    } else if (os == "ubuntu") {
      min_vol = "30";
      local_disk = "30";
    } else if (os == "redhat") {
      min_vol = "30";
      local_disk = "30";
    } else if (os == "fedora") {
      min_vol = "30";
      local_disk = "30";
    } else if (os == "debian") {
      min_vol = "30";
      local_disk = "30";
    } else if (os == "suse") {
      min_vol = "30";
      local_disk = "30";
    } else {
      min_vol = "";
    }
  };

  const update_inst_data = (e) => {
    let instance_type = setinst_type(e.target.value);

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
    } else {
      num_cores = "";
      num_ram = "";
    }
  };

  const calc_price = () => {
    let cores = parseInt(num_cores);
    let ram = parseInt(num_ram);

    console.log(typeof cores);
    console.log(typeof ram);

    let FBS_data = parseInt(FBS_vol_size) * parseInt(FBS_vol_count);
    let instance_vol_data = parseInt(local_disk);

    let core_price = cores * vcpu_unit_price;
    let ram_price = ram * ram_unit_price;
    let instance_volume_price = instance_vol_data * volume_unit_price;
    let FBS_price = FBS_data * volume_unit_price;

    FBS_price = FBS_price;

    let inst_daily_price = core_price + ram_price + instance_volume_price;
    inst_daily_price = inst_daily_price;

    daily_total_price = inst_daily_price + FBS_price;

    let inst_total_price = inst_daily_price * parseInt(runtime);
    let FBS_total_price = FBS_price * parseInt(FBS_runtime);

    inst_total_price = inst_total_price;
    FBS_total_price = FBS_total_price;

    total_price = inst_total_price + FBS_total_price;

    if (total_price) {
      success = true;
      error = false;
    } else {
      success = false;
      error = true;
      error_message = `Error Occurred Couldn't Calculate Total Price \n
            This is mainly due to incomplete data`;
    }
  };

  const calc_fcs_price = () => {
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

    if (inst_total_price) {
      fcs_success = true;
      fcs_error = false;
    } else {
      fcs_success = false;
      fcs_error = true;
      error_message = `Error Occurred Couldn't Calculate Fcs Price \n
            This is mainly due to incomplete data`;
    }
  };

  const calc_FBS_price = () => {
    let FBS_data = parseInt(FBS_vol_size) * parseInt(FBS_vol_count);
    let FBS_price = FBS_data * volume_unit_price;

    let FBS_total_price = FBS_price * parseInt(FBS_runtime);
    FBS_total_price = FBS_total_price;
    FBS_price = FBS_price;

    if (FBS_total_price) {
      FBS_success = true;
      FBS_error = false;
    } else {
      FBS_success = false;
      FBS_error = true;
      error_message = `Error Occurred Couldn't Calculate FBS Price \n
            This is mainly due to incomplete data`;
    }
  };

  const calc_FOS_price = () => {
    let FOS_data = parseInt(FOS_vol_size);
    let FOS_price = FOS_data * fos_unit_price;

    let FOS_total_price = FOS_price * parseInt(FOS_runtime);
    FOS_total_price = FOS_total_price;
    FOS_price = FOS_price;

    if (FOS_total_price) {
      FOS_success = true;
      FOS_error = false;
    } else {
      FOS_success = false;
      FOS_error = true;
      error_message = `Error Occurred Couldn't Calculate FOS Price \n
            This is mainly due to incomplete data. \n
            The minimum object storage is 1GB.`;
    }
  };
  return (
    <div>
      <div>
        <h2 class="text-center text-bold text-muted">FCS Cost Estimator</h2>
      </div>

      <div class="card-body shadow lg round">
        <div class="input-group mb-3">
          <div class="input-group-prepend shadow lg round">
            <label class="input-group-text" for="inputGroupSelect01">
              Operating System
            </label>
          </div>

          <select
            class=""
            value={os_type}
            onChange={update_inst_vol}
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
        <div class="input-group mb-3">
          <div class="input-group-prepend shadow lg round">
            <label class="input-group-text" for="inputGroupSelect01">
              Flavor
            </label>
          </div>
          <select
            class="custom-select"
            value={inst_type}
            onChange={update_inst_data}
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
        <div class="input-group mb-3">
          <div class="input-group-prepend shadow lg round">
            <span class="input-group-text" id="basic-addon1">
              VCPU(Cores)
            </span>
          </div>
          <input
            type="number"
            class="form-control disabled"
            value={setnum_cores}
            placeholder="Number of Cores"
            aria-label="Cores"
            aria-describedby="basic-addon1"
            disabled
          />
        </div>
        <div class="input-group mb-3 ">
          <div class="input-group-prepend shadow lg round">
            <span class="input-group-text" id="basic-addon1">
              Ram(GB)
            </span>
          </div>
          <input
            type="number"
            class="form-control disabled"
            placeholder="Ram(GB)"
            value={setnum_ram}
            aria-label="Ram"
            aria-describedby="basic-addon1"
            disabled
          />
        </div>
        <div class="input-group mb-3 ">
          <div class="input-group-prepend shadow lg round">
            <span class="input-group-text" id="basic-addon1">
              Local Disk(GB)
            </span>
          </div>
          <input
            type="number"
            class="form-control disabled"
            placeholder="Root Disk(GB)"
            value={setlocal_disk}
            min={setmin_vol}
            aria-label="Disk"
            aria-describedby="basic-addon1"
            disabled
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend shadow lg round">
            <label class="input-group-text" for="inputGroupSelect01">
              Estimated Instance Runtime
            </label>
          </div>
          <select
            class="custom-select"
            v-model="runtime"
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

        <button
          class="btn btn-outline-secondary btn-sm btn-block shadow lg round"
          onclick="calc_fcs_price"
        >
          Get FCS Estimate
        </button>
        <div class="result">
          <div v-if="fcs_success">
            <div class="card shadow lg round">
              <div class="card-header shadow lg round">
                <div class="card-title text-center">
                  <h2>Results</h2>
                </div>
              </div>
              <div class="card-body shadow lg round">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    Total Daily Fcs Price: &#8358;[[inst_daily_price]]
                  </li>
                  <li class="list-group-item">
                    Total Fcs Price: &#8358;[[inst_total_price]]
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div v-if="fcs_error">
            <div class="card text-white bg-danger shadow lg round">
              <div class="card-header shadow lg round">
                <div class="card-title text-center">
                  <h2>Results</h2>
                </div>
              </div>
              <div class="card-body shadow lg round">
                <p class="text-lead">[[ error_message ]]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalPrice;
