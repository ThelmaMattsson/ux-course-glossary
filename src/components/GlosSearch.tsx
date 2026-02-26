type GlosSearchProps = {
    value: string;
    onChange: (value: string) => void;
    course: string;
    onCourseChange: (value: string) => void;
}

export function GlosSearch({ value, onChange, course, onCourseChange }: GlosSearchProps) {
    return (
        <div>
            <div>
                <label className="block text-sm text-text-inverted font-medium mb-1">Filtrera kurs</label>
                <select
                value={course}
                onChange={(e) => onCourseChange(e.target.value)}
                className="border-1 border-gray-400 p-2 rounded-md text-text-inverted cursor-pointer"
            >
                <option value="All">Visa alla</option>
                <option value="UX">UX</option>
                <option value="Agilt arbete">Agilt arbete</option>
                <option value="apputveckling">Apputveckling</option>
            </select>
            </div>
            <label htmlFor="glos-search" className="block text-sm font-medium text-text-inverted mb-1">Sök</label>
            <input value={value} onChange={(e) => onChange(e.target.value)} type="text" placeholder="Sök efter glosa..." className="border-1 border-gray-400 p-2 text-gray-700 rounded-md w-full"/>
        </div>
    )
}