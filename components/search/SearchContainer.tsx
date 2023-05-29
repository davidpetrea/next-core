'use client';
import debounce from 'lodash.debounce';
import React, { useEffect, useMemo, useState } from 'react';
import SearchInput from './SearchInput';

import { UsersResponseSuccess, getUsersByName } from '@/lib/supabase';
import UserCard from './UserCard';

const SearchContainer = () => {
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState<UsersResponseSuccess>([]);

  const debouncedGetUsers = useMemo(() => {
    return debounce(async () => {
      const { data } = await getUsersByName(searchText);

      if (data) {
        setUsers(data);
      }
    }, 500);
  }, [searchText]);

  useEffect(() => {
    if (!searchText) return;

    debouncedGetUsers();

    return () => {
      debouncedGetUsers.cancel();
    };
  }, [searchText, debouncedGetUsers]);

  return (
    <div>
      <SearchInput value={searchText} setSearchText={setSearchText} />
      {!searchText && <div className='my-8'>List of default stuff</div>}
      {searchText && (
        <div className='grid grid-cols-2 xl:grid-cols-4 gap-4 my-8'>
          {users?.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchContainer;
