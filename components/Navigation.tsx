'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
    label: string;
    href: string;
};

type Props = {
    navLinks: NavLink[];
}

const Navigation = ({ navLinks }: Props) => {
    const pathname = usePathname();

    return (
        <>
            {navLinks.map((linkItem: NavLink) => (
                <Link href={linkItem.href} key={linkItem.href}>
                    {linkItem.label}
                </Link>
            ))}
        </>
    );
};

export default Navigation;