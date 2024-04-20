import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import theme from "../../../theme/theme.js";

const Loader = () => {
    return (
        <Backdrop
            sx={{ color: theme.palette.primary.main, backgroundColor: "#CFCFCF"}}
            open={true}
        >
            <CircularProgress size={120}  />
        </Backdrop>
    );
};

export default Loader;
