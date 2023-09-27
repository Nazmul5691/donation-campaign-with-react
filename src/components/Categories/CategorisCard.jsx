/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

const CategorisCard = ({categori}) => {

    const {id, title, category, image, description, price, category_bg_color, card_bg_color, text_color} = categori || {}

    const cardStyles = {
        backgroundColor: card_bg_color || '#D9E5FF', 
      };
    
      const textStyles = {
        color: text_color || '#0052FF', 
      };

      const categoryStyles = {
        backgroundColor: category_bg_color || '#ffffff',
        color: text_color || '#000000', 
      };




    return (
        <Link to={`/categoris/${id}`}>
            <div className="">
            <div className="h-[280px] border-2 gap-4 rounded-lg" style={cardStyles}>
                <div >
                    <img className="w-full" src={image} alt="" />    
                </div>
                <div>
                <h3 className="w-[85px] px-2 mt-4 text-center rounded-md ml-2" style={categoryStyles}>{category}</h3>
                    <h1 className="font-bold text-xl ml-2 mt-3" style={textStyles}>{title}</h1>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default CategorisCard;