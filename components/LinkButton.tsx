import Link from "next/link";
import { LinkButtonType } from "../lib/types/entries.types";
import { setGradient } from "../styles/gradient";

const LinkButton = ({
  children,
  href,
  gradientFrom,
  gradientTo,
}: LinkButtonType) => {
  return (
    <Link
      href={href}
      className={`btn text-lg font-bold w-20 border-white hover:border-${gradientFrom} ${setGradient(
        gradientFrom,
        gradientTo
      )}`}
      target={"_blank"}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
