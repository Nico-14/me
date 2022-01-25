const Skill = ({ name, icon }) => (
  <div className="flex flex-col gap-y-2 w-32 h-80 justify-center shrink-0 snap-center overflow-hidden">
    <img alt={name} src={icon} ></img>
    <p className="text-white text-xl font-medium text-center">{name}</p>
  </div>
);

export default Skill;
