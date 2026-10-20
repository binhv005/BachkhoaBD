import { Outlet } from 'react-router-dom';
import Preloader from './Preloader.jsx';
import ScrollManager from './ScrollManager.jsx';
import RevealManager from './RevealManager.jsx';
import ScrollEffects from './ScrollEffects.jsx';
import Header, { TopBar } from './Header.jsx';
import { Contact, FloatButtons, Footer } from './Footer.jsx';

// Khung chung của mọi trang: màn hình chờ, thanh trên, header, nội dung từng trang, liên hệ, footer.
export default function Layout() {
  return (
    <>
      <Preloader />
      <ScrollManager />
      <RevealManager />
      <ScrollEffects />
      <TopBar />
      <Header />
      <main id="trang-chu">
        <Outlet />
      </main>
      <Contact />
      <Footer />
      <FloatButtons />
    </>
  );
}
