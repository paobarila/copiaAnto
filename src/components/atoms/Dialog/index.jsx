import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import theme from "../../../theme/theme.js";

const DialogContainer = ({ children }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);

    const handleClose = (path) => {
        setOpen(false);
        navigate(path);
    };

    return (
        <Dialog
            fullScreen
            open={open}
            scroll="body"
            onClose={()=> handleClose("/")}
            sx={{'& .MuiDialog-paper': {backgroundColor: theme.palette.background.main, display: "flex", alingItem:"center" }}}
        >
            {children}
        </Dialog>
    );
};

DialogContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DialogContainer;
