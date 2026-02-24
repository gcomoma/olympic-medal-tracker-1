
import { Header } from '@/components/Header';
import { MedalTable } from '@/components/MedalTable';
import { initialMedalData } from '@/data/medalData';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <MedalTable data={initialMedalData} />
        </div>
      </div>
    </div>
  );
}