const Banner = () => {
    return (
        <div className="flex mt-[55px] bg-transparent">
            <div className="flex-1">
                <h1 className="text-[#1E3240] font-bold text-[90px]">A home is</h1>
                <h1 className="text-[#1E3240] font-bold text-[90px]">built with love</h1>
                <h1 className="text-[#1E3240] font-bold text-[90px]">and dreams</h1>

                <p className='text-[18px] text-[#1E3240]'>Real estate farm that makes your dreams true</p>

                <div className="flex mt-[32px]">
                    <button className="bg-[#1E3240] text-[#FFF] py-[18px] px-[24px] mr-[20px]">
                        Our projects
                    </button>

                    <button className="bg-transparent border border-[#1E3240] text-[#1E3240] py-[18px] px-[24px] mr-[20px]">
                        Contact us
                    </button>
                </div>
            </div>
            <div className="flex-1 flex justify-end gap-[70px]">
                {/* <img src={HouseImage} alt="house" /> */}
            </div>
        </div>
    )

}

export default Banner;