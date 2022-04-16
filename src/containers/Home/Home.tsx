import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box, Container, createTheme, CssBaseline, Grid, ThemeProvider, Toolbar } from "@mui/material";
import { HomeSider } from "./HomeSider";
import { HomeBar } from "./HomeBar";

const mdTheme = createTheme();

const Home = () => {
    return (
        <ThemeProvider theme={mdTheme}>
            <Box display='flex'>
                <CssBaseline />

                <HomeBar />
                <HomeSider />

                <Box component="main" sx={{
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto'
                }}>
                    <Toolbar />
                    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            dfasdfasdfasdfasdfasdfasdfasdfasdfasdfasfafasfaf
                        </Grid>
                    </Container>
                </Box>
            </Box>
            {/* 
            
            <Routes>
                <Route path="dashboard" element={<DashBoard />} />
            </Routes> */}
        </ThemeProvider >
    )
}

export { Home };