import Link from "next/link"

interface DrawerProps {
  isOpen: boolean
  toggleMenu: () => void
}

const textLinks = ["sobre", "acoes", "doar"]

export function Drawer({ isOpen, toggleMenu }: DrawerProps) {
  return (
    <div className={`fixed inset-0 z-20 ${isOpen ? "block" : "hidden"}`}>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${isOpen ? "opacity-50" : "opacity-0"} dark:opacity-30`}
      />
      <nav
        className={`fixed left-0 top-0 z-20 max-h-96 w-full bg-white text-black transition-transform duration-300 ease-in-out dark:bg-[#323232] dark:text-white ${isOpen ? "translate-y-0 transform" : "-translate-y-full transform"}`}
        role="navigation">
        <button
          onClick={toggleMenu}
          className="absolute right-4 top-4 text-3xl font-bold text-black dark:text-white"
          aria-label="Close Menu">
          &times;
        </button>
        <ul className="flex h-full flex-col items-center justify-center space-y-6 py-4">
          <li>
            <Link
              href="#"
              className="block px-4 py-2 text-lg"
              data-testid="sobre-link-small">
              {textLinks[0]}
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block px-4 py-2 text-lg"
              data-testid="acoes-link-small">
              {textLinks[1]}
            </Link>
          </li>
          <li>
            <Link
              className="block rounded-[0.313rem] bg-color-red px-4 py-3 text-lg"
              data-testid="doar-link-small"
              href="#">
              {textLinks[2]}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
