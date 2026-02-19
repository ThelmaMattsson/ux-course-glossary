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
                <label className="block text-sm font-medium mb-1">Filtrera kurs</label>
                <select
                value={course}
                onChange={(e) => onCourseChange(e.target.value)}
                className="border-2 border-gray-300 p-2 rounded-md"
            >
                <option value="All">Visa alla</option>
                <option value="UX">UX</option>
                <option value="Agilt arbete">Agilt arbete</option>
            </select>
            </div>
            <label htmlFor="glos-search" className="block text-sm font-medium text-gray-700 mb-1">Sök</label>
            <input value={value} onChange={(e) => onChange(e.target.value)} type="text" placeholder="Sök efter glosa..." className="border-2 border-gray-300 p-2 rounded-md w-full"/>
        </div>
    )
}