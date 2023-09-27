/* eslint-disable react/prop-types */

import CategorisCard from "./CategorisCard";


const Categoris = ({categoris}) => {

    console.log(categoris)
    return (
        <div className="mt-16">
            

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
                {
                    categoris?.map(categori => <CategorisCard key={categori.id} categori={categori}></CategorisCard>)
                }
            </div>
        </div>
    );
};

export default Categoris;