import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav class="navbar bg-base-100 shadow-sm spacing">
      <div class="flex-1">
        <Link href="/" class="btn btn-ghost text-xl">
          ThandaBox
        </Link>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
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
