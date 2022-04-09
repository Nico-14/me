const TextInput = ({ onChange, placeholder, value, disabled, maxLength }) => (
  <input
    className="border-white/20 border text-white bg-black px-3 py-2 outline-none focus:border-white/25 rounded-sm disabled:placeholder:text-gray-600 disabled:text-gray-500"
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    disabled={disabled}
    maxLength={maxLength}
  ></input>
);

export default TextInput;
