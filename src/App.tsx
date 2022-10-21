import { useEffect } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { getAuth, User } from 'firebase/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/Header';
import { app } from '@/lib/firebase-config';
import Router from './routes';
import { useStore } from '@/store/index';
import ReactObserver from 'react-event-observer';

function App() {
  const queryClient = new QueryClient();
  const { setUser } = useStore((state) => state);
  const authentication = getAuth(app);
  const firebaseObserver = ReactObserver();

  useEffect(() => {
    authentication.onAuthStateChanged((user) => {
      firebaseObserver.publish('authStateChanged', user);
    });

    firebaseObserver.subscribe('authStateChanged', (user: User | null) => {
      if (user) setUser(user);
    });
    return () => {
      firebaseObserver.unsubscribe('authStateChanged');
    };
  }, [authentication]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen font-mono App">
        <Header />
        <Router />
      </div>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
