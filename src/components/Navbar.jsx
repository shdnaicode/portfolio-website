function NavBar() {
  const links = [
    { path: "/", text: "Home" },
    { path: "/about", text: "About" },
    { path: "/projects", text: "Projects" },
  ];

  return (
    <>
      <div className="fixed top-5 left-0 z-50 w-full">
        <nav className="text-main-foreground border-border shadow-shadow rounded-base bg-main font-base w450:gap-4 mx-auto h-[60px] flex w-[20%] text-center justify-center items-center border-2 p-2.5 px-5 text-sm sm:text-base">
          <ul className="flex gap-8">
            {links.map((links, i) => (
              <li key={i}>
                <a href={links.path} className="hover:underline">
                  {links.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="fixed top-5 right-0 z-50 mr-15 ">
          <div className="text-main-foreground border-border shadow-shadow rounded-base bg-main font-base w450:gap-4 mx-auto h-[60px] w-[100%] text-center items-center justify-center border-2 p-2.5 px-5 text-sm sm:text-base flex">
            <a href="https://github.com/shdnaicode" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" alt="Github" className="w-10 h-10"/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
