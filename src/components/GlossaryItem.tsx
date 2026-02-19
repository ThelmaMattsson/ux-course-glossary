import { useState } from "react";

export type Card = {
    term: string;
    definition: string;
    course: string;
}

type GlossaryItemProps = {
    cards: Card[];
}

export function GlossaryItem({ cards }: GlossaryItemProps) {
    const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

    const handleFlip = (index: number) => {
        setFlippedIndex(flippedIndex === index ? null : index);
    };
    
    return (
        <>
            {cards.map((word, index) =>(
                <div  
                    key={word.term} 
                    onClick={() => handleFlip(index)}
                    className=""
                >
                    <div className={`card ${flippedIndex === index ? 'flipped' : ''}`}>
                        <div className="card-face bg-slate-200 border rounded-lg flex items-center justify-center p-4">
                            <h5 className="font-bold text-black">
                                {word.term}
                            </h5>
                        </div>
                        <div className="card-face card-back bg-slate-300 border rounded-lg flex items-center justify-center p-4">
                            <p> {word.definition}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}