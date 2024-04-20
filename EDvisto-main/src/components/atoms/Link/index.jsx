import Link from "@mui/material/Link";
// import {useNavigate} from 'react-router-dom';
import theme from "../../../theme/theme.js";
import "./Link.css";

const index = ({ link, text }) => {
    return (
        <Link
            href={link}
            underline="none"
            color={theme.palette.text}
            sx={{ textAlign: "center" }}
        >
            {text}
        </Link>
    );
};

export default index;
