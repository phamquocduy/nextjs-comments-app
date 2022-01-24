import Link from "next/link";

const FAKE_DATA = {
  category: { name: "Case Study", href: "#" },
  imageUrl:
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  readingTime: "5 min",
  author: {
    name: "Daniela Metz",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
};

export const ArticleList = ({ listData }) => {
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
                <img className="object-cover w-full h-48" src={FAKE_DATA.imageUrl} alt="" />
              </div>

              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {/* fake category */}
                    <Link href={FAKE_DATA.category.href}>
                      <a className="hover:underline">{FAKE_DATA.category.name}</a>
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
                    <Link href={FAKE_DATA.author.href}>
                      <a>
                        <img className="w-10 h-10 rounded-full" src={FAKE_DATA.author.imageUrl} alt="Author" />
                      </a>
                    </Link>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <Link href={FAKE_DATA.author.href}>
                        <a className="hover:underline">{FAKE_DATA.author.name}</a>
                      </Link>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time>{item.createdAt}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{FAKE_DATA.readingTime} read</span>
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
