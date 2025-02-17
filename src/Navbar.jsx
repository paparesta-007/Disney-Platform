
import DisneyLogoImage from "../src/assets/img/DisneyLogoHome.png"
import './index.css'
import './css/Navbar.css'
function Navbar() {
  return (
    <nav className=" px-12   text-[#f9f9f9] font-[600]  flex justify-between items-center  py-2 NavBarBackground" >
      <div className="flex items-center space-x-4">
        <div className="cursor-pointer pr-7"><img src={DisneyLogoImage} className="w-19" alt="" /></div>
        <ul className="flex space-x-4 mt-2">
          <li className="flex items-center mx-5 cursor-pointer">
          <svg className="mr-3" fill="currentColor" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" data-testid="icon-home" height="18" viewBox="0 0 18 19"><path d="M9.86557 0.517373C9.37533 0.0697297 8.62466 0.06973 8.13443 0.517373L0.420682 7.56094C-0.444749 8.35118 0.114317 9.79259 1.28625 9.79259H1.65228V16.8965C1.65228 17.6055 2.227 18.1802 2.93595 18.1802H5.58312C6.29207 18.1802 6.86679 17.6055 6.86679 16.8966V13.9862H11.2117V16.8965C11.2117 17.6055 11.7864 18.1802 12.4954 18.1802H15.1425C15.8515 18.1802 16.4262 17.6055 16.4262 16.8965L16.4267 9.79259H16.7137C17.8857 9.79259 18.4447 8.35118 17.5793 7.56094L9.86557 0.517373Z" fill="#F9F9F9"></path></svg>
            <a href="#" className="text-[15px]  font-[600] navbarLinkA mt-[2px]">HOME</a>
          </li>
          <li className="flex items-center  mx-5 cursor-pointer">
          <svg className="mr-3" fill="currentColor" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" data-testid="icon-search" height="16" viewBox="0 0 16 17"><path  d="M11.8416 2.21333C14.2249 4.59669 14.5114 8.28292 12.7009 10.9794L15.6664 13.945C16.1112 14.3898 16.1112 15.111 15.6664 15.5558L15.3741 15.848C14.9293 16.2928 14.2081 16.2928 13.7633 15.848L10.7978 12.8825C8.10128 14.693 4.41505 14.4066 2.03169 12.0232C-0.67723 9.31428 -0.67723 4.92225 2.03169 2.21333C4.74061 -0.49559 9.13264 -0.49559 11.8416 2.21333ZM6.99773 11.6863C9.52063 11.6863 11.5658 9.64104 11.5658 7.11814C11.5658 4.59524 9.52063 2.55002 6.99773 2.55002C4.47483 2.55002 2.42962 4.59524 2.42962 7.11814C2.42962 9.64104 4.47483 11.6863 6.99773 11.6863Z" fill="#F9F9F9"></path></svg>
            <a href="#" className="text-[15px] font-[600] navbarLinkA mt-[2px]">CERCA</a>
          </li>
          <li className="flex items-center mx-5 cursor-pointer">
          <svg className="mr-3" fill="currentColor" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" data-testid="icon-plus" height="18" viewBox="0 0 26 26"><path  d="M22.8494 10.0994H15.9006V3.15057C15.9006 1.54844 14.6016 0.25 13 0.25C11.3984 0.25 10.0994 1.54901 10.0994 3.15057V10.0994H3.15057C1.54844 10.0994 0.25 11.3984 0.25 13C0.25 14.6016 1.54901 15.9006 3.15057 15.9006H10.0994V22.8494C10.0994 24.4516 11.3984 25.75 13 25.75C14.6016 25.75 15.9006 24.451 15.9006 22.8494V15.9006H22.8494C24.4521 15.9006 25.75 14.6016 25.75 13C25.75 11.3984 24.4521 10.0994 22.8494 10.0994Z"></path></svg>
            <a href="#" className="text-[15px] font-[600] navbarLinkA mt-[2px]">LA TUA LISTA</a>
          </li>
          <li className="flex items-center mx-5 cursor-pointer">
          <svg className="mr-3" fill="currentColor" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" data-testid="icon-movies" height="15" viewBox="0 0 20 16"><path  d="M12.9061 9.56091C13.6602 8.7885 13.6602 7.5342 12.9061 6.76114C12.1519 5.98807 10.9289 5.98807 10.1748 6.76114C9.42059 7.5342 9.42059 8.7885 10.1748 9.56091C10.9289 10.334 12.1519 10.334 12.9061 9.56091ZM4.93145 9.56091C5.68561 8.7885 5.68561 7.5342 4.93145 6.76114C4.17666 5.98807 2.95367 5.98807 2.20013 6.76114C1.44597 7.5342 1.44597 8.7885 2.20013 9.56091C2.95367 10.334 4.17666 10.334 4.93145 9.56091ZM8.9461 2.68838C8.19194 1.91532 6.96957 1.91532 6.21541 2.68838C5.46062 3.46145 5.46062 4.7151 6.21541 5.48816C6.96957 6.26122 8.19194 6.26122 8.9461 5.48816C9.70026 4.7151 9.70026 3.46145 8.9461 2.68838ZM8.9461 10.8629C8.19194 10.0898 6.96957 10.0898 6.21541 10.8629C5.46062 11.6366 5.46062 12.8896 6.21541 13.6627C6.96957 14.4357 8.19194 14.4357 8.9461 13.6627C9.70026 12.8896 9.70026 11.6366 8.9461 10.8629ZM7.94181 7.77707C7.72687 7.55739 7.3787 7.55739 7.16377 7.77707C6.94883 7.99739 6.94883 8.35429 7.16377 8.57461C7.3787 8.79494 7.72687 8.79494 7.94181 8.57461C8.15611 8.35429 8.15611 7.99739 7.94181 7.77707ZM19.6879 7.34738C17.5222 11.9561 14.3773 13.9661 12.1205 14.8403C10.4488 15.4884 9.0234 15.6262 8.25164 15.6462C8.02539 15.6675 7.79789 15.6816 7.56724 15.6816C3.5262 15.6816 0.25 12.3233 0.25 8.181C0.25 4.03931 3.5262 0.681641 7.56724 0.681641C11.6083 0.681641 14.8832 4.03931 14.8832 8.181C14.8832 9.96355 14.2749 11.5979 13.2618 12.8844C15.1038 11.8092 17.0627 9.96291 18.5547 6.78884C18.7062 6.46802 19.0826 6.33338 19.3937 6.48734C19.7067 6.6426 19.8381 7.0272 19.6879 7.34738Z" fill="#F9F9F9"></path></svg>
            <a href="#" className="text-[15px] font-[600] navbarLinkA mt-[2px]">FILM</a>
          </li>
          <li className="flex items-center mx-5 cursor-pointer">
          <svg className="mr-3" fill="currentColor" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" data-testid="icon-series" height="17.25" viewBox="0 0 18 19"><path  d="M12.9598 1.16393C12.6368 0.854211 12.1132 0.854211 11.7902 1.16393L9.01617 3.82435L6.24212 1.16394C5.91917 0.854226 5.39556 0.854226 5.07261 1.16394C4.74966 1.47366 4.74966 1.97582 5.07261 2.28553L8.12186 5.20986H2.4375C1.50552 5.20986 0.75 5.93442 0.75 6.82822V16.5633C0.75 17.4571 1.50552 18.1816 2.4375 18.1816H15.5625C16.4945 18.1816 17.25 17.4571 17.25 16.5633V6.82822C17.25 5.93442 16.4945 5.20986 15.5625 5.20986H9.91049L12.9598 2.28552C13.2827 1.9758 13.2827 1.47365 12.9598 1.16393ZM15.4167 9.53377C15.4167 10.2161 14.8695 10.7692 14.1944 10.7692C13.5194 10.7692 12.9722 10.2161 12.9722 9.53377C12.9722 8.85148 13.5194 8.29837 14.1944 8.29837C14.8695 8.29837 15.4167 8.85148 15.4167 9.53377ZM14.1944 15.0931C14.8695 15.0931 15.4167 14.54 15.4167 13.8577C15.4167 13.1754 14.8695 12.6223 14.1944 12.6223C13.5194 12.6223 12.9722 13.1754 12.9722 13.8577C12.9722 14.54 13.5194 15.0931 14.1944 15.0931Z" fill="#F9F9F9"></path></svg>
            <a href="#" className="text-[15px] font-[600] navbarLinkA mt-[2px]">SERIE</a>
          </li>
          <li className="flex items-center mx-5 cursor-pointer">
          <svg className="mr-3" fill="currentColor" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" data-testid="icon-originals" height="17.5" viewBox="0 0 18 18"><path  d="M9 14.6131L3.90122 17.4316L4.875 11.4619L0.75 7.23408L6.45061 6.3631L9 0.931641L11.5494 6.3631L17.25 7.23408L13.125 11.4619L14.0988 17.4316L9 14.6131Z" fill="#F9F9F9"></path></svg>
            <a href="#" className="text-[15px] font-[600] navbarLinkA mt-[2px]">ORIGINALS</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-normal">Papa</span>
        <img
          src="../src/assets/img/ProfileImages/baby-yoda.png"
          className="w-12 h-12 rounded-full"
          alt="Profile"
        />
      </div>
    </nav>
  );
}

export default Navbar;
