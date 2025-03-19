'use client'
import { usePathname,useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MealSearch = () => {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState("");
    const pathname = usePathname();
    const router = useRouter();


    
    useEffect(() => {
      const querySearch = {search};
      const queryParam = new URLSearchParams(querySearch)
      const url = `${pathname}?${queryParam}`
      router.push(url);
    }, [search]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a meal..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-3 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            /> 
        </div>
    );
};

export default MealSearch;