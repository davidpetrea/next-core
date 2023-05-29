'use client';

import React from 'react';
import TextField from '@/components/common/TextField';

type SearchInputProps = {
  value: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput = (props: SearchInputProps) => {
  return (
    <TextField
      id='search'
      placeholder='Search users & posts...'
      inputProps={{
        value: props.value,
        onChange: (e: React.FormEvent<HTMLInputElement>) =>
          props.setSearchText(e.currentTarget.value),
      }}
      hasMaxWidth
    />
  );
};

export default SearchInput;
