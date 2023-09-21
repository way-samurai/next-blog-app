'use client';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const session = useSession();

  return (
    <>
      {navLinks.map((link: NavLink) => {
        const isActive =
          pathname === link.href || // Ссылка точно соответствует текущему URL
          (pathname !== '/' && pathname.startsWith(link.href + '/')) || // Ссылка начинается с текущего URL с дополнительным "/"
          (pathname === '/' && link.href === '/'); // Обработка случая, когда текущий URL и ссылка оба равны "/"

        return (
          <Link
            href={link.href}
            key={link.label}
            className={isActive ? 'active' : ''}
          >
            {link.label}
          </Link>
        );
      })}
      {session?.data && <Link href="/profile">Profile</Link>}
      {session?.data ? (
        <Link href="#" onClick={() => signOut({ callbackUrl: '/' })}>
          Sign Out
        </Link>
      ) : (
        <Link href="/api/auth/signin">Sign In</Link>
      )}
    </>
  );
};

export default Navigation;
