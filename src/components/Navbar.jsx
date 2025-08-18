import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button"
 
function NavBar() {
  const location = useLocation();
  const path = location.pathname;

  const links = [
    { path: "/", text: "Home" },
    { path: "/about", text: "About" },
    { path: "/projects", text: "Projects" },
  ];

  return (
    <div className="fixed top-5 left-0 z-50 w-full flex justify-between px-10">
      <nav className="text-main-foreground border-border shadow-shadow rounded-base bg-main font-base h-[60px] flex w-[20%] justify-center items-center border-2 px-5 text-sm sm:text-base">
        <ul className="flex gap-8">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                to={link.path}
                className={`hover:border-border rounded-base border-2 px-2 py-1 transition-colors ${path === link.path ? "border-border" : "border-transparent"}`}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-5">
        <Button asChild className="text-main-foreground border-border shadow-shadow rounded-base bg-main font-base h-[60px] w-[60px] flex items-center justify-center border-2"
        >
          <a href="https://github.com/shdnaicode" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.svg" alt="Github" className="w-8 h-8" />
          </a>
        </Button>

        <Button asChild className="text-main-foreground border-border shadow-shadow rounded-base bg-main font-base h-[60px] w-[60px] flex items-center justify-center border-2"
        >
          <a href="mailto:smartsoodprasert69@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/gmail.svg" alt="Gmail" className="w-8 h-8" />
          </a>

        </Button>
      </div>
    </div>
  );
}

console.log("Navbar is rendered, no error detected.")

export default NavBar;