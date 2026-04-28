import { useState } from 'react'

export type Card = {
    term: string
    definition: string
    course: string
}

type GlossaryItemProps = {
    cards: Card[]
}

export function GlossaryItem({ cards }: GlossaryItemProps) {
    const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

    const handleFlip = (index: number) => {
        setFlippedIndex(flippedIndex === index ? null : index)
    }

    return (
        <>
            {cards.map((word, index) => (
                <div
                    key={word.term}
                    onClick={() => handleFlip(index)}
                    className=""
                >
                    <div
                        className={`card ${flippedIndex === index ? 'flipped' : ''}`}
                    >
                        <div
                            className={`card-face rounded-lg flex items-center justify-center p-4 text-center ${word.course === 'UX' ? 'bg-pink-400 hover:bg-pink-500' : word.course === 'Agilt arbete' ? 'bg-purple-400 hover:bg-purple-500' : word.course === 'apputveckling' ? 'bg-red-400 hover:bg-red-500' : word.course === 'databaser' ? 'bg-green-400 hover:bg-green-500' : word.course === 'angular' ? 'bg-yellow-400 hover:bg-yellow-500' : word.course === 'backend' ? 'bg-orange-400 hover:bg-yellow-500' : 'bg-gray-500'}`}
                        >
                            <h5 className="font-bold text-text-inverted">
                                {word.term}
                            </h5>
                        </div>
                        <div
                            className={`card-face card-back rounded-lg flex items-center justify-center p-4 text-center ${word.course === 'UX' ? 'bg-pink-300' : word.course === 'Agilt arbete' ? 'bg-purple-300' : word.course === 'apputveckling' ? 'bg-red-300' : word.course === 'databaser' ? 'bg-green-300' : word.course === 'angular' ? 'bg-yellow-300' : word.course === 'backend' ? 'bg-orange-300' : 'bg-gray-500'}`}
                        >
                            <p className="text-text-inverted">
                                {' '}
                                {word.definition}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
