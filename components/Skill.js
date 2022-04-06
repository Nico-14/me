const Skill = ({ name, icon }) => (
  <div className="flex flex-col gap-y-2 items-center max-w-xs">
    <img alt={name} src={icon} className="h-32 w-32" ></img>
    <p className="text-white text-xl font-medium text-center">{name}</p>
  </div>
);

export default Skill;
