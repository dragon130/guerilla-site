import LeftHouse from '../../assets/images/left-house.png';

const Information = () => {
    return (
        <div className="flex mt-[150px]">
            <div className="flex-1 text-center">
                <img src={LeftHouse} alt="house" className="mx-auto" />
            </div>

            <div className="flex-1">
                <h1 className="text-[#1E3240] font-bold text-[48px]">Award winning real</h1>
                <h1 className="text-[#1E3240] font-bold text-[48px]">estate company in</h1>
                <h1 className="text-[#1E3240] font-bold text-[48px]">Dubai</h1>

                <p className='text-[18px] text-[#BDBDBD]'>Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis ornare magna.</p>

                <div className="grid grid-cols-3 gap-x-8 mt-[40px]">
                    <div>
                        <p className="text-[#AFD4E2] text-[14px]">Previous projects</p>

                        <h3 className="text-[#1E3240] text-[48px]">
                            34+
                        </h3>
                    </div>

                    <div>
                        <p className="text-[#AFD4E2] text-[14px]">years experience</p>

                        <h3 className="text-[#1E3240] text-[48px]">
                            20Y
                        </h3>
                    </div>

                    <div>
                        <p className="text-[#AFD4E2] text-[14px]">Ongoing projects</p>

                        <h3 className="text-[#1E3240] text-[48px]">
                            12
                        </h3>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Information;
