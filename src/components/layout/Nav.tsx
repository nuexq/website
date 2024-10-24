"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/blog", label: "Blog" },
	{ href: "/projects", label: "Projects" },
	{ href: "/random", label: "Random" },
];

export const Nav = () => {
	const pathname = usePathname();

	return (
		<nav className="nav sm:border-r border-neutral-300">
			<div className="flex flex-col sm:sticky sm:top-0">
				{navLinks.map((link) => (
					<Link
						// className={pathname === link.href ? "font-bold" : ""}
						key={link.href}
						href={link.href}
					>
						<span className={pathname === link.href ? "font-[900]" : ""}>
							[{link.label.slice(0, 1)}]
						</span>
						<span>{link.label.slice(1, link.label.length)}</span>
					</Link>
				))}
			</div>
		</nav>
	);
};
