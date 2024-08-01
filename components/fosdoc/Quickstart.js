import { Tab } from "@headlessui/react";
import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Quickstart() {
  const categories = [
    "Creating a container",
    "Uploading an object to a container",
    "Editing an object",
    "Copying an object",
    "Deleting a container",
  ];
  return (
    <div id="quickstart" className="py-10">
      <h2 className="pb-5">FOS Quickstart Guide</h2>

      <div className="w-full px-2 py-16 sm:px-0">
        <Tab.Group vertical>
          <div className="grid grid-cols-1">
            <Tab.List className="flex-col max-w-sm rounded-xl bg-gray-100">
              <h4 className="py-2 pl-2">STEPS</h4>
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
                <h3>Creating a FOS Container</h3>
                <p>
                  You can create a container using the Nobus Object Storage
                  Console. You are only charged for storing objects in the
                  container and for in and out transfer of objects associated
                  with container
                </p>
                <div className="space-y-5">
                  <h6>Follow these steps to create a container: </h6>
                  <ol>
                    <li>
                      Open the Nobus FCS console at{" "}
                      <a href="https://cloud.nobus.io/">
                        https://cloud.nobus.io/
                      </a>
                      .
                    </li>
                    <li>
                      Click on the{" "}
                      <span className="step-item">Object Storage</span> tab
                    </li>
                    <li>
                      Click on the <span className="step-item">Containers</span>{" "}
                      category
                    </li>
                    <li>
                      Click on{" "}
                      <span className="step-item">Create Container</span>
                    </li>
                    <li>
                      Provide a <span className="step-item">Name</span> for the
                      container and click on
                      <span className="step-item">Create</span>.
                    </li>
                  </ol>
                  <p>You have successfully created an FOS Container.</p>

                  <p>
                    To delete a container, click the{" "}
                    <span className="step-item">More</span> button and select
                    <span className="step-item">Delete Container</span>.
                  </p>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <h3>Uploading an Object to a Container</h3>
                <p>
                  Now that you've created a container, you can go further to
                  upload an object to it. An object can be a text file, a photo,
                  a video etc,.
                </p>
                <div className="space-y-5">
                  <h6>To upload object to a container:</h6>
                  <ol>
                    <li>
                      <a href="https://cloud.nobus.io/project/">
                        Log in to the console.
                      </a>
                    </li>
                    <li>
                      <p>
                        Select the appropriate project from the drop down menu
                        at the top left.
                      </p>
                    </li>
                    <li>
                      <p>
                        On the <span className="step-item">Project</span> tab,
                        open the <span className="step-item">Object Store</span>{" "}
                        tab and click{" "}
                        <span className="step-item">Containers</span> category.
                      </p>
                    </li>
                    <li>
                      <p>
                        Select the container in which you want to store your
                        object.
                      </p>
                    </li>
                    <li>
                      <p>
                        Click the <span className="step-item">Upload File</span>{" "}
                        icon.
                      </p>
                      <p>
                        The{" "}
                        <span className="step-item">
                          Upload File To Container: &lt;name&gt;
                        </span>{" "}
                        dialog box appears.
                        <code class="docutils literal">
                          <span class="pre">&lt;name&gt;</span>
                        </code>{" "}
                        is the name of the container to which you are uploading
                        the object.
                      </p>
                    </li>
                    <li>
                      <p>Enter a name for the object.</p>
                    </li>
                    <li>
                      <p>
                        Browse to and select the file that you want to upload.
                      </p>
                    </li>
                    <li>
                      <p>
                        Click <span className="step-item">Upload File</span>.
                      </p>
                    </li>
                  </ol>
                  <p>
                    You have successfully uploaded an object to the container.
                  </p>

                  <p>
                    To delete an object, click the{" "}
                    <span className="step-item">More button</span> and select
                    <span className="step-item">Delete Object</span>.
                  </p>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <h3>Editing a container object</h3>
                <div className="space-y-5">
                  <h6>To edit an object:</h6>
                  <ol class="pl-4">
                    <li>
                      <a
                        class="font-weight-bold"
                        href="https://cloud.nobus.io/project/"
                      >
                        Log in to the console.
                      </a>
                    </li>

                    <li>
                      <p>
                        On the <span className="step-item">Project</span> tab,
                        open the <span className="step-item">Object Store</span>{" "}
                        tab and click{" "}
                        <span className="step-item">Containers</span> category.
                      </p>
                    </li>
                    <li>
                      <p>
                        Select the container in which you want to store your
                        object.
                      </p>
                    </li>
                    <li>
                      <p>
                        Click the menu button and choose{" "}
                        <span className="step-item">Edit</span> from the
                        dropdown list.
                      </p>
                      <p>
                        The <span className="step-item">Edit Object</span>{" "}
                        dialog box is displayed.
                      </p>
                    </li>
                    <li>
                      <p>
                        Browse to and select the file that you want to upload.
                      </p>
                    </li>
                    <li>
                      <p>
                        Click <span className="step-item">Update Object</span>.
                      </p>
                    </li>
                  </ol>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <h3>Copying a Container Object</h3>
                <div className="space-y-5">
                  <h6>To copy an object from one container to another:</h6>
                  <ol>
                    <li>
                      <a href="https://cloud.nobus.io/project/">
                        Log in to the console.
                      </a>
                    </li>
                    <li>
                      Select the appropriate project from the drop down menu at
                      the top left.
                    </li>
                    <li>
                      On the <span className="step-item">Project</span> tab,
                      open the <span className="step-item">Object Store</span>{" "}
                      tab and click{" "}
                      <span className="step-item">Containers</span> category.
                    </li>
                    <li>
                      Select the container in which you want to store your
                      object.
                    </li>
                    <li>
                      Click the menu button and choose{" "}
                      <span className="step-item">Copy</span> from the dropdown
                      list.
                    </li>
                    <li>
                      In the <span className="step-item">Copy Object</span>{" "}
                      launch dialog box, enter the following values:
                      <ul>
                        <li>
                          <span className="step-item">
                            Destination Container
                          </span>
                          : Choose the destination container from the list.
                        </li>
                        <li>
                          <span className="step-item">Path</span>: Specify a
                          path in which the new copy should be stored inside of
                          the selected container.
                        </li>
                        <li>
                          <span className="step-item">
                            Destination object name
                          </span>
                          : Enter a name for the object in the new container.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Click <span className="step-item">Copy Object</span>.
                    </li>
                  </ol>
                  <h6>To create a metadata-only object without a file</h6>
                  <p>
                    You can create a new object in container without a file
                    available and can upload the file later when it is ready.
                    This temporary object acts a place-holder for a new object,
                    and enables the user to share object metadata and URL info
                    in advance.
                  </p>
                  <ol>
                    <li>
                      <a href="https://cloud.nobus.io/project/">
                        Log in to the dashboard.
                      </a>
                    </li>
                    <li>
                      <p>
                        Select the appropriate project from the drop down menu
                        at the top left.
                      </p>
                    </li>
                    <li>
                      <p>
                        On the <span className="step-item">Project</span> tab,
                        open the <span className="step-item">Object Store</span>{" "}
                        tab and click{" "}
                        <span className="step-item">Containers</span> category.
                      </p>
                    </li>
                    <li>
                      <p>
                        Select the container in which you want to store your
                        object.
                      </p>
                    </li>
                    <li>
                      <p>
                        Click <span className="step-item">Upload Object</span>.
                      </p>
                      <p>
                        The{" "}
                        <span className="step-item">
                          Upload Object To Container
                        </span>
                        :{" "}
                        <code class="docutils literal">
                          <span class="pre">&lt;name&gt;</span>
                        </code>{" "}
                        dialog box is displayed.
                      </p>
                      <p>
                        <code class="code">
                          <span class="pre">&lt;name&gt;</span>
                        </code>{" "}
                        is the name of the container to which you are uploading
                        the object.
                      </p>
                    </li>
                    <li>
                      <p>Enter a name for the object.</p>
                    </li>
                    <li>
                      <p>
                        Click <span className="step-item">Update Object</span>.
                      </p>
                    </li>
                  </ol>
                  <p>
                    <strong>To create a pseudo-folder</strong>
                  </p>
                  <p>
                    Pseudo-folders are similar to folders in your desktop
                    operating system. They are virtual collections defined by a
                    common prefix on the object’s name.
                  </p>
                  <ol>
                    <li>
                      <p>Log in to the dashboard.</p>
                    </li>
                    <li>
                      <p>
                        Select the appropriate project from the drop down menu
                        at the top left.
                      </p>
                    </li>
                    <li>
                      <p>
                        On the <span className="step-item">Project</span> tab,
                        open the <span className="step-item">Object Store</span>{" "}
                        tab and click{" "}
                        <span className="step-item">Containers</span> category.
                      </p>
                    </li>
                    <li>
                      <p>
                        Select the container in which you want to store your
                        object.
                      </p>
                    </li>
                    <li>
                      <p>
                        Click{" "}
                        <span className="step-item">Create Pseudo-folder</span>.
                      </p>
                      <p>
                        The{" "}
                        <span className="step-item">
                          Create Pseudo-Folder in Container
                        </span>{" "}
                        <code class="code">
                          <span class="pre">&lt;name&gt;</span>
                        </code>{" "}
                        dialog box is displayed.{" "}
                        <code class="code">
                          <span class="pre">&lt;name&gt;</span>
                        </code>{" "}
                        is the name of the container to which you are uploading
                        the object.
                      </p>
                    </li>
                    <li>
                      <p>Enter a name for the pseudo-folder.</p>
                      <p>
                        A slash (/) character is used as the delimiter for
                        pseudo-folders in Object Storage.
                      </p>
                    </li>
                    <li>
                      <p>
                        Click <span className="step-item">Create</span>.
                      </p>
                    </li>
                  </ol>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <h3>Deleting a Container</h3>
                <p>
                  When you no longer need an object or a container, we recommend
                  that you delete them to prevent further charges. Before you
                  delete your container, you must delete the objects in the
                  container. After you delete your objects and container, they
                  are no longer available.
                </p>
                <div className="my-5 border-l-2 border-l-red-500 bg-red-100 p-2 rounded-md mr-auto max-w-lg text-justify">
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
                    Deleting a container cannot be reversed. If you delete your
                    container, the name can be used another Nobus user. To
                    continue to use the same container name, don't delete your
                    container. Instead, empty and keep the container.
                  </p>
                </div>

                <p>
                  If you want to continue to use the same container name, we
                  recommend that you delete the objects but do not delete the
                  container. After you delete a container, you can reuse the
                  name. However, another account might create a container with
                  the same name before you have a chance to reuse it.
                </p>

                <div className="space-y-5">
                  <h6>Deleting an object</h6>
                  <p>
                    To delete an object, click the menu button and select{" "}
                    <span className="step-item">Delete Object</span>.
                  </p>

                  <h6>Deleting your container</h6>

                  <ol>
                    <li>
                      <p>
                        To delete a container, in the{" "}
                        <span className="step-item">containers</span> list,
                        select the container.
                      </p>
                    </li>
                    <li>
                      <p>
                        Choose <span className="step-item">Delete</span>.
                      </p>
                    </li>
                    <li>
                      <p>
                        To confirm deletion, in{" "}
                        <span className="step-item">Delete container</span>,
                        enter the name of the container.
                      </p>
                    </li>
                    <li>
                      <p>
                        To delete your container, select{" "}
                        <span className="step-item">Delete container</span>.
                      </p>
                    </li>
                  </ol>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Quickstart;
