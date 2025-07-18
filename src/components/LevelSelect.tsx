export default function LevelSelector({ levels, onChange }: { levels: number[], onChange: (level: number) => void }) {
    return (
      <div className='level-container'>
        <select onChange={e => onChange(+e.target.value)}>
          {levels.map(l => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
      </div>
    )
  }