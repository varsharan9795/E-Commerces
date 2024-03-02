import { Container } from 'postcss'
import React, { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import Card from './Card';

export const Product = () => {
    const [products, setProducts] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/products.json");
                const data = await response.json();
                setProducts(data);
                setFilteredItems(data);
                //console.log(data);
            }
            catch (error) {
                console.log("error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    //console.log(products);
const filterItems=(category) => {
const filtered=category==="all" ? (products) : products.filter((item) => item.category===category);
setFilteredItems(filtered);
setSelectedCategory(category);
}

const showAll = () => {
    setFilteredItems(products);
    setSelectedCategory("all");
};

const handleSortChange = (option) => {
    setSortOption(option);
    let sortedItems = [...filteredItems];

    switch (option) {
        case "A-Z":
            sortedItems.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case "Z-A":
            sortedItems.sort((a, b) => b.title.localeCompare(a.title));
            break;
        case "low-to-high":
            sortedItems.sort((a, b) => a.price - b.price);
            break;
        case "high-to-low":
            sortedItems.sort((a, b) => b.price - a.price);
            break;
        default:
            // Handle the default case if needed
            break;
    }

    // Update both sortOption and filteredItems state
    setSortOption(option);
    setFilteredItems(sortedItems);
};



    return (
        <div className='max-w-screen-2xl text-3xl container mx-auto xl:px-28 font-semibold capitalize 
    text-center my-20'>
            <h2 className='title'>new products</h2>
            {/* product cards */}

            <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8 mt-5'>
                <div className='flex items-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
                    <button onClick={showAll}>All Products</button>
                    <button onClick={()=> filterItems("Dress")}>Clothing</button>
                    <button  onClick={()=> filterItems("Hoodies")}>Hoodies</button>
                    <button  onClick={()=> filterItems("Bag")}>Bags</button>  <button>Clothing</button>
                </div>

                {/* sorting options */}
                <div className='flex justify-end mb-2 rounded-sm'>
                    <div className='bg-slate-900 p-2'>
                        <FaFilter className='text-white bg-slate-900 h-4 w-4 ' />
                    </div>
                    <select
                    id="sort"
                    onChange={(e)=>handleSortChange(e.target.value)}
                    value="sortOption"
                    className='bg-slate-900 text-white px-2 py-1 rounded'>
                        <option value="default">Default</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                        <option value="low-to-high">Low to High</option>
                        <option value="high-to-low">High to Low</option>
                    </select>
                </div>


                <Card filteredItems={products} />

            </div>

        </div>

    )
}
