import Link from "next/link";

const navigation = [
  { name: "Recent articles", href: "#" },
  { name: "About", href: "#" },
];

const Header = () => {
  return (
    <header className="bg-indigo-600">
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between w-full py-6 border-b border-indigo-500 lg:border-none">
          <div className="block space-x-8">
            {navigation.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                {link.name}
              </a>
            ))}
          </div>

          <div className="ml-10 space-x-4">
            <Link href="/login">
              <a className="inline-block px-4 py-2 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-opacity-75">
                Sign in
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
