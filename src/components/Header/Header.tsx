import Button from '@/components/Button';
import ToggleModeSwitch from '@/components/Button/ToggleModeSwitch';
import { useLogoutQuery } from '@/services/queries/auth.query';
import { useStore } from '@/store/index';
import { Link } from 'react-router-dom';

const Header = () => {
  const { setIsAuthenticated, user, setUser } = useStore((state) => state);
  const { mutateAsync: logout } = useLogoutQuery();

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    logout();
  };

  return (
    <nav className="z-50 order-1 w-full drop-shadow-lg dark:drop-shadow-2xl bg-slate-300 dark:bg-gray-900">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center px-2 py-4">
                <span className="text-lg font-bold text-gray-700 dark:text-gray-200">
                  Free Games App
                </span>
              </Link>
            </div>
          </div>
          <div className="items-center hidden space-x-3 md:flex ">
            {user && (
              <Button
                text="Logout"
                className="px-3 py-3 text-xs font-medium text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-400"
                onClick={handleLogout}
              />
            )}
            <ToggleModeSwitch size={56} />
          </div>
          <div className="flex items-center md:hidden">
            {user && (
              <Button
                text="Logout"
                className="px-3 py-3 text-xs font-medium text-white transition duration-300 bg-blue-500 rounded h-9 hover:bg-blue-400"
                onClick={handleLogout}
              />
            )}
            <ToggleModeSwitch size={42} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
