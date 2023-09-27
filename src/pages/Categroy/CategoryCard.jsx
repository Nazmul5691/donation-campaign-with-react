/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import swal from "sweetalert";


const CategoryCard = ({categori}) => {

    const {id, title, category, image, description, price, category_bg_color, card_bg_color, text_color} = categori || {}


    const categoryStyles = {
        backgroundColor: text_color || '#ffffff',
        
      };

    const handleAddToDonate = () =>{

        const addedDonatesArray = []


        const donateItems =JSON.parse(localStorage.getItem('donates'))
        
        if(!donateItems){
            addedDonatesArray.push(categori)
            localStorage.setItem('donates',JSON.stringify(addedDonatesArray))
            swal("Good job...!", "You donate successfully!", "success");
        }

        else{

            const isExits = donateItems.find(categori => categori.id === id)
            if(!isExits){
                addedDonatesArray.push(...donateItems, categori)
                localStorage.setItem('donates',JSON.stringify(addedDonatesArray))
                swal("Good job..!", "You donate successfully!", "success");
            }
            else{
                swal("Error...!", "Already Donated!", "error");
            }

            
        }

        // localStorage.setItem('test', JSON.stringify([{name:"nazmul"},{name:"ph"}]))
    }


    return (


        
            
        <div className="">
    <div className="relative border-2 gap-4">
        <div>
            <div className="">
                <img className="w-full h-[500px]" src={image} alt="" />
                
                <div className="absolute bottom-[220px] left-0 w-full h-20 bg-black opacity-80 flex items-center ">
                    
                    <button onClick={handleAddToDonate} style={categoryStyles} className="bg-blue-500 text-white ml-5 px-4 py-2 rounded">Donate ${price}</button>
                </div>
            </div>
            <div className="">
                <div className="h-20"></div>
            </div>
        </div>
        <div>
            <h1 className="font-bold text-2xl mb-5 ml-4">{title}</h1>
            <p className="mb-10 ml-4">{description}</p>
        </div>
    </div>
</div>


        
        
    );
};

export default CategoryCard;



{/* <div className="">
                <div className="">
                <div className="h-full border-2 gap-4 flex">
                <div >
                    <img className="w-[280px]" src={image} alt="" />    
                </div>
                <div>
                    <h3 className="mt-3 mb-1">{category}</h3>
                    <h1 className="font-bold text-xl">{title}</h1>
                    <p>$ {price}.00</p>
                    <button className="bg-blue-500 mt-3 py-1 px-3 rounded-md">View Details</button>
                </div>
            </div>
        </div>
        </div> */}