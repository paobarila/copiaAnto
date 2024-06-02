import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/system/Box';
import StarFilled from '../Icon/StarFilled';
import StarEmpty from '../Icon/Star';


function CustomizedRating({ defaultValue, readOnly }) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      
      <Rating
      name="customized-color"
      defaultValue={0}
      value={value}
      icon={<StarFilled
       color={'#33B5FF'}
       width={26}/>}
      emptyIcon={<StarEmpty
        color={'#33B5FF'}
        width={26}/>}
        readOnly={readOnly}
      onChange={(event, newValue) => {
      setValue(newValue);
        }}
        
   />
  </Box>
)}

export default CustomizedRating;