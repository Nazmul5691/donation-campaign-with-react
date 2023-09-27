/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";


const Category = () => {

    const [categori, setCategory] = useState({})

    const {id} = useParams()
    // console.log(params);

    const categoris = useLoaderData()
    console.log(categoris);


    useEffect(() =>{

        const findCategory= categoris?.find(category => category.id === id) 
        console.log(findCategory);

        setCategory(findCategory);

    },[id, categoris])

    return (
        <div>
            <CategoryCard categori={categori}></CategoryCard>
        </div>
    );
};

export default Category;