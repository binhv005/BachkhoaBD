import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import { NewsDetail, NewsList } from './pages/NewsPages.jsx';
import { NoticeDetail, NoticeList } from './pages/NoticePages.jsx';
import { ProgramDetail, ProgramList } from './pages/ProgramPages.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tin-tuc" element={<NewsList />} />
        <Route path="tin-tuc/:slug" element={<NewsDetail />} />
        <Route path="thong-bao" element={<NoticeList />} />
        <Route path="thong-bao/:slug" element={<NoticeDetail />} />
        <Route path="dao-tao" element={<ProgramList />} />
        <Route path="dao-tao/:slug" element={<ProgramDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
