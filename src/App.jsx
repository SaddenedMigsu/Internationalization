import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import IznCorner from './pages/IznCorner';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to /izn-corner */}
        <Route path="/" element={<Navigate to="/izn-corner" replace />} />

        {/* Main IZN Corner page */}
        <Route path="/izn-corner" element={<IznCorner />} />

        {/* Catch-all redirect to IZN Corner */}
        <Route path="*" element={<Navigate to="/izn-corner" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
