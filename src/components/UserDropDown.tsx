import { useState, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useClickOutside } from '../hooks/useClickOutside';
import { ChevronDownIcon } from '../components/icons/ChevronDownIcon';

import { UserAvatar } from '../components/dropdown/UserAvatar';
import { DropdownMenu } from '../components/dropdown/DropdownMenu';

export const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user, signOut } = useAuth();

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsOpen(false);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  if (!user) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 transition-all duration-200 rounded-lg px-3 py-2 w-full md:w-auto"
      >
        <UserAvatar user={user} />
        <span className="text-white font-medium">{user.user_metadata.full_name}</span>
        <ChevronDownIcon 
          className={`w-5 h-5 text-white/80 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>

      <DropdownMenu 
        isOpen={isOpen} 
        onSignOut={handleSignOut}
      />
    </div>
  );
};