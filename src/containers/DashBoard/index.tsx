import { Container, Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";
import { LineCharData, LineChartComp } from "./LineChart";

const data: LineCharData = {
    title: "v1",
    limit: [240, 420],
    values: [
        [572, '2022-02-17'],
        [282, '2022-03-17']
    ]
}

function Deposits() {
    return (
        <React.Fragment>
            <Typography component="p" variant="h4" gutterBottom>
                预警指标
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                on 10 2021
            </Typography>
            <div>
                <Link color="primary" underline="none">
                    View
                </Link>
            </div>
        </React.Fragment>
    );
}

function DashBoard() {
    return (
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
                        {LineChartComp(data)}
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
                        <Deposits />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DashBoard;