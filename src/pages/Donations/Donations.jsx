/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import DonateCard from "../Categroy/DonateCard";


const Donations = () => {

    const [donates, setDonates] =useState([])
    const [noData, setNoData] = useState(false)
    const [isShow, setIsShow] = useState(false)

    const [totalDonate, setTotalDonate] = useState(0)

    useEffect(() => {
        const donateItems =JSON.parse(localStorage.getItem('donates'))

        if(donateItems){
            setDonates(donateItems);

            const total = donateItems.reduce((preValue,currentItem)=> preValue + currentItem.price,0)

            setTotalDonate(total)

        }
        else{
            
            setNoData('You have not donated yet')
        }
        
    },[])
    console.log(isShow);


    return (
        <div>
           <div>
                {
                    donates.length > 0 && <h1 className="flex mb-5 justify-center items-center"> Total Donate: ${totalDonate} </h1>
                }
                {
                    noData ? <p className="h-[80vh] flex justify-center items-center">{noData}</p> : <div>

                        <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-4 rounded-lg">
                            {
                                isShow ? donates.map((donates) => ( <DonateCard key={donates.id} donates={donates}></DonateCard>))

                                : donates.slice(0,4).map(donates => <DonateCard key={donates.id} donates={donates}></DonateCard>)
                            }
                        </div>
                    </div>
                }
                {donates.length > 4 && <button onClick={() => setIsShow(!isShow)} className="px-5 py-1 rounded-md bg-green-600 text-white block mx-auto mt-12">{isShow ? "See Less" : "See All"}</button>}
           </div>
           
        </div>
    );
};

export default Donations;