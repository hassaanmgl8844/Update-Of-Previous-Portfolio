
const Header = () => {
    return (
        <nav className="flex  h-[12vh] px-10 justify-between bg-bgColor items-center">
            <h1 className="text-primaryColor">Hassaam</h1>
            <div className="flex gap-4">
                <a className="text-textColor hover:text-primaryColor" href="#about">About</a>
                <a className="text-textColor hover:text-primaryColor" href="#work">Work</a>
                <a className="text-textColor hover:text-primaryColor" href="#experience">Experience</a>
                <a className="text-textColor hover:text-primaryColor" href="#skills">Skills</a>
                <a className="text-textColor hover:text-primaryColor" href="#contact">Contact</a>
            </div>
        </nav>
    )
}

export default Header
