import Link from "next/link"

import ThemeToggle from "../theme-toggle/theme-toggle"

export function Navbar() {
  return (
    <nav>
      <ul className="itens-center hidden gap-9 lg:flex">
        <li className="py-3">
          <Link href="#" data-testid="sobre-link">
            Sobre
          </Link>
        </li>
        <li className="py-3">
          <Link href="#" data-testid="acoes-link">
            Ações
          </Link>
        </li>
        <li>
          <ThemeToggle data-testid="theme-toggle" />
        </li>
        <li className="py-3">
          <Link
            className="rounded-[0.313rem] bg-color-red px-4 py-3"
            data-testid="doar-link"
            href="#">
            Doar
          </Link>
        </li>
      </ul>
    </nav>
  )
}
