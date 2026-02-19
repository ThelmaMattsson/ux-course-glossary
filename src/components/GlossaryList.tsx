import { useState } from "react";
import { GlossaryItem, type Card } from "./GlossaryItem";
import { GlosSearch } from "./GlosSearch";

type GlossaryListProps = {
    cards: Card[];
}

export function GlossaryList({ cards}: GlossaryListProps) {
    const [search, setSearch] = useState("");
    const [courseFilter, setCourseFilter] = useState("All");

    const filteredCards = cards.filter((card) => {
        const matchesSearch =
            card.term.toLowerCase().includes(search.toLowerCase());

        const matchesCourse = courseFilter === "All" || card.course === courseFilter;

        return matchesSearch && matchesCourse;
        
    });

    return (
        <div className="flex flex-col flex-wrap content-center justify-center w-full">
            <h2 className="text-black font-bold text-xl">Glosor</h2>
            <p>Här är alla dina glosor!<br/> Sortera efter kurs och vänd på korten för att se förklaringarna.</p>
            
            <GlosSearch 
                value={search} 
                onChange={setSearch} 
                course={courseFilter} 
                onCourseChange={setCourseFilter}  
            />

            <div className="grid 
    grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-3 
    xl:grid-cols-4 
    gap-6 mt-4">
                <GlossaryItem cards={filteredCards} />
            </div>
        </div>
    )
}