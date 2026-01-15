export type Card = {
    term: string;
    definition: string;
}

type GlossaryItemProps = {
    cards: Card[];
}

export function GlossaryItem({ cards }: GlossaryItemProps) {
    return (
        <div className='w-full'>
            {cards.map((word) =>(
                <div key={word.term} className="bg-slate-200 border border-slate-300 rounded-lg m-4 p-2 h-fit w-50">
                <h5 className="text-black font-bold">{word.term}</h5>
                <p>{word.definition}</p>
            </div>
            ))}
            
        </div>
    )
}