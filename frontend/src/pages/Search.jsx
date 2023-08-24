import { Box, Drawer, FormControl, Input, InputAdornment, InputLabel, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Height } from '@mui/icons-material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Search = ({setOpenSearch}) => {

 



  return (

    <Box >

      <Box sx={
          {
            marginBottom:"5px",
            marginTop:"5px",
            display:"flex",
            alignItem:"center",
            justifyContent:"justify",
            
            }}
            onClick={() => setOpenSearch(false)} >
        <ArrowBackIcon />
      </Box>

      <Box>

      <FormControl variant="standard" fullWidth>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          }
          
          label="buscar"
          fullWidth
          
        />
      </FormControl>
      </Box>
  </Box>





  )
}

export default Search