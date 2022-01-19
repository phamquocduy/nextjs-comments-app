const navigation = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/duy-pham-quoc/",
    img: "https://img.icons8.com/fluency/48/000000/linkedin.png",
  },
  {
    name: "GitHub",
    href: "https://github.com/phamquocduy",
    img: "https://img.icons8.com/fluency/48/000000/github.png",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <img src={item.img} alt={item.name} className="w-6 h-6" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-base text-center text-gray-400">&copy; 2022 by Phạm Quốc Duy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
