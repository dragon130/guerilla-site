const navLinks = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];

const Header = () => {
    return (
        <div className="flex bg-transparent">
            <div className="flex-1">
                <h1 className="text-[#1E3240] font-bold tracking-[10px] text-xl">LUGAR</h1>
            </div>

            <div className="flex-1 flex justify-end gap-[70px]">
                {navLinks.map(link => <a href="#" key={link} className="text-[#1E3240]">{link}</a>)}
            </div>
        </div>
    )
}

export default Header;