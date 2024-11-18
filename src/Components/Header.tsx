import { Anchor } from "@mantine/core"

const Header = () => {
    return (
        <nav>
            <h1>Hassaam</h1>
            <div>
                <Anchor href="#about" target="_blank" underline="never">About</Anchor>
                <Anchor href="#work" target="_blank" underline="never">Work</Anchor>
                <Anchor href="#experience" target="_blank" underline="never">Experience</Anchor>
                <Anchor href="#skills" target="_blank" underline="never">Skills</Anchor>
                <Anchor href="#contact" target="_blank" underline="never">Contact</Anchor>
            </div>
        </nav>
    )
}

export default Header
