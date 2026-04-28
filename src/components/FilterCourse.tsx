type FilterCourseProps = {
    course: string
    onCourseChange: (value: string) => void
}

export function FilterCourse({ course, onCourseChange }: FilterCourseProps) {
    return (
        <div>
            <div>
                <label
                    htmlFor="course-filter"
                    className="block text-sm text-text-inverted font-medium mb-1"
                >
                    Välj kurs
                </label>
                <select
                    id="course-filter"
                    value={course}
                    onChange={(e) => onCourseChange(e.target.value)}
                    defaultValue={'Välj en kurs'}
                    className="border-1 border-gray-200 p-2 bg-white rounded-md text-text-inverted cursor-pointer"
                >
                    <option value="" disabled className="text-gray">
                        Välj kurs...
                    </option>
                    <option value="UX">UX</option>
                    <option value="Agilt arbete">Agilt arbete</option>
                    <option value="apputveckling">Apputveckling</option>
                    <option value="databaser">Databaser</option>
                    <option value="angular">Angular</option>
                    <option value="backend">Backend</option>
                </select>
            </div>
        </div>
    )
}
