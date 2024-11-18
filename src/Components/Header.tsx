
const Header = () => {
    return (
        <nav className="flex text-primaryColor px-4  py-3 justify-between bg-bgColor">
            <h1 className="">Hassaam</h1>
            <div>
                <a className="text-FtextColor" href="#about" target="_blank" >About</a>
                <a className="text-[#8892B0]" href="#work" target="_blank" >Work</a>
                <a className="text-[#8892B0]" href="#experience" target="_blank" >Experience</a>
                <a className="text-[#8892B0]" href="#skills" target="_blank" >Skills</a>
                <a className="text-[#8892B0]" href="#contact" target="_blank" >Contact</a>
            </div>
        </nav>
    )
}

export default Header
