import React from 'react';
import Svg, {Path} from 'react-native-svg';

const PiggybankIcon = () => {
  return (
    <Svg width="33" height="32" viewBox="0 0 33 32" fill="none">
      <Path
        d="M14.4033 1.33337C13.0044 1.33853 11.6643 1.92009 10.6752 2.95121C9.68607 3.98232 9.1282 5.37934 9.12325 6.83755C9.12325 7.81607 9.3896 8.72487 9.82021 9.5138C7.70704 10.803 6.05264 12.6328 5.16325 14.788H5.01658C4.93906 14.7899 4.86198 14.7753 4.79001 14.7452C4.71803 14.7151 4.65265 14.6701 4.59782 14.613C4.54299 14.5558 4.49984 14.4877 4.47098 14.4126C4.44212 14.3376 4.42815 14.2573 4.42992 14.1764C4.42992 13.9612 4.53552 13.7899 4.68688 13.6798L3.32933 11.6922C2.94489 11.9709 2.6308 12.3424 2.41383 12.7749C2.19686 13.2075 2.08344 13.6883 2.08325 14.1764C2.08325 15.6809 3.16037 16.9139 4.54021 17.1585C4.48037 17.5866 4.42992 18.0135 4.42992 18.4575C4.42992 21.5056 5.98341 24.1476 8.24325 26.1022C7.9593 27.3253 8.10128 28.6292 9.01296 29.5808C9.68604 30.2764 10.5955 30.6667 11.5433 30.6667C12.491 30.6667 13.4005 30.2764 14.0735 29.5808L14.5135 29.1221C15.4299 29.2982 16.351 29.4658 17.3366 29.4658C18.3222 29.4658 19.2433 29.2982 20.1596 29.1221L20.5996 29.5808C21.2727 30.2764 22.1821 30.6667 23.1299 30.6667C24.0777 30.6667 24.9871 30.2764 25.6602 29.5808C26.5531 28.6487 26.6869 27.3828 26.4299 26.178C27.3708 25.3814 28.1764 24.4254 28.813 23.3501H31.4166V13.5649H28.7402C28.3142 12.844 27.8094 12.177 27.236 11.5773L27.8966 7.79283V6.22597H26.7232C26.7232 6.22597 23.9049 6.2749 21.516 8.13775C20.8888 7.94914 20.2523 7.79562 19.6093 7.67785C19.6563 7.40631 19.6833 7.12376 19.6833 6.83755C19.6833 3.8127 17.3049 1.33337 14.4033 1.33337ZM14.4033 3.77967C16.0342 3.77967 17.3366 5.13737 17.3366 6.83755C17.3366 7.04793 17.3002 7.24852 17.2627 7.44912C15.3701 7.45891 13.5831 7.84053 11.9475 8.48146C11.6359 7.99474 11.4697 7.42268 11.4699 6.83755C11.4699 5.13737 12.7723 3.77967 14.4033 3.77967ZM25.2566 8.90222C25.2754 8.89733 25.2754 8.90589 25.293 8.90222L24.853 11.691L24.7438 12.3417L25.2566 12.8004C26.04 13.5077 26.6871 14.3641 27.1632 15.3238L27.493 16.0112H29.0699V20.9038H27.493L27.1632 21.5924C26.5907 22.7715 25.6872 23.8087 24.5232 24.687L23.6796 25.3377L24.1935 26.3321C24.4728 26.8238 24.4223 27.4305 24.0093 27.861C23.898 27.9821 23.7642 28.0784 23.6162 28.1442C23.4682 28.21 23.309 28.244 23.1481 28.244C22.9872 28.244 22.828 28.21 22.68 28.1442C22.532 28.0784 22.3982 27.9821 22.2869 27.861L21.4433 26.9804L20.9669 26.5229L20.3427 26.6758C19.3899 26.9045 18.3773 27.0195 17.3366 27.0195C16.325 27.0233 15.3161 26.908 14.3293 26.6758L13.7075 26.5229L13.2299 26.9816L12.3863 27.8598C12.2749 27.9811 12.1411 28.0776 11.993 28.1435C11.8449 28.2094 11.6855 28.2434 11.5245 28.2434C11.3634 28.2434 11.2041 28.2094 11.0559 28.1435C10.9078 28.0776 10.7741 27.9811 10.6627 27.8598C10.4696 27.6649 10.3461 27.407 10.3128 27.129C10.2795 26.8509 10.3384 26.5693 10.4796 26.3309L10.9935 25.3377L10.1499 24.6882C8.02736 23.081 6.77658 20.8891 6.77658 18.4575C6.77658 13.8804 11.3643 9.89542 17.3366 9.89542C18.7798 9.89542 20.1549 10.1205 21.4069 10.5449L22.0299 10.7749L22.5438 10.3162C23.3816 9.53704 24.4177 9.1175 25.2566 8.90222ZM24.3766 16.0112C23.7312 16.0112 23.2033 16.5616 23.2033 17.2343C23.2033 17.907 23.7312 18.4575 24.3766 18.4575C25.0219 18.4575 25.5499 17.907 25.5499 17.2343C25.5499 16.5616 25.0219 16.0112 24.3766 16.0112Z"
        fill="#7476ED"
      />
    </Svg>
  );
};

export default PiggybankIcon;