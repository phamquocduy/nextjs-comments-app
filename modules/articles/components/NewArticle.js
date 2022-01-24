import { Tab } from "@headlessui/react";
import { AtSymbolIcon, CodeIcon, LinkIcon } from "@heroicons/react/solid";

import { classNames } from "../../../utils";

export const NewArticle = () => {
  return (
    <div className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">New article</h3>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <div className="flex mt-1 rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm">
                  article/list/
                </span>
                <input
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="title"
                  className="flex-1 block w-full min-w-0 border-gray-300 rounded-none focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                About
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  defaultValue={""}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">Write a short description about the article.</p>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700">
                Add some photos
              </label>
              <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="w-12 h-12 mx-auto text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Content</h3>
            <p className="mt-1 text-sm text-gray-500">Application supports Markdown!</p>
          </div>
          <form className="mt-6" action="#">
            <Tab.Group>
              {({ selectedIndex }) => (
                <>
                  <Tab.List className="flex items-center">
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? "text-gray-900 bg-gray-100 hover:bg-gray-200"
                            : "text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100",
                          "px-3 py-1.5 border border-transparent text-sm font-medium rounded-md"
                        )
                      }
                    >
                      Write
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? "text-gray-900 bg-gray-100 hover:bg-gray-200"
                            : "text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100",
                          "ml-2 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md"
                        )
                      }
                    >
                      Preview
                    </Tab>

                    {/* These buttons are here simply as examples and don't actually do anything. */}
                    {selectedIndex === 0 ? (
                      <div className="flex items-center ml-auto space-x-5">
                        <div className="flex items-center">
                          <button
                            type="button"
                            className="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
                          >
                            <LinkIcon className="w-5 h-5" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button
                            type="button"
                            className="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
                          >
                            <CodeIcon className="w-5 h-5" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button
                            type="button"
                            className="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
                          >
                            <AtSymbolIcon className="w-5 h-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </Tab.List>
                  <Tab.Panels className="mt-2">
                    <Tab.Panel className="p-0.5 -m-0.5 rounded-lg">
                      <div>
                        <textarea
                          rows={5}
                          name="content"
                          id="content"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Add your content..."
                          defaultValue={""}
                        />
                      </div>
                    </Tab.Panel>
                    <Tab.Panel className="p-0.5 -m-0.5 rounded-lg">
                      <div className="px-3 pt-2 pb-12 mx-px mt-px text-sm leading-5 text-gray-800">
                        Preview content will render here.
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </>
              )}
            </Tab.Group>
          </form>
        </div>

        <div className="pt-8">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
            <p className="mt-1 text-sm text-gray-500">
              We'll always let you know about important changes, but you pick what else you want to hear about.
            </p>
          </div>
          <div className="mt-6">
            <fieldset>
              <legend className="text-base font-medium text-gray-900">By Email</legend>
              <div className="mt-4 space-y-4">
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="comments" className="font-medium text-gray-700">
                      Comments
                    </label>
                    <p className="text-gray-500">Get notified when someones posts a comment on your article.</p>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="offers" className="font-medium text-gray-700">
                      Likes
                    </label>
                    <p className="text-gray-500">Get notified when someone likes your article.</p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go back
          </button>
          <button
            type="submit"
            className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create article
          </button>
        </div>
      </div>
    </div>
  );
};
