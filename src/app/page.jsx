import HomeSection from '@/sections/homeTabs';
import HomeSlider from '../sections/homeSlider';

export default function Home() {
  return (
    <>
      <div className="w-full h-full mb-12 flex justify-center items-center overflow-hidden relative">
        <HomeSlider />
        <div className="w-full h-fit absolute lg:bottom-0 bottom-[-2px] z-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 150">
            <path
              fill="#ffffff"
              fillOpacity={1}
              d="M0,128L80,149.3C160,171,320,213,480,213.3C640,213,800,171,960,154.7C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>
      </div>

      <div className="w-full px-[50px] mb-[100px]">
        <HomeSection />
      </div>
    </>
  );
}
