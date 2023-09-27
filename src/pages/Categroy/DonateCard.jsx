/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */



const DonateCard = ({donates}) => {

    const {id, title, category, image, description, price, category_bg_color, card_bg_color, text_color} = donates || {}


    const cardStyles = {
        backgroundColor: card_bg_color || '#D9E5FF', 
      };
    
      const textStyles = {
        color: text_color || '#0052FF', 
      };

      const categoryStyles = {
        backgroundColor: category_bg_color || '#ffffff',
         
      };


    return (
        <div>
            <div className="">
                <div className="" style={cardStyles}>
                <div className="h-full border-2 gap-4 flex">
                <div className="">
                    <img className="w-[280px]" src={image} alt="" />    
                </div>
                <div>
                <h3 className="w-[85px] px-2 mt-4 text-center rounded-md mb-2" style={categoryStyles}>{category}</h3>
                    <h1 className="font-bold text-xl text-black">{title}</h1>
                    <p style={textStyles} className="font-bold">$ {price}.00</p>
                    <button className="w-[120px] px-2 mt-4 text-center text-white rounded-md " style={categoryStyles}>View Details</button>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default DonateCard;