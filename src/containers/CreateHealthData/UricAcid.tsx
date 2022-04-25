import { Avatar, Box, Button, Container, createTheme, CssBaseline, Dialog, DialogTitle, TextField, ThemeProvider } from "@mui/material"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";

import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

function CreateUricAcidFormComp() {

    const navigator = useNavigate();

    const [key, _] = useState("KUricAcid");
    const [value, setValue] = useState<string>("");
    const [date, setDate] = useState<Date | null>(new Date());

    const handleComfirm = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }, []);

    const handleValueChanged = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
    }, []);

    const isValueError = !(+value >= 0);
    console.log(isValueError);
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Container component='main' maxWidth="xs">
                    <CssBaseline />
                    <Box mt={2} display='flex' flexDirection='column' alignItems='center'>
                        <Avatar> U </Avatar>
                    </Box>
                    <Box component='form' onSubmit={handleComfirm} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            error={isValueError}
                            id="uric_Acid.value"
                            name="uric_Acid.value"
                            autoComplete="my-health-data.uric_Acid.value"
                            autoFocus
                            helperText="正常范围 240-420"
                            label={isValueError ? "Error" : key}
                            value={value}
                            onChange={handleValueChanged}
                            variant={isValueError ? "filled" : "outlined"}
                        />

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="录入时间"
                                value={date}
                                onChange={(newValue) => { setDate(newValue) }}
                                renderInput={(params) => <TextField fullWidth required {...params} />}
                            />
                        </LocalizationProvider>

                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}> 添加 </Button>
                    </Box>
                </Container>
            </ThemeProvider>

        </div>
    )
}

export interface CreateUricAcidFormDialogProps {
    open?: boolean;
    onClose: () => void;
}

function CreateUricAcidFormDialog(props: CreateUricAcidFormDialogProps) {
    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    };
    return (
        <CreateUricAcidFormComp />
    );
}

export { CreateUricAcidFormComp, CreateUricAcidFormDialog }