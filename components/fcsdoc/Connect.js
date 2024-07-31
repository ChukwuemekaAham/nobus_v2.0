import { Tab } from "@headlessui/react";
import ScriptSnippet from "../ScriptSnippet";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Connect() {
  const categories = [
    "Connecting-to-linux-instance",
    "Connecting-to-windows-instance",
  ];
  return (
    <div id="connecting-to-instance" className="py-10">
      <h1 className="text-2xl md:text-3xl tracking-tight text-[#232f3e] font-semibold pb-5">
        Connecting to Your FCS Instance
      </h1>
      <div className="space-y-5">
        <p>
          Your nobus fcs instance are managed using a terminal and ssh. You'll
          need to have an SSH client and, optionally, a SSH key pair. Clients
          generally authenticate either using passwords (which are less secure
          and not recommended) or SSH keys (which are very secure and strongly
          recommended).
        </p>
        <p>
          For you to log in to your FCS Instance with SSH, you need the;{" "}
          <span className="font-semibold">IP address</span>,{" "}
          <span className="font-semibold"> default username on the server</span>{" "}
          and
          <span className="font-semibold">
            {" "}
            SSH private key that was downloaded{" "}
          </span>{" "}
          if SSH key is not being used, the default password for that username
          must be provided.
        </p>
        <p>
          At time of instance creation, your public key is automatically added
          to the SSH authorized keys list. In case you chose to upload your own
          public keys, see <a href="#">Adding ssh keys to your nobus account</a>
          .
        </p>
        <div className="mt-5 border-l-2 border-l-red-500 bg-red-100 p-2 rounded-md mr-auto max-w-md text-justify">
          <span className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 text-red-600"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                clipRule="evenodd"
              />
            </svg>{" "}
            <span className="font-mono font-semibold text-red-600 pl-2">
              Warning:
            </span>{" "}
          </span>
          <p className="text-sm pt-2 px-2">
            By default root-user login is disabled on all servers. We recommend
            using only your private key to login. Ensure to secure your private
            key file.
          </p>
        </div>
        <p>
          When your FCS Instance has been created, you can copy the IP address
          from the of your instance from the <strong>IP Address</strong> column
          in compute tab by clicking on the cloud config panel in the{" "}
          <a href="https://dashboard.nobus.io">Nobus Management dashboard</a>.
        </p>
        <p>
          The default username is <code className="code">ubuntu</code> for
          Ubuntu Linux and <code className="code">centos</code> for CentOS. You
          can connect to the FCS Instance using your preferred SSH client or
          command line.
        </p>
      </div>
      <div className="w-full px-2 py-16 sm:px-0">
        <Tab.Group vertical>
          <div className="grid grid-cols-1">
            <Tab.List className="flex-col max-w-sm rounded-xl bg-gray-100">
              <h2 className="py-2 pl-2 text-2xl font-semibold text-[#232f3e]">
                TOPICS
              </h2>
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
                <div>
                  <h2 className="py-5">
                    Connect to Your MacOS or Linux Instance
                  </h2>
                  <p className="pb-5">
                    Follow these steps to connect to your instance.{" "}
                  </p>
                  <div className="mr-auto max-w-sm bg-slate-100 p-4 border-l-2 border-l-slate-400">
                    <h5>Items</h5>
                    <ul className="list-none pl-0">
                      <li className="hover:scale-105">
                        <a
                          className="hover:bg-white rounded-md p-1"
                          href="#connecting-via-openssh"
                        >
                          Connect via Openssh
                        </a>
                      </li>
                      <li className="hover:scale-105">
                        <a
                          className="hover:bg-white rounded-md p-1"
                          href="#connecting-via-putty"
                        >
                          Connect via putty
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div id="connecting-via-openssh" className="space-y-5">
                    <h4>
                      Connect to Your Instance Via Openssh on MacOS or Linux
                    </h4>
                    <p>
                      Connect to your fcs instance through an opened terminal on
                      linux or MacOS. If you are on Windows you can install the{" "}
                      <a href="https://ubuntu.com/desktop/wsl">
                        {" "}
                        Windows Subsystem for Linx (WSL)
                      </a>{" "}
                      to access the power of a full Ubuntu terminal environment
                      on Windows or see{" "}
                      <a href="#">Connecting to your windows instance</a>
                    </p>
                    <p>
                      You will use your instance IP address to securely connect
                      with the instance through your terminal. Copy the IP
                      address and then run the following command in your
                      terminal to securely connect with your Droplet via SSH as
                      a root user.
                    </p>

                    <p>
                      First: To make the key pair known to SSH, run the{" "}
                      <span className="code">ssh-add</span> command.
                    </p>

                    <ScriptSnippet
                      script="$ssh-add yourPrivateKey.pem"
                      language="bash"
                    />

                    <p>
                      To SSH, For multiple SSH keys, specify the path to your
                      private key using the -i flag. Run the command:
                    </p>

                    <ScriptSnippet
                      script="$ssh -i /path/to/your_private_key username@server_ip"
                      language="bash"
                    />

                    <p>
                      At first log in, the server isn't known to your localhost,
                      so you'll be prompted if you're sure you want to continue
                      connecting. The terminal will then display a message like
                      this:
                    </p>

                    <div className="bg-slate-700 text-white rounded-xl p-8 mr-auto max-w-lg">
                      <p>
                        The authenticity of host '190.988.33.2 (190.988.33.2)'
                        can't be established. ECDSA key fingerprint is
                        SHA256:+Mx4ID5k4N8H7R24y+APZAoTe69hmAh9qMawyf/Lq9U. Are
                        you sure you want to continue connecting
                        (yes/no/[fingerprint])?
                      </p>
                    </div>

                    <p>
                      Type yes. If you chose a passphrase when setting up SSH,
                      you will be prompted to enter it here. If everything is
                      working, you will then be logged into your instance as a
                      user.
                    </p>

                    <div className="mt-5 border-l-2 border-l-red-500 bg-red-100 p-2 rounded-md mr-auto max-w-md text-justify">
                      <span className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-6 w-6 text-red-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                            clipRule="evenodd"
                          />
                        </svg>{" "}
                        <span className="font-mono font-semibold text-red-600 pl-2">
                          Warning:
                        </span>{" "}
                      </span>
                      <p className="text-sm pt-2 px-2">
                        You may receive a remote host identification warning:
                      </p>
                    </div>
                    <div className="bg-slate-700 text-white rounded-xl p-8 mr-auto max-w-xl">
                      <code>
                        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                        @ WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED! @
                        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                        IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
                        Someone could be eavesdropping on you right now
                        (man-in-the-middle attack)! It is also possible that a
                        host key has just been changed. The fingerprint for the
                        ECDSA key sent by the remote host is
                        SHA256:uvbiwhb85hdPiZPc1FOZp4s30O1TGzVjsh6IGkmK8CM.
                        Please contact your system administrator.
                      </code>
                    </div>
                    <p>
                      This happens most often when you've destroyed a FCS
                      Instance immediately before creating and trying to connect
                      to a new one. If the new FCS Instance gets assigned the
                      same IP address as the FCS Instance that was destroyed,
                      the host key of the old server is stored and conflicts
                      with the new host key
                    </p>

                    <p>
                      If this happens, you can delete the old FCS Instance's
                      host key from your local system with the command{" "}
                      <code className="code">ssh-keygen -R server_ip</code> and
                      then reconnect.
                    </p>
                    <p>
                      This is followed by an authentication. If you've already
                      added SSH keys (and the optional key passphrase), you can
                      now establish a secure connection to the FCS Instance.
                    </p>
                  </div>

                  <div id="connecting-via-putty" className="space-y-5">
                    <h4>Connect to Your Instance Via PuTTY on Windows</h4>
                    <p>
                      You can connect to a Windows or Linux server using PuTTY,
                      by first converting the Nobus FCS .pem private key file to
                      a .ppk file using PuTTYgen:
                    </p>

                    <div className="space-y-5">
                      <h5>1. Download and Install PuTTY and PuTTYgen:</h5>
                      <ul>
                        <li>
                          Download PuTTY and PuTTYgen from the official PuTTY
                          website{" "}
                          <a href="https://www.putty.org/">
                            (https://www.putty.org/)
                          </a>
                          .
                        </li>
                        <li>Install both applications on your local machine</li>
                      </ul>
                    </div>
                    <div className="space-y-5">
                      <h5>
                        2. Convert the .pem private key file to .ppk format
                        using PuTTYgen:
                      </h5>
                      <ul>
                        <li>Open PuTTYgen.</li>
                        <li>
                          Click "Load" and navigate to the location of your .pem
                          private key file.
                        </li>
                        <li>Select the .pem file and click "Open".</li>
                        <li>
                          PuTTYgen will display the public key information.
                          Click "Save private key" to save the file in .ppk
                          format.
                        </li>
                        <li>
                          Choose a location to save the .ppk file and click
                          "Save".
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-5">
                      <h5>
                        3. Connect to your Windows or Linux server using PuTTY:
                      </h5>
                      <ul>
                        <li>Open PuTTY.</li>
                        <li>
                          In the "Host Name (or IP address)" field, enter the
                          public DNS or IP address of your Nobus FCS instance.
                        </li>
                        <li>In the "Connection type" section, select "SSH".</li>
                        <li>
                          In the left-hand menu, navigate to "Connection" -
                          "SSH" - "Auth"
                        </li>
                        <li>
                          Click "Browse" and navigate to the .ppk file you saved
                          earlier.
                        </li>
                        <li>Click "Open" to establish the connection.</li>
                      </ul>
                    </div>
                    <div className="space-y-5">
                      <h5>4. Authenticate and connect to your server:</h5>
                      <ul>
                        <li>
                          If prompted, enter the username for your server. The
                          default username for an Ubuntu instance is "ubuntu".
                        </li>
                        <li>
                          PuTTY will connect to your server, and you should be
                          presented with a command prompt.
                        </li>
                      </ul>
                    </div>
                    <p>
                      That's it! You have now successfully connected to your
                      Windows or Linux server using PuTTY, after converting the
                      Nobus FCS .pem private key file to a .ppk file using
                      PuTTYgen.
                    </p>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="space-y-5">
                  <h2 className="py-5">Connecting to Your Windows Instance</h2>
                  <p>
                    Remote Desktop is disabled on Nobus FCS instances created
                    from Windows images available on the management console by
                    default. You can enable Remote Desktop through the
                    powershell or command prompt after you ssh to your windows
                    instance by public key authentication. Remote Desktop uses
                    the Remote Desktop Protocol (RDP) and enables you to connect
                    to and use your instance in the same way you use a computer
                    sitting in front of you. It is available on most editions of
                    Windows and available for MacOS.
                  </p>

                  <p>
                    You can connect to a Windows server using PuTTY, by first
                    converting the Nobus FCS .pem private key file to a .ppk
                    file using PuTTYgen:
                  </p>

                  <div className="space-y-5">
                    <h5>1. Download and Install PuTTY and PuTTYgen:</h5>
                    <ul>
                      <li>
                        Download PuTTY and PuTTYgen from the official PuTTY
                        website{" "}
                        <a href="https://www.putty.org/">
                          (https://www.putty.org/)
                        </a>
                        .
                      </li>
                      <li>Install both applications on your local machine</li>
                    </ul>
                  </div>
                  <div className="space-y-5">
                    <h5>
                      2. Convert the .pem private key file to .ppk format using
                      PuTTYgen:
                    </h5>
                    <ul>
                      <li>Open PuTTYgen.</li>
                      <li>
                        Click "Load" and navigate to the location of your .pem
                        private key file.
                      </li>
                      <li>Select the .pem file and click "Open".</li>
                      <li>
                        PuTTYgen will display the public key information. Click
                        "Save private key" to save the file in .ppk format.
                      </li>
                      <li>
                        Choose a location to save the .ppk file and click
                        "Save".
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-5">
                    <h5>
                      3. Connect to your Windows or Linux server using PuTTY:
                    </h5>
                    <ul>
                      <li>Open PuTTY.</li>
                      <li>
                        In the "Host Name (or IP address)" field, enter the
                        public DNS or IP address of your Nobus FCS instance.
                      </li>
                      <li>In the "Connection type" section, select "SSH".</li>
                      <li>
                        In the left-hand menu, navigate to "Connection" - "SSH"
                        - "Auth"
                      </li>
                      <li>
                        Click "Browse" and navigate to the .ppk file you saved
                        earlier.
                      </li>
                      <li>Click "Open" to establish the connection.</li>
                    </ul>
                  </div>
                  <div className="space-y-5">
                    <h5>4. Authenticate and connect to your server:</h5>
                    <ul>
                      <li>
                        If prompted, enter the username for your server. The
                        default username for an Windows instance is "Admin".
                      </li>
                      <li>
                        PuTTY will connect to your server, and you should be
                        presented with a command prompt.
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-5">
                    <h5>5. Enable Remote Desktop Connection:</h5>
                    <div className="my-5 border-l-2 border-l-blue-500 bg-blue-100 p-2 rounded-md mr-auto max-w-md text-justify">
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
                        RDP is a secure network communication protocol designed
                        for remote management. By default, the Remote Desktop
                        Port is 3389, changing the default port always provides
                        a more secure environment. Also, ensure you set a strong
                        password for RDP user.
                      </p>
                    </div>
                    <div class="">
                      <p className="py-5">
                        Install an RDP client if you are using macOS
                      </p>
                      <ul class="">
                        <li class="">
                          <p>
                            RDP client is available on Windows by default. To
                            verify, type{" "}
                            <span className="step-item"> mstsc</span> at a
                            Command Prompt window. If your computer doesn't
                            recognize this command, you can dowload the
                            Microsoft Remote Desktop app via{" "}
                            <a
                              href="https://windows.microsoft.com/"
                              target="_blank"
                            >
                              Windows home page
                            </a>
                          </p>
                        </li>
                        <li class="">
                          <p>Default RDP Username is "Administrator"</p>
                        </li>
                        <li class="">
                          <p>
                            On MacOS, you can download the Microsoft Remote
                            Desktop app from the Mac App Store.
                          </p>
                        </li>
                        <li class="">
                          <p>
                            On Linux see{" "}
                            <a href="https://remmina.org/" target="_blank">
                              {" "}
                              Remmina
                            </a>
                            .
                          </p>
                        </li>
                        <li class="">
                          <p>Check the ID of the instance.</p>

                          <p>
                            Your instance ID can be retrieved using the Nobus
                            FCS management console (click on the name of the
                            instance - click the overview tab -{" "}
                            <span className="step-item">Instance ID</span>).
                          </p>
                        </li>
                        <li class="">
                          <p>
                            Check the public DNS name or IP of the instance.
                          </p>

                          <p>
                            You can check the public DNS for your instance using
                            the Nobus FCS console. Check the{" "}
                            <span className="step-item">
                              {" "}
                              Public DNS (IPv4)
                            </span>{" "}
                            column.
                          </p>
                        </li>

                        <li class="">
                          <p>
                            Enable ingress RDP traffic from your IP address to
                            your instance
                          </p>

                          <p>
                            Ensure that the security group associated with your
                            instance allows incoming RDP traffic (port 3389)
                            from your IP address. The default security group
                            does not allow incoming RDP traffic by default. For
                            more information, see{" "}
                            <a href="#">
                              Permitting ingress traffic for your Windows
                              instances
                            </a>
                            .
                          </p>
                        </li>
                      </ul>
                    </div>
                    <p>
                      On the command prompt terminal, copy and enter the
                      following commands:
                    </p>
                    <p>
                      Grant Administrator Privilege to RDP User (set
                      administrator password)
                    </p>
                    <ScriptSnippet
                      script={`net user "Administrator" #babyface1`}
                      language="bash"
                    />{" "}
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
                    </span>{" "}
                    <p>
                      We recommended that you do a full backup of your computer
                      before proceeding, as modifying the registry incorrectly
                      can cause irreversible damage to your system
                    </p>
                    <ScriptSnippet
                      script={`reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server" /v fDenyTSConnections /t REG_DWORD /d 0 /f
 `}
                      language="bash"
                    />
                    <p>Allow RDP Connections</p>
                    <ScriptSnippet
                      script={`netsh advfirewall firewall set rule group="remote desktop" new enable=Yes
`}
                      language="bash"
                    />
                    <p>
                      If your instance is attached to a domain, you can connect
                      to your instance using the domain credentials defined in
                      Nobus Management console. On the Remote Desktop login
                      screen, instead of using the local computer name and the
                      password you created earlier, use the fully-qualified user
                      name for the administrator (for example,
                      test.example.com\Admin) and the password created earlier
                      for the account.
                    </p>
                    <p>After you connect, you can do the following:</p>
                    <ul>
                      <li>
                        Change the administrator password like you would on any
                        other Windows Server
                      </li>
                      <li>
                        Create another user account with administrator
                        privileges on the instance. Another account with
                        administrator privileges is a safeguard if you forget
                        the administrator password or have a problem with the
                        administrator account.
                      </li>
                    </ul>
                    <p>
                      The license for the Windows Server operating system (OS)
                      allows two simultaneous remote connections for
                      administrative purposes. The license for Windows Server is
                      included in the price of your Windows instance. If you
                      need more than two simultaneous remote connections, you
                      must purchase a Remote Desktop Services (RDS) license.
                    </p>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Connect;
