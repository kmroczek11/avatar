import Alert, { AlertColor } from "@mui/material/Alert";

interface CustomAlertProps {
    severity: AlertColor | undefined;
    msg: any;
}

export default function CustomAlert(props: CustomAlertProps) {
    const { severity, msg } = props;

    return (
        <Alert severity={severity} sx={{ width: "100%" }}>
            {msg}
        </Alert>
    );
};