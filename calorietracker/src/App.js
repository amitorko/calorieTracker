import { TextField, Box} from "@mui/material";
import { Navbar } from "./Navbar";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>    
      <Navbar/>
      <div>
        <Box flex={2} p={8}>
          <TextField fullWidth label="Search Food name" id="Search Food name" />
        </Box>
      </div>
      </Box>  
  );
}

export default App;
