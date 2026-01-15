type GlosSearchProps = {
    value: string;
    onChange: (value: string) => void;
}

export function GlosSearch({ value, onChange }: GlosSearchProps) {
    return (
        <div>
            <label htmlFor="glos-search" className="block text-sm font-medium text-gray-700 mb-1">Search Glossary</label>
            <input value={value} onChange={(e) => onChange(e.target.value)} type="text" placeholder="Search glossary..." className="border-2 border-gray-300 p-2 rounded-md w-full"/>
        </div>
    )
}