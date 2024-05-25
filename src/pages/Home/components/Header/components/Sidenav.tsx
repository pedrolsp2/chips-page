import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { AlignRight } from 'lucide-react';
import { NavItemsType } from './Nav';

interface SidenavProps {
  items: NavItemsType[];
}

export default function Sidenav({ items }: SidenavProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignRight size={30} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>NOME DA EMPRESA</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex flex-col">
          {items.map((item, index) => (
            <span key={index} title={item.to}>
              {item.label}
            </span>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
