import React from "react";

const categories = [
  { category: "Vegetarian" },
  { category: "Vegan" },
  { category: "Seafood" },
  { category: "Fast Food" },
  { category: "Street Food" },
  { category: "Barbecue / Grilled" },
  { category: "Bakery & Pastry" },
  { category: "Dessert / Sweets" },
  { category: "Dairy-based" },
  { category: "Meat-based" },
  { category: "Rice-based" },
  { category: "Pasta / Noodle" },
  { category: "Bread-based" },
  { category: "Soup / Stew" },
  { category: "Salad / Cold Dishes" },
  { category: "Breakfast Foods" },
  { category: "Beverages" },
  { category: "Fermented Foods" },
  { category: "Spicy / Hot" },
  { category: "Fusion / Contemporary" },
  { category: "Healthy / Organic" },
  { category: "Traditional / Heritage" },
  { category: "Mediterranean" },
  { category: "Middle Eastern" },
  { category: "African" },
  { category: "Asian" },
  { category: "European" },
  { category: "American" },
  { category: "Latin American" },
  { category: "Caribbean" },
];

const Category = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">
        Popular categories by food
      </h1>
      <div className="w-[80%] mx-auto mt-10">
        <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, i) => {
                return (
                    <span
                      data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay={i * 100} 
                      key={i} className="px-6 py-3 rounded-full cursor-pointer hover:bg-emerald-600 hover:text-white transition-all duration-300 bg-gray-100 dark:bg-gray-800 dark:text-white text-gray-900 font-semibold text-lg">
                        {category.category}
                    </span>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default Category;
