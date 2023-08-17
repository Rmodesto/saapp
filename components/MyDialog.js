import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { sendContactForm } from "../lib/api";
import Spinner from "./Spinner";

// form values
const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { values: initValues };

export default function MyDialog() {
  //state for form values
  const [state, setState] = useState(initState);

  //destructuring state values
  const { values } = state;

  //onchange handler for inputs
  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  //loading state variables
  const [loading, setLoading] = useState(false);

  //submit button disabled if any of the form values are not filled
  const isFormValid = Object.values(values).every((val) => val !== "");

  //form onSubmit handler
  const handleSubmit = async (initState) => {
    //set loading state to true
    setLoading(true);
    console.log(values);

    try {
      //send form values to api
      await sendContactForm(values);
    } catch (error) {
      console.log(error);
      //set loading state to false
      setLoading(false), error.message;
    }

    //close modal
    closeModal();
  };

  //modal state  open/close

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="tracking-wide py-2 px-5 sm:px-8 border font-2xl border-green-500 text-green-500 bg-transparent outline-none rounded-l-full rounded-r-full capitalize  hover:bg-green-500 hover:text-white-500 transition-all hover:shadow-green-md "
      >
        Contact
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <div className="absolute flex items-center justify-center">
          <Dialog
            as="div"
            className="fixed inset-0 z-50 overflow-y-auto"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black-500 bg-opacity-50" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden bg-white-300 text-left align-middle transition-all transform shadow-xl rounded-2xl">
                  <div className="flex justify-between">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Modal
                    </Dialog.Title>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 duration-300"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                  <div className="mt-2">
                    {/*}
                    <p className="text-sm text-gray-500 border-t pt-2">
                      This is a dialog box
                    </p>
                  */}

                    {/* inputs for contact form */}

                    <form
                      method="POST"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(initState);
                      }}
                    >
                      <div class="mb-5">
                        <label
                          for="name"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={(e) => {
                            if (!e.target.value) {
                              e.target.classList.add("border-red-500");
                            } else {
                              e.target.classList.remove("border-red-500");
                            }
                          }}
                          id="name"
                          placeholder="Full Name"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
                        />
                      </div>
                      <div class="mb-5">
                        <label
                          for="email"
                          class="mb-3 block text-base border-green-500 font-medium text-[#07074D]"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={(e) => {
                            if (!e.target.value) {
                              e.target.classList.add("border-red-500");
                            } else {
                              e.target.classList.remove("border-red-500");
                            }
                          }}
                          id="email"
                          placeholder="example@domain.com"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
                        />
                      </div>
                      <div class="mb-5">
                        <label
                          for="subject"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={values.subject}
                          onChange={handleChange}
                          onBlur={(e) => {
                            if (!e.target.value) {
                              e.target.classList.add("border-red-500");
                            } else {
                              e.target.classList.remove("border-red-500");
                            }
                          }}
                          id="subject"
                          placeholder="Enter your subject"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
                        />
                      </div>
                      <div class="mb-5">
                        <label
                          for="message"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Message
                        </label>
                        <textarea
                          rows="4"
                          name="message"
                          value={values.message}
                          onChange={handleChange}
                          onBlur={(e) => {
                            if (!e.target.value) {
                              e.target.classList.add("border-red-500");
                            } else {
                              e.target.classList.remove("border-red-500");
                            }
                          }}
                          id="message"
                          placeholder="Type your message"
                          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
                        ></textarea>
                      </div>
                      <div>
                        {/* Spinner */}
                        {loading ? (
                          <Spinner />
                        ) : (
                          <button
                            disabled={!isFormValid}
                            type="submit"
                            onClick={() => handleSubmit(values)}
                            className="hover:shadow-form rounded-md bg-primary py-3 px-8 bg-green-500 text-white-500 font-semibold text-white outline-none"
                          >
                            Submit
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </div>
      </Transition>
    </>
  );
}
