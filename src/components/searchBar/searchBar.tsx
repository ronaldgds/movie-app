import React from "react";
import { TextField } from "@mui/material";
import { useState } from "react";

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (value: string) => void
}



export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
    
    const [localSearchTerm, setLocalSearchTerm] = useState('')
    
    return (
      <div className="search">
        <TextField 
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          value={localSearchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    );
  }