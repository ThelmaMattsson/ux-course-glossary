import TestContainer from './TestContainer'
import { type Card } from './GlossaryItem'

type GlosTestProps = {
    cards: Card[]
}

export function GlosTest({ cards }: GlosTestProps) {
    return (
        <div className="flex flex-col flex-wrap content-center justify-center w-full">
            <h2 className="text-black font-bold text-xl">Glosförhör</h2>
            <TestContainer cards={cards} />
        </div>
    )
}
