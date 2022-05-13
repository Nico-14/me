const TextInput = ({ onChange, placeholder, value, disabled, maxLength }) => (
  <input
    className="text-white bg-zinc-900 px-3 py-2 outline-none rounded-xl disabled:placeholder:text-zinc-600 disabled:text-zinc-500"
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    disabled={disabled}
    maxLength={maxLength}
  ></input>
);

export default TextInput;
