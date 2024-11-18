
const Header = () => {
    return (
        <nav className="flex text-primaryColor px-4  py-3 justify-between bg-bgColor">
            <h1 className="">Hassaam</h1>
            <div>
                <a className="text-textColor" href="#about" target="_blank" >About</a>
                <a href="#work" target="_blank" >Work</a>
                <a href="#experience" target="_blank" >Experience</a>
                <a href="#skills" target="_blank" >Skills</a>
                <a href="#contact" target="_blank" >Contact</a>
            </div>
        </nav>
    )
}

export default Header
