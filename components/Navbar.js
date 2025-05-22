import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100 shadow-sm spacing">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          ThandaBox
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="btn btn-accent" href="/checkout">
              Order Now <ArrowRight size={15} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
