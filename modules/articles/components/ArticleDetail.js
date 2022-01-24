import Markdown from "react-markdown";

export const ArticleDetail = ({ articleData }) => {
  return (
    <div className="relative py-16 overflow-hidden bg-white">
      <div className="relative px-8 sm:px-24 lg:px-40">
        <div className="mx-auto text-lg max-w-prose">
          <h1>
            <span className="block text-base font-semibold tracking-wide text-center text-indigo-600 uppercase">
              Introducing
            </span>
            <span className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
              Blog for Beginners
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-500">{articleData.perex}</p>
        </div>

        <div className="mx-auto mt-6 prose prose-lg text-gray-500 lg:prose-xl prose-indigo">
          <Markdown>{articleData.content}</Markdown>
        </div>
      </div>
    </div>
  );
};
