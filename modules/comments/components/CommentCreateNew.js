import { Tab } from "@headlessui/react";
import { AtSymbolIcon, CodeIcon, LinkIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const CommentCreateNew = () => {
  return (
    <form className="py-6" action="#">
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
                      <span className="sr-only">Insert link</span>
                      <LinkIcon className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Insert code</span>
                      <CodeIcon className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Mention someone</span>
                      <AtSymbolIcon className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ) : null}
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel className="p-0.5 -m-0.5 rounded-lg">
                <label htmlFor="comment" className="sr-only">
                  Comment
                </label>
                <div>
                  <textarea
                    rows={5}
                    name="comment"
                    id="comment"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Add your comment..."
                    defaultValue={""}
                  />
                </div>
              </Tab.Panel>
              <Tab.Panel className="p-0.5 -m-0.5 rounded-lg">
                <div className="border-b">
                  <div className="px-3 pt-2 pb-12 mx-px mt-px text-sm leading-5 text-gray-800">
                    Preview content will render here.
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </>
        )}
      </Tab.Group>

      <div className="flex justify-end mt-2">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Post
        </button>
      </div>
    </form>
  );
};
