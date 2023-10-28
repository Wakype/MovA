import CustomChakra from '../components/CustomChakra';
import ProgressBarClient from '../components/ProgressBarClient';
import ReactQuery from '../components/ReactQuery';
import './globals.css';
import BottomNavigation from '../sections/bottomNavigation';
import TopNavigation from '../sections/topNavigation';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'MovA',
  description: 'A anime and movie list the site for anime & movie (MovA) lovers!',
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <ReactQuery>
            <CustomChakra>
              <section className="h-full w-full">
                <ProgressBarClient />
                <TopNavigation />
                {children}
                <Analytics />
                <BottomNavigation />
              </section>
            </CustomChakra>
          </ReactQuery>
        </body>
      </html>
    </>
  );
}
