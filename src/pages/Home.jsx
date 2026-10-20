import { BannerSlider, Hero } from '../components/Hero.jsx';
import { About, Admission, Gallery, NewsAndNotices, Programs } from '../components/Sections.jsx';
import Partners from '../components/Partners.jsx';
import Registration from '../components/Registration.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function Home() {
  usePageTitle();
  return (
    <>
      <Hero />
      <BannerSlider />
      <Admission />
      <About />
      <Programs />
      <NewsAndNotices />
      <Gallery />
      <Partners />
      <Registration />
    </>
  );
}
