import React from 'react';
import { AccountCircle, PhotoCamera } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import { Avatar, Box, Card, CardActionArea, CardContent, Grid, IconButton, TextField } from '@mui/material';

const AccountSettingsPage = ({ details, updateProfilePic }) => {
  return (
    <div>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Card sx={{ minWidth: 500, mt: '5rem' }}>
          <CardContent>
            <Box sx={{ position: 'relative' }}>
            <Avatar sx={{ width: 150, height: 150, mx: 'auto', backgroundColor: 'black' }} />


              <Avatar sx={{ position: 'absolute', zIndex: 100, bottom: 10, right: 155 }}>
                <IconButton color="primary" aria-label="upload picture" component="label">
                  <input hidden accept="image/*" type="file"  />
                </IconButton>
              </Avatar>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField 
              
              id="input-with-sx" fullWidth variant="standard" value={details.user?.name} />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
              <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                
                id="filled-size-normal"
                fullWidth
                type="email"
                value ={details.user?.email}
              
                variant="standard"
              />
            </Box>
          </CardContent>
          <CardActionArea>
            {/* <Button sx={{ my: 2 }} variant="outlined" color="error" >
            </Button> */}
          </CardActionArea>
        </Card>
      </Grid>
    </div>
  );
};

export default AccountSettingsPage;
