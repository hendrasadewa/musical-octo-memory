import Head from 'next/head';
import CoverSection from '../components/CoverSection';
import EventInfoSection from '../components/EventInfoSection';
import GuestbookSection from '../components/GuestbookSection';
import IntroSection from '../components/IntroSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Wedding of Fara and Farizki</title>
        <meta
          name="descriptions"
          content=" Wedding of Fara and Farizki | 27 November 2022 | Solo"
        />
      </Head>
      <div className="min-h-screen bg-slate-800 overflow-clip flex flex-col gap-8">
        <CoverSection />
        <IntroSection />
        <EventInfoSection />
        <GuestbookSection />
      </div>
    </div>
  );
}
