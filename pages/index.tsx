import CoverSection from '../components/CoverSection';
import EventInfoSection from '../components/EventInfoSection';
import GuestbookSection from '../components/GuestbookSection';
import IntroSection from '../components/IntroSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-800  overflow-clip">
      <CoverSection />
      <IntroSection />
      <EventInfoSection />
      <GuestbookSection />
    </div>
  );
}
