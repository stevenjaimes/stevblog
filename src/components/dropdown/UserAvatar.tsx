import { User } from '@supabase/supabase-js';

interface UserAvatarProps {
  user: User;
}

export const UserAvatar = ({ user }: UserAvatarProps) => (
  <img
    src={user.user_metadata.picture}
    alt={user.user_metadata.full_name}
    className="w-8 h-8 rounded-full border-2 border-white/20"
  />
);