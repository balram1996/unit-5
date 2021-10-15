import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export default function Carding({value,profit,order}) {
  return (
    <>
      <Box>
          <Card variant="outlined">
          <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            
        </Typography>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
           Users: {value}
        </Typography>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
           Profit: {profit}
        </Typography>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
           Order :{order}
        </Typography>
        </CardContent>
          </Card>
      </Box>
    </>
  );
}
