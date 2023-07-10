import React, { FC, PropsWithChildren } from "react";
import Grid from "@mui/material/Unstable_Grid2";

const Center: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid container justifyContent="center">
      {children}
    </Grid>
  );
};

export default Center;

