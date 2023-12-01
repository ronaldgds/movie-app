import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBar({
  searchTerm,
  onSearchChange,
}: SearchBarProps) {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  const handleLocalSearchChange = (value: string) => {
    setLocalSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <div className="search">
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        label="Search"
        value={localSearchTerm}
        onChange={(e) => handleLocalSearchChange(e.target.value as string)}
      />
    </div>
  );
}
