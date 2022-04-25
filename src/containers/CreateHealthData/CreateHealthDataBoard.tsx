import { Box, Card, CardActionArea, CardContent, CardHeader, createTheme, Grid, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import { BootstrapDialogComp } from "../../components/Dialog";
import { CreateUricAcidFormDialog } from './UricAcid';

const theme = createTheme();

function CreateHealthDataBoard() {
    const [isUricacidOpen, setIsUricacidOpen] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            {/* Modal Dialog */}
            {
                isUricacidOpen ?
                    <BootstrapDialogComp
                        title="尿酸"
                        open={isUricacidOpen}
                        onClose={() => { setIsUricacidOpen(false) }}
                        children={<CreateUricAcidFormDialog onClose={() => { }} />}
                    />
                    : null
            }
            {/* Modal Dialog */}
            <Box m={5}>
                <Grid
                    container
                    justifyContent="flex-start"
                    alignItems="stretch"
                    direction="row"
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item>
                        <Card>
                            <CardActionArea onClick={() => { setIsUricacidOpen(true) }}>
                                <CardHeader
                                    title="尿酸"
                                    subheader="September 14, 2016"
                                />
                                <CardContent>
                                    <Typography variant='body2' color="text.secondary" gutterBottom>
                                        balabala
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                </Grid>
            </Box>
        </ThemeProvider >

    )
}

export { CreateHealthDataBoard };