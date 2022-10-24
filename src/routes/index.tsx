import DetailGames from '@/pages/DetailGames';
import VerifyEmail from '@/pages/VerifyEmail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Apps from '../pages/Games';
import Home from '../pages/Home';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <Home login={true} />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Home login={false} />
          </PublicRoute>
        }
      />
      <Route
        path="/verify-email"
        element={
          <PrivateRoute>
            <VerifyEmail />
          </PrivateRoute>
        }
      />
      <Route
        path="/games"
        element={
          <PrivateRoute>
            <Apps />
          </PrivateRoute>
        }
      />
      <Route
        path="/games/:gameId"
        element={
          <PrivateRoute>
            <DetailGames />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default Router;
