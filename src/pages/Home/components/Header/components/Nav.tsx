import { useDeviceType } from '@/hook/useDeviceType';
import { ReactNode } from 'react';
import Sidenav from './Sidenav';

export interface NavItemsType {
  label: string;
  to: string;
}

interface LinkProps {
  to: string;
  children: ReactNode;
}

const Link = ({ to, children }: LinkProps) => {
  return (
    <a
      href={to}
      title={to}
      className="px-2 transition-all cursor-pointer hover:underline hover:font-semibold focus:outline-none focus:ring-2 focus:ring-default-200"
    >
      {children}
    </a>
  );
};

export default function Nav() {
  const isMobile = useDeviceType();

  const navItems: NavItemsType[] = [
    { label: 'Home', to: '/' },
    { label: 'Produtos', to: '/product' },
    { label: 'Sobre nós', to: '/about' },
    { label: 'Contato', to: '/contact' },
  ];

  if (isMobile) {
    return (
      <div
        aria-label="Main Navigation"
        className="z-50 flex items-center justify-between h-16 gap-8 px-4 text-sm bg-default-500 text-default-100"
      >
        <span className="font-bold text-default-100">LOGO</span>
        <Sidenav items={navItems} />
      </div>
    );
  }

  return (
    <nav
      aria-label="Main Navigation"
      className="z-50 flex items-center gap-8 text-sm text-default-500"
    >
      {navItems.map((item, index) => (
        <Link key={index} to={item.to}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
