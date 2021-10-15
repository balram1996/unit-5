import Button from '@mui/material/Button';
import NavigationIcon from '@mui/icons-material/Navigation';
import React from 'react';
import Fab from '@mui/material/Fab';
import Slider from '@mui/material/Slider';


function App() {

  return (
    <div >
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Slider
        size="small"
        defaultValue={20}
        aria-label="Small"
        valueLabelDisplay=""
        
      />
    </div>
  );
}

export default App;
