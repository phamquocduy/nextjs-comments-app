import Link from "next/link";

import { getFakeUser, getFakeArticle } from "../../../utils";

export const ArticleList = ({ listData }) => {
  const fakeUser = getFakeUser();
  const fakeArticle = getFakeArticle();

  return (
    <div className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
          </p>
        </div>

        <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          {listData.map((item) => (
            <div key={item.articleId} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              {/* fake image */}
              <div className="flex-shrink-0">
                <img className="object-cover w-full h-48" src={fakeArticle.imageUrl} alt="" />
              </div>

              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {/* fake category */}
                    <Link href={fakeArticle.category.href}>
                      <a className="hover:underline">{fakeArticle.category.name}</a>
                    </Link>
                  </p>
                  <Link href={`/article/${item.articleId}`}>
                    <a className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{item.title}</p>
                      <p className="mt-3 text-base text-gray-500">{item.perex}</p>
                    </a>
                  </Link>
                </div>

                {/* fake author */}
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <Link href={fakeUser.href}>
                      <a>
                        <img className="w-10 h-10 rounded-full" src={fakeUser.imageUrl} alt="Author" />
                      </a>
                    </Link>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <Link href={fakeUser.href}>
                        <a className="hover:underline">{fakeUser.name}</a>
                      </Link>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time>{fakeArticle.createAt}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{fakeArticle.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
