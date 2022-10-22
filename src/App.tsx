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
    // reload firebase authentication
    authentication.currentUser?.reload();

    const onAuthStateChangedUnsubscribe = authentication.onAuthStateChanged(
      async (user) => {
        if (user) {
          const onIdTokenChangedUnsubscribe = authentication.onIdTokenChanged(
            (user) => {
              const unsubscribeSetInterval = setTimeout(() => {
                authentication.currentUser?.reload();
                authentication.currentUser?.getIdToken(/* forceRefresh */ true);
              }, 100);

              if (user && user.emailVerified) {
                firebaseObserver.publish('authStateChanged', user);
                clearInterval(unsubscribeSetInterval); //delete interval
                onAuthStateChangedUnsubscribe(); //unsubscribe onAuthStateChanged
                return onIdTokenChangedUnsubscribe(); //unsubscribe onIdTokenChanged
              }
            }
          );
        }
      }
    );

    firebaseObserver.subscribe('authStateChanged', (user: User | null) => {
      if (user) setUser(user);
    });
    return () => {
      firebaseObserver.unsubscribe('authStateChanged');
    };
  }, [authentication]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen App">
        <Header />
        <Router />
      </div>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
