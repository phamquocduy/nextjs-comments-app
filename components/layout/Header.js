import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { PlusSmIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FAKE_DATA = {
  author: {
    name: "Daniela Metz",
    email: "abc.xyz@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
};

const Header = () => {
  const { data: session } = useSession();
  const [tab, selectTab] = useState("Home");

  const handleSelectTab = (e, name) => {
    selectTab(name);
  };

  const handleSignOut = (e) => {
    e.preventDefault();

    signOut();
    selectTab("Home");
  };

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex items-center mr-2 -ml-2 md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    {open ? (
                      <XIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center flex-shrink-0">
                  <img className="block w-auto h-8" src="/images/blog-icon.jpg" alt="Workflow" />
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <Link href="/">
                    <a
                      className={classNames(
                        tab == "Home"
                          ? "text-gray-900 border-b-2 border-indigo-500"
                          : "text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700",
                        "inline-flex items-center px-1 pt-1 text-sm font-medium"
                      )}
                      onClick={(e) => handleSelectTab(e, "Home")}
                    >
                      Home
                    </a>
                  </Link>
                  <Link href="/article/list">
                    <a
                      className={classNames(
                        tab == "Recent articles"
                          ? "text-gray-900 border-b-2 border-indigo-500"
                          : "text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700",
                        "inline-flex items-center px-1 pt-1 text-sm font-medium"
                      )}
                      onClick={(e) => handleSelectTab(e, "Recent articles")}
                    >
                      Recent articles
                    </a>
                  </Link>
                  {session ? (
                    <Link href="/article/my-list">
                      <a
                        className={classNames(
                          tab == "My articles"
                            ? "text-gray-900 border-b-2 border-indigo-500"
                            : "text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700",
                          "inline-flex items-center px-1 pt-1 text-sm font-medium"
                        )}
                        onClick={(e) => handleSelectTab(e, "My articles")}
                      >
                        My articles
                      </a>
                    </Link>
                  ) : null}
                </div>
              </div>

              {/* User toolbar */}
              {session ? (
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link href="/article/create-new">
                      <a className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:ring-none">
                        <PlusSmIcon className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
                        <span>New article</span>
                      </a>
                    </Link>
                  </div>
                  <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                    <button
                      type="button"
                      className="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <BellIcon className="w-6 h-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex text-sm bg-white rounded-full outline-none ring-2 ring-offset-2 ring-indigo-500">
                          <img className="w-8 h-8 rounded-full" src={FAKE_DATA.author.imageUrl} alt="" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                onClick={handleSignOut}
                                className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-200"
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              ) : (
                <div className="flex items-center">
                  <Link href="/login">
                    <a className="inline-block px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-opacity-75">
                      Sign in
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as="a"
                href="/"
                className="block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50 sm:pl-5 sm:pr-6"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/article/list"
                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Recent articles
              </Disclosure.Button>
              {session ? (
                <Disclosure.Button
                  as="a"
                  href="/article/my-list"
                  className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 sm:pl-5 sm:pr-6"
                >
                  My articles
                </Disclosure.Button>
              ) : null}
            </div>

            {/* User toolbar */}
            {session ? (
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-4 sm:px-6">
                  <div className="flex-shrink-0">
                    <img className="w-10 h-10 rounded-full" src={FAKE_DATA.author.imageUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{session.user.username}</div>
                    <div className="text-sm font-medium text-gray-500">email@example.com</div>
                  </div>
                  <button
                    type="button"
                    className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <BellIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 space-y-1">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              </div>
            ) : null}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
