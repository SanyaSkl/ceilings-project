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
                background: "var(--input-bg)",
                color: "var(--input-text)",
            }}
        />
    )
}