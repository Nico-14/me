const TextArea = ({ placeholder, onChange, value, rows, disabled, maxLength }) => (
  <textarea
    className="text-white bg-zinc-800 px-3 py-2 outline-none resize-none rounded-xl disabled:placeholder:text-zinc-600 disabled:text-zinc-500"
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    rows={rows}
    disabled={disabled}
    maxLength={maxLength}
  ></textarea>
);

export default TextArea;
