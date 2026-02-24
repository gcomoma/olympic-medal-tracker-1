
import { MedalTable } from '@/components/MedalTable';
import { initialMedalData } from '@/data/medalData';

export default function Index() {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-gold via-silver to-bronze bg-clip-text text-transparent">
            Olympic Games 2024
          </h1>
          <p className="text-muted-foreground text-lg">
            Paris 2024 Medal Tracker
          </p>
        </div>
        <MedalTable data={initialMedalData} />
      </div>
    </div>
  );
}