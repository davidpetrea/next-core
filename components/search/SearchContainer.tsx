'use client';
import debounce from 'lodash.debounce';
import React, { useEffect, useMemo, useState } from 'react';
import SearchInput from './SearchInput';

import { UsersResponseSuccess, getUsersByName } from '@/lib/supabase';

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
      {!searchText && <div>List of default stuff</div>}
      {searchText && (
        <ul>
          {users?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchContainer;
