import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const Achievement = () => {
  return (
    <Card sx={{ position: 'relative',bgcolor:"#1E272E",color:"white", }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: '.25px' }}>
          Shop With Azad
        </Typography>

        <Typography>
          Congratulations 🎉
        </Typography>

        <Typography variant='h5' sx={{ mt: 2 }}>
          420.8k
        </Typography>

        {/* Button at the bottom */}
        <Button size="small" variant="contained" sx={{ mt:2 }}>
          View Sales
        </Button>

      </CardContent>
    </Card>
  );
};

export default Achievement;
