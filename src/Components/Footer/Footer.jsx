import React from "react";
import "./Footer.css";
import { CiFacebook } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
  return (
    <>
      {" "}
      <footer className="footer">
        <div className="footer-left">
          <svg
            width="139"
            height="27"
            viewBox="0 0 139 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.606298 20.966V17.5458H7.73752C7.92999 17.5458 8.10322 17.5088 8.2572 17.4346C8.41118 17.3419 8.53629 17.2214 8.63253 17.0731C8.72877 16.9248 8.77689 16.7673 8.77689 16.6004C8.77689 16.415 8.72877 16.2482 8.63253 16.0999C8.53629 15.9516 8.41118 15.8404 8.2572 15.7662C8.10322 15.6735 7.92999 15.6272 7.73752 15.6272H5.1391C4.17672 15.6272 3.30096 15.4789 2.51181 15.1823C1.7419 14.8671 1.12598 14.3852 0.664041 13.7364C0.221347 13.069 0 12.207 0 11.1504C0 10.3347 0.202099 9.5932 0.606298 8.92585C1.02974 8.2585 1.59755 7.72091 2.30971 7.31308C3.04111 6.90525 3.83989 6.70134 4.70603 6.70134H11.8372V10.1493H5.39894C5.12947 10.1493 4.8985 10.2327 4.70603 10.3996C4.5328 10.5664 4.44619 10.7703 4.44619 11.0113C4.44619 11.2709 4.5328 11.4933 4.70603 11.6787C4.8985 11.8455 5.12947 11.9289 5.39894 11.9289H7.93962C9.01748 11.9289 9.94136 12.0865 10.7113 12.4016C11.5004 12.6982 12.1067 13.1802 12.5302 13.8476C12.9729 14.5149 13.1942 15.3769 13.1942 16.4336C13.1942 17.2678 12.9729 18.0278 12.5302 18.7137C12.1067 19.3996 11.5293 19.9464 10.7979 20.3543C10.0857 20.7621 9.27732 20.966 8.37269 20.966H0.606298Z"
              fill="#0054CB"
            />
            <path
              d="M15.8871 20.966V6.70134H20.3911V20.966H15.8871ZM18.1391 5.08857C17.4269 5.08857 16.811 4.83831 16.2913 4.3378C15.7716 3.83728 15.5118 3.24408 15.5118 2.55819C15.5118 1.8723 15.7716 1.27909 16.2913 0.778579C16.811 0.259526 17.4269 0 18.1391 0C18.8513 0 19.4672 0.259526 19.9869 0.778579C20.5065 1.27909 20.7664 1.8723 20.7664 2.55819C20.7664 3.24408 20.5065 3.83728 19.9869 4.3378C19.4672 4.83831 18.8513 5.08857 18.1391 5.08857Z"
              fill="#0054CB"
            />
            <path
              d="M23.6689 20.966V12.5407C23.6689 11.3728 23.9479 10.3254 24.5061 9.39856C25.0835 8.45314 25.9016 7.71164 26.9602 7.17405C28.0188 6.63646 29.2795 6.36766 30.7423 6.36766C31.4737 6.36766 32.1474 6.45108 32.7633 6.61792C33.3792 6.76622 33.9374 6.9794 34.4379 7.25747C34.9576 7.51699 35.4002 7.83213 35.7659 8.20288H35.8237C36.2086 7.83213 36.6513 7.51699 37.1518 7.25747C37.6715 6.9794 38.2393 6.76622 38.8552 6.61792C39.4903 6.45108 40.1736 6.36766 40.905 6.36766C42.3679 6.36766 43.6286 6.63646 44.6872 7.17405C45.7458 7.71164 46.5638 8.45314 47.1413 9.39856C47.7187 10.3254 48.0074 11.3728 48.0074 12.5407V20.966H43.5035V12.6797C43.5035 12.2163 43.3784 11.7992 43.1281 11.4284C42.8972 11.0391 42.5796 10.724 42.1754 10.483C41.7712 10.242 41.3092 10.1215 40.7896 10.1215C40.2699 10.1215 39.7983 10.242 39.3749 10.483C38.9707 10.724 38.6531 11.0391 38.4221 11.4284C38.1911 11.7992 38.0757 12.2163 38.0757 12.6797V20.966H33.6006V12.6797C33.6006 12.2163 33.4755 11.7992 33.2253 11.4284C32.9943 11.0391 32.6671 10.724 32.2436 10.483C31.8394 10.242 31.3775 10.1215 30.8578 10.1215C30.3381 10.1215 29.8666 10.242 29.4431 10.483C29.0389 10.724 28.7213 11.0391 28.4904 11.4284C28.2594 11.7992 28.1439 12.2163 28.1439 12.6797V20.966H23.6689Z"
              fill="#0054CB"
            />
            <path
              d="M59.152 6.36766C60.403 6.36766 61.5098 6.56231 62.4722 6.9516C63.4538 7.32235 64.2814 7.85994 64.9551 8.56437C65.648 9.25026 66.1773 10.0659 66.543 11.0113C66.9087 11.9382 67.0916 12.967 67.0916 14.0978C67.0916 15.5067 66.7836 16.758 66.1677 17.8517C65.571 18.9269 64.7434 19.7703 63.6847 20.3821C62.6261 20.9938 61.3943 21.2997 59.9892 21.2997C59.3925 21.2997 58.8247 21.2255 58.2858 21.0772C57.7661 20.9289 57.2849 20.7158 56.8422 20.4377C56.4188 20.1596 56.0627 19.8167 55.774 19.4089H55.6874V27H51.2123V14.0978C51.2123 12.5221 51.5395 11.1596 52.194 10.0103C52.8484 8.86097 53.7723 7.97116 54.9656 7.34089C56.159 6.69207 57.5544 6.36766 59.152 6.36766ZM59.152 10.0937C58.459 10.0937 57.8527 10.2606 57.3331 10.5942C56.8326 10.9094 56.4477 11.3543 56.1782 11.9289C55.9087 12.4851 55.774 13.1153 55.774 13.8198C55.774 14.5242 55.9087 15.1545 56.1782 15.7106C56.4477 16.2667 56.8326 16.7116 57.3331 17.0453C57.8527 17.3605 58.459 17.518 59.152 17.518C59.8449 17.518 60.4415 17.3605 60.942 17.0453C61.4424 16.7116 61.8274 16.2667 62.0968 15.7106C62.3855 15.1545 62.5299 14.5242 62.5299 13.8198C62.5299 13.1153 62.3855 12.4851 62.0968 11.9289C61.8274 11.3543 61.4424 10.9094 60.942 10.5942C60.4415 10.2606 59.8449 10.0937 59.152 10.0937Z"
              fill="#0054CB"
            />
            <path
              d="M69.7389 20.966V0.667353H74.214V20.966H69.7389Z"
              fill="#0054CB"
            />
            <path
              d="M77.5207 20.966V6.70134H82.0246V20.966H77.5207ZM79.7726 5.08857C79.0605 5.08857 78.4445 4.83831 77.9249 4.3378C77.4052 3.83728 77.1453 3.24408 77.1453 2.55819C77.1453 1.8723 77.4052 1.27909 77.9249 0.778579C78.4445 0.259526 79.0605 0 79.7726 0C80.4848 0 81.1007 0.259526 81.6204 0.778579C82.1401 1.27909 82.3999 1.8723 82.3999 2.55819C82.3999 3.24408 82.1401 3.83728 81.6204 4.3378C81.1007 4.83831 80.4848 5.08857 79.7726 5.08857Z"
              fill="#0054CB"
            />
            <path
              d="M86.4284 20.966V10.2327H83.9454V6.70134H86.4284V4.83831C86.4284 3.54068 86.8133 2.52111 87.5832 1.77961C88.3531 1.0381 89.4117 0.667353 90.7591 0.667353H95.263V4.19876H91.7407C91.5097 4.19876 91.3076 4.28218 91.1344 4.44902C90.9804 4.59732 90.9034 4.7827 90.9034 5.00515V6.70134H94.6278V10.2327H90.9034V20.966H86.4284Z"
              fill="#0054CB"
            />
            <path
              d="M101.719 26.6107V21.0494C100.641 20.7899 99.7176 20.3728 98.9477 19.7981C98.1778 19.2049 97.5907 18.4912 97.1865 17.6571C96.7823 16.8043 96.5803 15.8867 96.5803 14.9042V6.70134H101.055V14.7652C101.055 15.2657 101.18 15.7291 101.431 16.1555C101.681 16.5819 102.018 16.9248 102.441 17.1843C102.884 17.4253 103.375 17.5458 103.914 17.5458C104.472 17.5458 104.963 17.4253 105.386 17.1843C105.829 16.9248 106.175 16.5819 106.425 16.1555C106.676 15.7291 106.801 15.2657 106.801 14.7652V6.70134H111.276V14.9042C111.276 15.8867 111.074 16.7951 110.669 17.6292C110.285 18.4634 109.707 19.1771 108.937 19.7703C108.187 20.3635 107.272 20.7806 106.194 21.0216V26.6107H101.719Z"
              fill="#0054CB"
            />
            <path
              d="M121.872 21.2997C120.64 21.2997 119.523 21.1143 118.522 20.7436C117.541 20.3728 116.713 19.8445 116.04 19.1586C115.366 18.4542 114.846 17.6292 114.48 16.6838C114.115 15.7384 113.932 14.7096 113.932 13.5973C113.932 12.1514 114.23 10.8908 114.827 9.81565C115.443 8.74047 116.28 7.89701 117.339 7.28527C118.417 6.67353 119.648 6.36766 121.034 6.36766C121.631 6.36766 122.189 6.44181 122.709 6.59011C123.248 6.73841 123.729 6.96087 124.152 7.25747C124.595 7.53553 124.961 7.86921 125.249 8.2585H125.336V0.667353H129.811V13.5695C129.811 15.1267 129.484 16.4892 128.83 17.6571C128.175 18.8249 127.251 19.724 126.058 20.3543C124.884 20.9846 123.488 21.2997 121.872 21.2997ZM121.872 17.5736C122.564 17.5736 123.161 17.4161 123.662 17.1009C124.181 16.7673 124.576 16.3223 124.845 15.7662C125.115 15.1916 125.249 14.552 125.249 13.8476C125.249 13.1432 125.115 12.5129 124.845 11.9567C124.576 11.4006 124.181 10.965 123.662 10.6498C123.161 10.3162 122.564 10.1493 121.872 10.1493C121.198 10.1493 120.601 10.3162 120.082 10.6498C119.562 10.965 119.167 11.4006 118.898 11.9567C118.628 12.5129 118.494 13.1432 118.494 13.8476C118.494 14.552 118.628 15.1916 118.898 15.7662C119.167 16.3223 119.562 16.7673 120.082 17.1009C120.601 17.4161 121.198 17.5736 121.872 17.5736Z"
              fill="#0054CB"
            />
            <path
              d="M139 17.1196C139 18.6521 137.71 19.8945 136.119 19.8945C134.528 19.8945 133.238 18.6521 133.238 17.1196C133.238 15.5871 134.528 14.3448 136.119 14.3448C137.71 14.3448 139 15.5871 139 17.1196Z"
              fill="#0054CB"
            />
          </svg>
        </div>
        <div className="footer-right">
          <div className="content">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Careers</p>
          </div>
          <div className="icons">
            {/* <span>
              <CiFacebook />
            </span>
            <span>
              <BsInstagram />
            </span>
            <span>
              <FaTwitter />
            </span> */}
            <span>
              <CiLinkedin />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
