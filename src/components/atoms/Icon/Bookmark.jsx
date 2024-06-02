import PropTypes from 'prop-types';

const Bookmark = ({color, width}) => {
    return (
        <svg
            width={width}
            height={width}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_562_7974)">
                <path
                    d="M12.3622 16.9353C12.2552 17.1082 12.1346 17.2725 12.0017 17.4265C10.0163 19.3833 8.02626 21.3356 6.03158 23.2831C5.69399 23.619 5.32464 23.9217 4.92872 24.1867C4.25723 24.6242 3.72728 24.3601 3.61548 23.5628C3.59629 23.3522 3.59188 23.1404 3.60228 22.9292C3.60971 17.959 3.60435 12.9889 3.63325 8.01889C3.6445 6.06387 3.72151 4.10885 3.79335 2.15476C3.8258 1.73358 3.89766 1.31637 4.00805 0.908555C4.12511 0.399357 4.26611 0.262563 4.80289 0.219512C5.89388 0.131968 6.98704 0.0313464 8.08031 0.0166183C12.072 -0.0368356 16.0643 -0.0539298 20.0563 -0.0939941C20.585 -0.0886513 21.1078 0.0167677 21.5971 0.216646C21.7156 0.256228 21.8204 0.328739 21.8989 0.425675C21.9776 0.52261 22.0268 0.639938 22.041 0.763847C22.0788 1.00716 22.0953 1.25325 22.0904 1.49941C21.8268 8.35238 21.6973 15.2063 21.8899 22.0639C21.887 22.6052 21.8413 23.1454 21.7533 23.6794C21.7005 24.0795 21.3197 24.3152 20.8809 24.2561C20.4385 24.1947 20.0342 23.973 19.7448 23.6335C17.5434 21.1778 14.8539 19.2621 12.3622 16.9353ZM20.7077 1.11351L5.12362 1.22618C5.10297 1.40807 5.08399 1.50994 5.08162 1.61211C5.05777 2.68612 5.0114 3.76033 5.01873 4.83414C5.05713 10.4561 5.10344 16.0779 5.15767 21.6995C5.1587 21.8098 5.17347 21.9199 5.18751 22.1052C5.37682 21.9292 5.50691 21.8156 5.62882 21.694C7.57703 19.7497 9.52426 17.8045 11.4706 15.8586C12.1806 15.1473 12.6314 15.1288 13.3759 15.7824C14.3174 16.6089 15.2741 17.4183 16.2117 18.2493C17.545 19.4308 18.8666 20.6256 20.1947 21.8129C20.2819 21.8777 20.3729 21.9372 20.4673 21.9911C20.0759 15.0016 20.5056 8.10098 20.7077 1.11351Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_562_7974">
                    <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5 0.189941)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

Bookmark.propTypes = {
    color: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
}

export default Bookmark;
