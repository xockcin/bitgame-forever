import Byte from './Byte'

export default function Stack({bytes} : {bytes: number[]}) {
  return (
    <div>
        <div className="stack-container">
            {bytes.map((value, index) => (
            <Byte key={index} value={value} />
            ))}
        </div>
    </div>
  )
}
