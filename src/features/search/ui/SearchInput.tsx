type Props = {
    value: string
    onChange: (value: string) => void
}

export const SearchInput = ({ value, onChange }: Props) => {
    return (
        <input
            placeholder="Поиск по типу потолка..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{
                padding: "10px",
                width: "100%",
                marginBottom: "20px",
                borderRadius: "8px",
                border: "1px solid #ccc",
            }}
        />
    )
}