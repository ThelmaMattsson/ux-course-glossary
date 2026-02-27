import { type Card } from './GlossaryItem'
import { FilterCourse } from './FilterCourse'
import { useState, useMemo } from 'react'

type Props = {
    cards: Card[]
}

function shuffleArray<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5)
}

export default function TestContainer({ cards }: Props) {
    const [courseFilter, setCourseFilter] = useState<string>('UX')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
    const [hasAnswered, setHasAnswered] = useState(false)

    const filteredCards = useMemo(() => {
        const filtered =
            courseFilter === 'All'
                ? cards
                : cards.filter((c) => c.course === courseFilter)
        return shuffleArray(filtered)
    }, [cards, courseFilter])

    // const filteredCards = cards.filter((card) => {
    //     const matchesCourse =
    //         courseFilter === 'All' || card.course === courseFilter

    //     return matchesCourse
    // })

    const currentCard = filteredCards[currentIndex]

    //4 alternativ
    const answerOptions = useMemo(() => {
        if (!currentCard) return []

        const wrongAnswers = shuffleArray(
            cards.filter((c) => c.term !== currentCard.term)
        ).slice(0, 3)

        const options = shuffleArray([currentCard, ...wrongAnswers])
        return options
    }, [currentCard, cards])

    const handleAnswer = (definition: string) => {
        if (hasAnswered) return
        setSelectedAnswer(definition)
        setHasAnswered(true)
    }

    const handleNext = () => {
        setCurrentIndex((prev) => prev + 1)
        setSelectedAnswer(null)
        setHasAnswered(false)
    }

    if (!currentCard) {
        return <p>Inga glosor hittades, välj en kurs!</p>
    }

    return (
        <div className="w-full px-1 sm:px-1">
            <FilterCourse
                course={courseFilter}
                onCourseChange={(value) => {
                    setCourseFilter(value)
                    setCurrentIndex(0)
                }}
            />
            <div className="mt-2 bg-white rounded-lg shadow-md p-2 sm:p-2 text-center text-black">
                <h3 className="text-black text-xl font-bold mb-4">
                    {currentCard.term}
                </h3>
                <div className="grid grid-cols-2 gap-1 mt-4">
                    {answerOptions.map((option) => {
                        const isCorrect =
                            option.definition === currentCard.definition

                        const isSelected = selectedAnswer === option.definition

                        let bgColor = 'bg-gray-200'

                        if (hasAnswered) {
                            if (isCorrect) bgColor = 'bg-green-300'
                            else if (isSelected) bgColor = 'bg-red-300'
                        }
                        return (
                            <button
                                key={option.definition}
                                onClick={() => handleAnswer(option.definition)}
                                className={`h-50 flex items-center text-s justify-center text-center rounded-lg p-3 transition cursor-pointer overflow-scroll ${bgColor}`}
                            >
                                {option.definition}
                            </button>
                        )
                    })}
                </div>
                {hasAnswered && currentIndex < filteredCards.length - 1 && (
                    <button
                        onClick={handleNext}
                        className="mt-6 bg-blue-300 text-white px-6 py-2 rounded cursor-pointer"
                    >
                        Nästa
                    </button>
                )}
                <p className="mt-6 text-sm text-gray-600">
                    {currentIndex + 1} / {filteredCards.length}
                </p>
            </div>

            {/* {cards.map((word) => (
                <div key={word.term} className="">
                    <div
                        className={`rounded-lg flex items-center justify-center p-4 text-center ${word.course === 'UX' ? 'bg-pink-400 hover:bg-pink-500' : word.course === 'Agilt arbete' ? 'bg-green-400 hover:bg-green-500' : word.course === 'apputveckling' ? 'bg-red-400 hover:bg-red-500' : 'bg-gray-500'}`}
                    >
                        <h5 className="font-bold text-text-inverted">
                            {word.term}
                        </h5>
                    </div>
                </div>
            ))} */}
        </div>
    )
}
