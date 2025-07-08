export default function LevelSelector({ levels, onChange }: { levels: number[], onChange: (level: number) => void }) {
    return (
      <select onChange={e => onChange(+e.target.value)}>
        {levels.map(l => (
          <option key={l} value={l}>{l}</option>
        ))}
      </select>
    )
  }