import Separator from '@/components/Separator';
import Header from './components/Header';

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <Separator />
    </div>
  );
}
