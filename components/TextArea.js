const TextArea = ({ placeholder, onChange, value, rows, disabled, maxLength }) => (
  <textarea
    className="text-white bg-transparent border-b-2 px-3 py-2 outline-none disabled:placeholder:text-zinc-600 disabled:text-zinc-500 border-gray-500/30 focus:border-white/60 transition"
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    rows={rows}
    disabled={disabled}
    maxLength={maxLength}
  ></textarea>
)

export default TextArea
