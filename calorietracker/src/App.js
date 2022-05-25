import { TextField, AppBar, Typography, Toolbar ,Box, IconButton, Grid} from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MapIcon from '@mui/icons-material/Map';



function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>    
      <AppBar position="static">
      <Toolbar>
      <Grid  container 
      spacing={12} justifyContent="space-between"  >
          <Grid item >
      <IconButton size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
              <RestaurantIcon flex={2} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
            </IconButton>
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontSize:34,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
              Calorie Tracker
              </Typography>
              </Grid>
              <Grid item>                
              <IconButton size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
              <MapIcon flex={2} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
            </IconButton>
            </Grid>
            </Grid>
              </Toolbar>
              </AppBar>
      <div>
        <Box flex={2} p={8}>
          <TextField fullWidth label="Search Food name" id="Search Food name" />
        </Box>
      </div>
      </Box>  
  );
}

export default App;
