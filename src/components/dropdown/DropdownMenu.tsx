import { LogoutIcon } from '../icons/LogoutIcon';

interface DropdownMenuProps {
  isOpen: boolean;
  onSignOut: () => void;
}

export const DropdownMenu = ({ isOpen, onSignOut }: DropdownMenuProps) => (
  <div
    className={`
      absolute right-0 md:right-0 left-0 md:left-auto mt-2 w-full md:w-48 
      rounded-lg bg-white/85 shadow-lg 
      transform transition-all duration-600 
      origin-top md:origin-top-right
      ${isOpen 
        ? 'opacity-100 scale-100 translate-y-0' 
        : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
    `}
  >
    <div className="py-1">
      <button
        onClick={onSignOut}
        className="w-full text-left px-4 py-3 text-sm text-gray-700
          hover:bg-gray-100 transition-colors flex items-center space-x-2
          rounded-lg mx-1"
      >
        <LogoutIcon className="w-4 h-4" />
        <span>Cerrar Sesión</span>
      </button>
    </div>
  </div>
);