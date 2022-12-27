import { SectionTitleType } from "../lib/types/entries.types";
import { setGradient } from "../styles/gradient";

const SectionTitle = ({
  children,
  gradientFrom,
  gradientTo,
}: SectionTitleType) => {
  return (
    <h2
      className={`font-extrabold text-2xl lg:text-4xl text-center ${setGradient(
        gradientFrom,
        gradientTo
      )}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
