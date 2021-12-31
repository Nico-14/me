const TextInput = ({onChange, placeholder, value}) => (
  <input
    className="border-white/20 border text-white bg-black px-3 py-2 outline-none focus:border-white/25 rounded-sm"
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  ></input>
);

export default TextInput;
