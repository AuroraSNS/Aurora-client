import styled from 'styled-components';

export const IconClear = styled.div`
    background: url('images/aurora_icon.png') no-repeat -316px -175px;
    width: 7px;
    height: 7px;
`;

export const IconGallery = styled.div`
    background: url('images/aurora_icon.png') no-repeat -288px -170px;
    width: 14px;
    height: 14px;
`;

export const IconMore = styled.div`
    background: url('images/aurora_icon.png') no-repeat -129px -178px;
    width: 15px;
    height: 3px;
`;

export const IconLogoBig = styled.div`
    width: 157px;
    margin: 5px auto;
    height: 40px;
    color: transparent;
    background: url('/images/aurora_icon.png');
`;

export const IconSun = () => (
    <svg id="sun-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="6" stroke="#ED9A9A" strokeWidth="2" />
        <line x1="14" y1="1" x2="14" y2="4" stroke="#ED9A9A" strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="24" x2="14" y2="27" stroke="#ED9A9A" strokeWidth="2" strokeLinecap="round" />
        <line x1="27" y1="14" x2="24" y2="14" stroke="#ED9A9A" strokeWidth="2" strokeLinecap="round" />
        <line x1="4" y1="14" x2="1" y2="14" stroke="#ED9A9A" strokeWidth="2" strokeLinecap="round" />
        <line
            x1="6.12131"
            y1="6.53552"
            x2="3.99999"
            y2="4.4142"
            stroke="#ED9A9A"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path d="M24.1213 23.1213L22 21" stroke="#ED9A9A" strokeWidth="2" strokeLinecap="round" />
        <path d="M22.0001 7.12132L24.1214 5" stroke="#ED9A9A" strokeWidth="2" strokeLinecap="round" />
        <path d="M4.00003 24.1213L6.12135 22" stroke="#ED9A9A" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const IconCloud = () => (
    <svg id="cloud-icon" width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M23.1594 9.38344C24.7597 0.0625692 10.3578 -2.13066 7.6908 6.09365C-1.91046 6.09365 0.223177 18 5.37278 18H24.7597C29.5602 18 29.0268 9.38344 23.1594 9.38344Z"
            stroke="#B1B0B0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const IconRain = () => (
    <svg id="rain-icon" width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.27815 6.86483C12.2406 -4.13514 23.2406 2.36484 23.2406 9.86483C28.2406 9.86482 28.7406 16.3648 25.2781 17.9243H6.27815C-0.759357 16.3648 -0.759399 7.36484 6.27815 6.86483ZM6.27815 6.86483C8.7406 6.68988 10.7406 8.36482 11.2406 9.86483"
            stroke="#9AC6F0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <line
            x1="10.2458"
            y1="14.7661"
            x2="6.48342"
            y2="21.239"
            stroke="#9AC6F0"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <line
            x1="15.4094"
            y1="14.3537"
            x2="10.3537"
            y2="23.7926"
            stroke="#9AC6F0"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <line
            x1="20.1294"
            y1="15.3671"
            x2="16.3671"
            y2="21.8399"
            stroke="#9AC6F0"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

export const IconMoon = () => (
    <svg id="moon-icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.8487 1.47904C12.1132 0.994194 11.9345 0.386757 11.4497 0.122294C11.1566 -0.0375834 10.8187 -0.0355165 10.5388 0.0982421C10.539 0.0979369 10.5393 0.0976317 10.5395 0.0973266C4.59543 0.853326 0 5.92944 0 12.0789C0 18.7498 5.40782 24.1576 12.0787 24.1576C18.7496 24.1576 24.1574 18.7498 24.1574 12.0789C24.1574 11.9347 24.1549 11.7912 24.1499 11.6483C24.1712 11.478 24.1489 11.3001 24.0765 11.131C23.8589 10.6234 23.271 10.3883 22.7634 10.6058C17.191 12.994 13.8608 11.8089 12.2343 9.78975C10.5213 7.66326 10.3468 4.23258 11.8487 1.47904ZM22.377 12.9099C16.9179 14.8974 12.9091 13.8157 10.6768 11.0444C8.7394 8.63941 8.35926 5.19732 9.37186 2.17676C9.34384 2.24767 9.31672 2.31902 9.2905 2.39081C5.08038 3.60026 2 7.47984 2 12.0789C2 17.6452 6.51239 22.1576 12.0787 22.1576C17.3091 22.1576 21.609 18.1733 22.1089 13.0743C22.1993 13.021 22.2887 12.9662 22.377 12.9099Z"
            fill="#AC8DE0"
        />
    </svg>
);

export const IconLike = () => (
    <svg className="like" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.5 15L6.4125 13.921C2.55 10.1035 0 7.58583 0 4.49591C0 1.9782 1.815 0 4.125 0C5.43 0 6.6825 0.662125 7.5 1.70845C8.3175 0.662125 9.57 0 10.875 0C13.185 0 15 1.9782 15 4.49591C15 7.58583 12.45 10.1035 8.5875 13.9292L7.5 15Z"
            fill="url(#paint0_linear)"
        />
        <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="17.8996" y2="5.41462" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D3BAFC" />
                <stop offset="1" stopColor="#F8CBCB" />
            </linearGradient>
        </defs>
    </svg>
);

export const IconDislike = () => (
    <svg className="like" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7 13L6.13 12.1368C3.04 9.08283 1 7.06866 1 4.59673C1 2.58256 2.452 1 4.3 1C5.344 1 6.346 1.5297 7 2.36676C7.654 1.5297 8.656 1 9.7 1C11.548 1 13 2.58256 13 4.59673C13 7.06866 10.96 9.08284 7.87 12.1433L7 13Z"
            stroke="#707070"
            strokeWidth="2"
            strokeLinejoin="round"
        />
    </svg>
);

export const IconGoogle = () => (
    <svg data-name="Layer 1" height="22" id="Layer_1" viewBox="0 0 32 32" width="22" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16"
            fill="#00ac47"
        />
        <path
            d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16"
            fill="#4285f4"
        />
        <path
            d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z"
            fill="#ffba00"
        />
        <polygon fill="#2ab2db" points="8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374" />
        <path
            d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z"
            fill="#ea4435"
        />
        <polygon fill="#2ab2db" points="8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626" />
        <path d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z" fill="#4285f4" />
    </svg>
);

export const IconImageAdd = () => (
    <svg
        version="1.0"
        id="Layer_1"
        x="0px"
        y="0px"
        width="80px"
        viewBox="0 0 48 48"
        enableBackground="new 0 0 48 48"
        xmlSpace="preserve"
    >
        <path
            fill="#8CBCD6"
            d="M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"
        />
        <circle fill="#B3DDF5" cx="35" cy="16" r="3" />
        <polygon fill="#9AC9E3" points="20,16 9,32 31,32 " />
        <polygon fill="#B3DDF5" points="31,22 23,32 39,32 " />
        <circle fill="#43A047" cx="38" cy="38" r="10" />
        <g>
            <rect x="36" y="32" fill="#FFFFFF" width="4" height="12" />
            <rect x="32" y="36" fill="#FFFFFF" width="12" height="4" />
        </g>
    </svg>
);
