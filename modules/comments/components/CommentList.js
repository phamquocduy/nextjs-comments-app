import { ThumbUpIcon, ThumbDownIcon } from "@heroicons/react/solid";

import { CommentCreateNew } from "./CommentCreateNew";
import { getFakeUser, getFakeComments } from "../../../utils";

/**
 * TODO
 * - create POST request for voting functionality
 * - display score on each comment
 * - show comment's replies
 */
const CommentList = () => {
  const fakeUser = getFakeUser();
  const fakeComments = getFakeComments();

  return (
    <div className="px-8 mt-12 antialiased sm:px-24 lg:px-40">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">Comments</h3>

      <CommentCreateNew />

      <div className="space-y-4">
        <div className="flex">
          <div className="flex-shrink-0 mr-3">
            <img className="w-8 h-8 mt-2 rounded-full sm:w-10 sm:h-10" src={fakeUser.imageUrl} alt="" />
          </div>
          <div className="flex-1 px-4 py-2 leading-relaxed border rounded-lg sm:px-6 sm:py-4">
            <strong>{fakeUser.name}</strong> <span className="text-xs text-gray-400">20. 01. 2022 15:34</span>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </p>
            <div className="flex items-center mt-4">
              <span className="relative z-0 inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <ThumbUpIcon className="w-3 h-3" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <ThumbDownIcon className="w-3 h-3" aria-hidden="true" />
                </button>
              </span>

              <div className="flex ml-4 mr-2 -space-x-2">
                <img
                  className="w-6 h-6 border border-white rounded-full"
                  src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                  alt=""
                />
                <img
                  className="w-6 h-6 border border-white rounded-full"
                  src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                  alt=""
                />
              </div>

              <div className="text-sm font-semibold text-gray-500">5 Replies</div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0 mr-3">
            <img className="w-8 h-8 mt-2 rounded-full sm:w-10 sm:h-10" src={fakeUser.imageUrl} alt="" />
          </div>
          <div className="flex-1 px-4 py-2 leading-relaxed border rounded-lg sm:px-6 sm:py-4">
            <strong>{fakeUser.name}</strong> <span className="text-xs text-gray-400">20. 01. 2022 15:34</span>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </p>
            <div className="flex items-center mt-4">
              <span className="relative z-0 inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <ThumbUpIcon className="w-3 h-3" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <ThumbDownIcon className="w-3 h-3" aria-hidden="true" />
                </button>
              </span>
            </div>
            <div className="mt-4 space-y-4">
              {fakeComments.map((item) => {
                return (
                  <div className="flex" key={item.id}>
                    <div className="flex-shrink-0 ml-3">
                      <img className="w-6 h-6 mt-3 rounded-full sm:w-8 sm:h-8" src={fakeUser.imageUrl} alt="" />
                    </div>
                    <div className="flex-1 px-4 py-2 ml-4 leading-relaxed bg-gray-100 rounded-lg sm:px-6 sm:py-4">
                      <strong>{fakeUser.name}</strong> <span className="text-xs text-gray-400">20. 01. 2022 15:34</span>
                      <p className="text-xs sm:text-sm">{item.content}</p>
                      <div className="flex items-center mt-4">
                        <span className="relative z-0 inline-flex rounded-md shadow-sm">
                          <button
                            type="button"
                            className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                          >
                            <ThumbUpIcon className="w-3 h-3" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                          >
                            <ThumbDownIcon className="w-3 h-3" aria-hidden="true" />
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
