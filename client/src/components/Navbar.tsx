const Navbar = () => {
  const navItems = [
    { label: 'Home', target: 'landing' },
    { label: 'About', target: 'about' },
    { label: 'Projects', target: 'projects' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">Alwin Tomy</div>
        <div className="space-x-6">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              className="hover:underline transition duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
