import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Recent articles", href: "/article/list" },
  { name: "About", href: "#" },
];

const FAKE_DATA = {
  author: {
    name: "Daniela Metz",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
};

const SignedUserToolbar = ({ user }) => {
  return (
    <>
      <div className="flex items-center mr-20 space-x-4 lg:space-x-6">
        <img className="w-8 h-8 rounded-full" src={FAKE_DATA.author.imageUrl} alt="" />
        <div className="space-y-1 text-lg font-medium leading-6 text-white">{user.username}</div>
      </div>

      <Link href="/article/my-list">
        <a className="text-base font-medium text-white hover:text-indigo-50">My articles</a>
      </Link>

      <button
        className="inline-block px-4 py-2 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-opacity-75"
        onClick={() => {}}
      >
        Create new article
      </button>

      <button
        className="inline-block px-4 py-2 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-opacity-75"
        onClick={() => signOut({ redirect: false })}
      >
        Sign out
      </button>
    </>
  );
};

const NotSignedUserToolbar = () => {
  return (
    <Link href="/login">
      <a className="inline-block px-4 py-2 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-opacity-75">
        Sign in
      </a>
    </Link>
  );
};

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-indigo-600">
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between w-full py-6 border-b border-indigo-500 lg:border-none">
          <div className="block space-x-8">
            {navigation.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className="text-base font-medium text-white hover:text-indigo-50">{link.name}</a>
              </Link>
            ))}
          </div>

          <div className="flex items-center ml-10 space-x-4">
            {session?.user ? <SignedUserToolbar user={session.user} /> : <NotSignedUserToolbar />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
