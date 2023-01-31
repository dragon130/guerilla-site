import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_PROPERTIES } from '../../graphql/queries/property';
import locationIcon from '../../assets/images/locationalt-icon.svg';

const options = [{ label: "Apartment", value: "Apartment", }, { label: "House", value: "House", }, { label: "Penthouse", value: "Penthouse", }, { label: "Villa", value: "Villa", }];

const Properties = () => {
    const [getProperties] = useLazyQuery(GET_PROPERTIES);

    const [properties, setProperties] = useState([]);
    const [limit, setLimit] = useState(3);
    const [filter, setFilter] = useState("all");

    const handleGetProperties = async (limit = 6) => {
        try {
            const res = await getProperties({ variables: { limit } });

            if (res && res.data) {
                const { propertyCollection } = res.data;
                setProperties(propertyCollection.items);
            }
        } catch (err) {
            console.error("error >", err);
        }
    }

    useEffect(() => {
        handleGetProperties();
    }, []);

    const handleLoadMore = () => {
        if (limit === 6) {
            setLimit(3);
            return
        }

        setLimit(6);
        return;
    }

    const handleFilter = e => {
        const { value } = e.target;
        setFilter(value);
    }

    return (
        <div>
            <div className="flex flex-col mt-[150px] mb-[44px]">
                <h1 className="text-[#1E3240] font-bold text-[48px]">
                    Properties
                </h1>

                <p className="text-[#BDBDBD] text-[18px] mt-[12px]">Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
            </div>

            <div className="flex justify-end mb-[23px]">
                <select id="countries" className="w-[150px] bg-transparent" onChange={handleFilter} value={filter}>
                    <option value="all">All Categories</option>
                    {options.map(option => {
                        return (
                            <option value={option.value}>{option.label}</option>
                        )
                    })}
                </select>
            </div>

            <div className="grid grid-cols-3 gap-x-8 gap-y-[100px]">
                {properties.slice(0, limit).filter(property => {
                    if (filter !== "all") {
                        return property.category === filter;
                    }

                    return property;
                }).map(property => {
                    const { image, address, title } = property;
                    return (
                        <div key={property.id} className="relative">
                            <div>
                                <img src={image.url} alt="house" className="w-[100%]" />
                            </div>
                            <div className="shadow shadow-[0px 2px 18px rgba(0, 0, 0, 0.04)] absolute w-[300px] p-[20px] bg-[#FFF]  -bottom-[50px] left-0 right-0 mx-auto">
                                <div><p className="text-[#1E3240] text-[14px] mt-[12px] font-bold m-0">{title}</p></div>
                                <div className="flex items-center">
                                    <span className="pt-[10px] mr-[5px]">
                                        <img src={locationIcon} alt="icon" />
                                    </span>
                                    <p className="text-[#1E3240] text-[12px] mt-[10px] m-0">{address}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="flex justify-center">
                <button className="bg-[#1E3240] text-[#FFF] py-[18px] px-[24px] mt-[100px]" onClick={handleLoadMore}>
                    {limit === 6 ? 'See less' : 'Load more'}
                </button>
            </div>
        </div >
    )
}

export default Properties;