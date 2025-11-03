import Image from "next/image";

const ColorOptions = ({ color, src, onClick }) => {
  return (
    <figure className={`${color}`}>
      <Image onClick={onClick} src={src} alt="iWatch" width={500} height={500} />
    </figure>
  );
};

export default ColorOptions;
