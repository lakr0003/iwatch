const Dot = ({ color, select, clicked }) => {
  return <button onClick={select} className={`dot dark active ${color} ${clicked}`} />;
};

export default Dot;
