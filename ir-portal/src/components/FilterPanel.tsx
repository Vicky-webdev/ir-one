import React from "react";
import {
  Box,
  Typography,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  IconButton,
} from "@mui/material";
import Grid from '@mui/material/Grid';
import RestartAltIcon from "@mui/icons-material/RestartAlt";

interface FilterPanelProps {
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
  sizeRange: [number, number];
  setSizeRange: React.Dispatch<React.SetStateAction<[number, number]>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  resetFilters: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  priceRange,
  setPriceRange,
  sizeRange,
  setSizeRange,
  location,
  setLocation,
  resetFilters,
}) => {
  return (
    <Box
      sx={{
        p: 2,
        bgcolor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: 1,
        overflowX: "auto",
      }}
    >
      <Grid container spacing={2} alignItems="center" wrap="nowrap">
        <Grid >
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel>Location</InputLabel>
            <Select
              value={location}
              label="Location"
              onChange={(e) => setLocation(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Chennai">Chennai</MenuItem>
              <MenuItem value="Coimbatore">Coimbatore</MenuItem>
              <MenuItem value="Madurai">Madurai</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid >
          <Box sx={{ minWidth: 200 }}>
            <Typography variant="body2" gutterBottom>
              Price (₹)
            </Typography>
            <Slider
              value={priceRange}
              min={0}
              max={10000000}
              step={50000}
              onChange={(_, newValue) =>
                setPriceRange(newValue as [number, number])
              }
              valueLabelDisplay="auto"
              size="small"
            />
          </Box>
        </Grid>

        <Grid>
          <Box sx={{ minWidth: 200 }}>
            <Typography variant="body2" gutterBottom>
              Size (Sq.Ft)
            </Typography>
            <Slider
              value={sizeRange}
              min={0}
              max={10000}
              step={50}
              onChange={(_, newValue) =>
                setSizeRange(newValue as [number, number])
              }
              valueLabelDisplay="auto"
              size="small"
            />
          </Box>
        </Grid>

        <Grid >
          <Button
            variant="text"
            size="small"
            startIcon={<RestartAltIcon />}
            onClick={resetFilters}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilterPanel;