import { Sparkles } from 'lucide-react';

export default function Separator() {
  return (
    <div className="grid grid-cols-[1fr,auto,1fr] items-center gap-4 my-4 px-4">
      <div className="w-full h-[1px] bg-default-500 rounded" />
      <Sparkles className="text-default-500" size={20} />
      <div className="w-full h-[1px] bg-default-500 rounded" />
    </div>
  );
}
