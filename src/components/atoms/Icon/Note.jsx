import PropTypes from "prop-types";

const Note = ({ color, width }) => {
    return (
        <svg
            width={width}
            height={width}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_1175_3595)">
                <path
                    d="M23.9123 12.9287C23.9429 15.2062 23.9837 17.4835 23.9984 19.7609C24.0035 20.5659 23.9262 21.3709 23.9203 22.1761C23.9112 23.3286 22.8081 24.0308 21.512 24.0529C18.8776 24.0982 16.2423 24.1485 13.6077 24.1377C10.5139 24.125 7.42008 24.0593 4.32698 23.9943C3.60247 23.9646 2.8806 23.902 2.16477 23.8066C1.29151 23.7076 0.429068 22.8961 0.397366 22.1245C0.317105 20.1741 0.226456 18.2234 0.2 16.2722C0.14173 11.9794 0.130242 7.68656 0.0739824 3.39427C0.0653871 2.73504 0.0840125 2.09599 0.420013 1.48566C0.670952 1.0293 1.0285 0.657952 1.65239 0.520654C1.87318 0.473739 2.09974 0.447017 2.32785 0.440967C3.3008 0.40945 4.27555 0.406863 5.24727 0.36004C8.60827 0.197927 11.9688 0.257257 15.3298 0.348366C15.7875 0.360774 16.2463 0.381101 16.7035 0.369327C16.8848 0.365145 17.0652 0.39052 17.2341 0.443973C17.4031 0.497427 17.557 0.577832 17.687 0.680471C19.4138 1.92593 21.1305 3.18121 22.8777 4.40783C23.4815 4.83186 23.6887 5.32466 23.6968 5.95762C23.7265 8.28164 23.8054 10.6053 23.8657 12.9292L23.9123 12.9287ZM15.8673 1.4953C15.5313 1.47384 15.2492 1.44348 14.9666 1.43958C12.5611 1.4068 10.1555 1.37694 7.74974 1.35008C6.66226 1.33794 5.57456 1.33261 4.48697 1.32717C3.93441 1.32446 3.38049 1.31036 2.82938 1.33354C2.05993 1.36596 1.82195 1.54588 1.68365 2.15766C1.5456 2.73632 1.51292 3.32831 1.58665 3.91467C1.6321 4.25338 1.65495 4.5938 1.65517 4.93451C1.66678 10.4029 1.67553 15.8714 1.68141 21.3398C1.67789 21.4482 1.683 21.5567 1.69671 21.6645C1.81124 22.3687 2.26958 22.8408 3.25581 22.8725C6.94043 22.9902 10.625 22.9914 14.3108 22.9408C16.1627 22.9153 18.015 22.9026 19.8672 22.8855C20.3057 22.8814 20.7452 22.8953 21.183 22.8792C22.061 22.847 22.4406 22.5416 22.4333 21.844C22.4198 20.6213 22.3821 19.3987 22.3517 18.176C22.3359 17.5411 22.3197 16.906 22.2932 16.2714C22.2303 14.77 22.1311 13.2692 22.1027 11.7674C22.0711 10.0947 22.1027 8.42134 22.1044 6.74822C22.1044 6.62913 22.0896 6.51007 22.0814 6.38799C22.0168 6.37543 21.9511 6.36696 21.8849 6.36269C20.7206 6.38162 19.5563 6.41139 18.3918 6.417C18.0294 6.41924 17.6681 6.38554 17.3158 6.31653C16.5968 6.17316 16.3703 5.94801 16.2943 5.35072C16.2257 4.81186 16.1813 4.27092 16.1217 3.73124C16.0415 3.00825 15.9572 2.28495 15.8673 1.4953ZM21.2087 5.13519C21.2166 5.10253 21.2244 5.06983 21.2324 5.0371L17.4519 2.25414L17.3648 2.30031C17.5503 3.28902 17.736 4.27774 17.9271 5.29589L21.2087 5.13519Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_1175_3595">
                    <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.189941)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

Note.propTypes = {
    color: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
};

export default Note;