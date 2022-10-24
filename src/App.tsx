import { useEffect } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { getAuth, User } from 'firebase/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { app } from '@/lib/firebase-config';
import Router from './routes';
import { useStore } from '@/store/index';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
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
              const unsubscribeSetTimeout = setTimeout(() => {
                authentication.currentUser?.reload();
                authentication.currentUser?.getIdToken(/* forceRefresh */ true);
              }, 2500);

              if (user && user.emailVerified) {
                firebaseObserver.publish('authStateChanged', user);
                clearTimeout(unsubscribeSetTimeout); //delete interval
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
      <div className="h-screen text-gray-800 bg-white -z-50 dark:bg-gray-800 dark:text-gray-200">
        <Router />
      </div>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
