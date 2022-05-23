import { Box, Spinner } from "grommet";

function Loading() {
  return (

    <Box align="center" direction="row" gap="small" pad="small" >
      <Spinner color='#883100' />
    </Box>
  );
}

export default Loading;
