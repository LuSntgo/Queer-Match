import React, { useContext, useState, useEffect } from "react";
import { Box, Text, ResponsiveContext, Nav } from "grommet";
import { NavBar } from "../../components/NavBar";
import { FooterBar } from "../../components/Footer";
import { getMovies } from "../../services/api";

export function Recommendations() {
  const size = useContext(ResponsiveContext);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies()
      .then(res => setMovies(res.data.movies))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Box>
        {/* <NavBar/> */} 
        <Box pad="large">
          <Box>
            <Text>Em breve!</Text>
          </Box>
        </Box>
        <FooterBar />
      </Box>
    </>
  );
}
