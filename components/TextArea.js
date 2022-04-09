const TextArea = ({ placeholder, onChange, value, rows, disabled, maxLength }) => (
  <textarea
    className="border-white/20 border text-white bg-black px-3 py-2 outline-none resize-none focus:border-white/25 rounded-sm disabled:placeholder:text-gray-600 disabled:text-gray-500"
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    rows={rows}
    disabled={disabled}
    maxLength={maxLength}
  ></textarea>
);

export default TextArea;
