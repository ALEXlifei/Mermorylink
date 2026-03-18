/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import CreateStep1 from './pages/CreateStep1';
import CreateStep2 from './pages/CreateStep2';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<CreateStep1 />} />
        <Route path="/create/step2" element={<CreateStep2 />} />
      </Routes>
    </Router>
  );
}

