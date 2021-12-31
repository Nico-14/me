const TextArea = ({ placeholder, onChange, value, rows }) => (
  <textarea
    className="border-white/20 border text-white bg-black px-3 py-2 outline-none resize-none focus:border-white/25 rounded-sm"
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    rows={rows}
  ></textarea>
);

export default TextArea;