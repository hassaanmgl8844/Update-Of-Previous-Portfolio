import { IconHexagonLetterH } from "@tabler/icons-react";

const Header = () => {
  return (
    <nav className="flex  h-[12vh] px-10 dm-mono-regular justify-between bg-bgColor items-center">
        <IconHexagonLetterH size={70} color="#64FFDA" />
      {/* <h1 className="text-primaryColor">Hassaam</h1> */}
      <div className="flex gap-4">
        <a className="text-textColor hover:text-primaryColor" href="#about">
          About
        </a>
        <a className="text-textColor hover:text-primaryColor" href="#work">
          Work
        </a>
        <a
          className="text-textColor hover:text-primaryColor"
          href="#experience"
        >
          Experience
        </a>
        <a className="text-textColor hover:text-primaryColor" href="#skills">
          Skills
        </a>
        <a className="text-textColor hover:text-primaryColor" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Header;
