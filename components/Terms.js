import { Disclosure, Transition } from "@headlessui/react";

export default function Terms() {
  return (
    <Disclosure>
      <Disclosure.Button>Is team pricing available?</Disclosure.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Disclosure.Panel>
          Yes! You can purchase a license that you can share with your entire
          team.
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
}
