import Button from '@/components/Button';
import { useLogoutQuery } from '@/services/queries/auth.query';
import { useStore } from '@/store/index';

const Header = () => {
  const { setIsAuthenticated, user, setUser } = useStore((state) => state);
  const { mutateAsync: logout } = useLogoutQuery();

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    logout();
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center px-2 py-4">
                <span className="text-lg font-semibold text-gray-500">
                  Free Games App
                </span>
              </a>
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
          </div>
          <div className="flex items-center md:hidden">
            {user && (
              <Button
                text="Logout"
                className="px-3 py-3 text-xs font-medium text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-400"
                onClick={handleLogout}
              />
            )}
            {/* <button
              className="outline-none mobile-menu-button"
              title="mobile menu"
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-blue-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
