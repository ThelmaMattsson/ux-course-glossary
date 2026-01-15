import { useState } from "react";
import { GlossaryItem, type Card } from "./GlossaryItem";
import { GlosSearch } from "./GlosSearch";

type GlossaryListProps = {
    cards: Card[];
}

export function GlossaryList({ cards}: GlossaryListProps) {
    const [search, setSearch] = useState("");

    const filteredCards = cards.filter((card) => 
        card.term.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="flex flex-col flex-wrap content-center justify-center w-full">
            <h2 className="text-black font-bold text-xl">Glossary List</h2>
            <p>Here you can see all the terms in the glossary.</p>
            <GlosSearch value={search} onChange={setSearch}/>
            <div className="h-screen flex-wrap">
                <GlossaryItem cards={filteredCards} />
            </div>
        </div>
    )
}