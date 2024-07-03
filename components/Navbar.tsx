import { FloatingNav } from "./ui/floating-navbar";

export default function Navbar() {
  return (
    <div className="z-40">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

const navItems = [
  {
    name: "Home",
    link: "/",
    dropdown: false,
  },
  {
    name: "Product",
    link: "/products",
    dropdown: true,
  },
  {
    name: "Resources",
    link: "/resources",
    dropdown: true,
  },
  {
    name: "Pricing",
    link: "/pricing",
    dropdown: false,
  },
];
