import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Lesson from './pages/Lesson';
import Community from './pages/Community';
import StudyTools from './pages/StudyTools';
import Flashcards from './pages/Flashcards';
import PastQuestions from './pages/PastQuestions';
import Settings from './pages/Settings';
import HelpCenter from './pages/HelpCenter';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:slug" element={<CourseDetail />} />
        <Route path="courses/:slug/lesson" element={<Lesson />} />
        <Route path="courses/:slug/lesson/:moduleId" element={<Lesson />} />
        <Route path="community" element={<Community />} />
        <Route path="study-tools" element={<StudyTools />} />
        <Route path="study-tools/flashcards" element={<Flashcards />} />
        <Route path="study-tools/past-questions" element={<PastQuestions />} />
        <Route path="settings" element={<Settings />} />
        <Route path="help" element={<HelpCenter />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
