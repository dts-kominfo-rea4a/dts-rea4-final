import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Router from './routes';

function App() {
  const queryClient = new QueryClient();
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
