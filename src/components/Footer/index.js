import locationIcon from '../../assets/images/location-icon.svg';
import phoneIcon from '../../assets/images/phone-icon.svg';
import mailIcon from '../../assets/images/mail-icon.svg';


const Footer = () => {
    return (
        <div>
            <div className="flex text-[#FFFF]">
                <div className="flex-1">
                    <h3 className="text-[20px] tracking-[10px] font-bold">LUGAR</h3>

                    <div className="mt-[17px] mb-[12px]">
                        <p className="flex align-center text-[#BDBDBD] text-[14px]">
                            <span className="pt-[3px] mr-[8px]"><img src={locationIcon} alt="icon" /></span>
                            2118 Thornridge Cir.
                            Dubai, UAE 35624
                        </p>
                    </div>

                    <div className="mb-[12px]">
                        <p className="flex align-center text-[#BDBDBD] text-[14px]">
                            <span className="pt-[4px] mr-[8px]"><img src={phoneIcon} alt="icon" /></span>
                            +33 415 65356 - 9
                        </p>
                    </div>

                    <div className="mb-[12px]">
                        <p className="flex align-center text-[#BDBDBD] text-[14px]">
                            <span className="pt-[5px] mr-[8px]"><img src={mailIcon} alt="icon" /></span>
                            contact@lugar.com
                        </p>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="grid grid-cols-3">
                        <div className="flex flex-col gap-y-2">
                            <h3>QUICK LINKS</h3>

                            <a href="#" className="text-[#BDBDBD] text-[14px]">
                                Home
                            </a>

                            <a href="#" className="text-[#BDBDBD] text-[14px]">
                                About
                            </a>

                            <a href="#" className="text-[#BDBDBD] text-[14px]">
                                Project
                            </a>

                            <a href="#" className="text-[#BDBDBD] text-[14px]">
                                Contact
                            </a>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <h3>LEGAL LINKS</h3>

                            <a href="#" className="text-[#BDBDBD] text-[14px]">
                                Terms
                            </a>

                            <a href="#" className="text-[#BDBDBD] text-[14px]">
                                Conditions
                            </a>

                            <a href="#" className="text-[#BDBDBD] text-[14px]">
                                Policy
                            </a>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <h3>SOCIAL MEDIA</h3>

                            <a href="#" className="text-[#BDBDBD] text-[14px]">
                                Facebook
                            </a>

                            <a href="#" className="text-[#BDBDBD] text-[14px]">
                                Twitter
                            </a>

                            <a href="#" className="text-[#BDBDBD] text-[14px]">
                                YouTube
                            </a>

                            <a href="#" className="text-[#BDBDBD] text-[14px]">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex mt-[100px]">
                <p className="text-[#BDBDBD] text-[14px]">Copyright @ 2022 Lugar Inc.</p>
            </div>
        </div>
    )
}

export default Footer;