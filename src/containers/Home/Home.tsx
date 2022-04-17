import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box, Container, createTheme, CssBaseline, Grid, Paper, ThemeProvider, Toolbar } from "@mui/material";
import { HomeSider } from "./HomeSider";
import { HomeBar } from "./HomeBar";
import { Chart } from "../DashBoard/Chart";

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
                            {/* Chart */}
                            <Grid item xs={12} md={8} lg={9}>
                                <Paper sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240
                                }}>
                                    <Chart />
                                </Paper>
                            </Grid>
                            {/* Recent Deposits */}
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper elevation={3} sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240
                                }}>
                                    Deposits
                                </Paper>
                            </Grid>
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