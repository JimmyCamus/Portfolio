import { SectionLabelType } from "../lib/types/entries.types";

const SectionLabel = ({
  children,
  gradientFrom,
  gradientTo,
}: SectionLabelType) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span
        className={`h-20 lg:h-32 bg-gradient-to-b from-white via-${gradientFrom} to-${gradientTo} w-[2px]`}
      ></span>
      <span
        className={`rounded-full inline-flex justify-center text-white w-10 h-10 items-center mb-6 lg:mb-10 bg-gradient-to-l from-${gradientFrom} to-${gradientTo}`}
      >
        {children}
      </span>
    </div>
  );
};

export default SectionLabel;
