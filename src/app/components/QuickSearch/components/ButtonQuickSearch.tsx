import Image from "next/image";
import Link from "next/link";

interface IButtonQuickSearch {
  link: string;
  icon: string;
  label: string;
}

export const ButtonQuickSearch = ({link, label, icon}: IButtonQuickSearch) => {
  return (
    <div className="flex flex-col items-center border-2 bg-white border-grayLighter rounded-xl duration-500 hover:border-primary">
      <Link href={link} className="flex flex-col items-center hover:text-primary transition-all p-3">
        <Image width={45} height={45} src={icon} alt={label} className=""/>
        <p className="text-sm lg:text-base text-dark font-semibold hover:text-primary duration-200 mt-1">{label}</p>
      </Link>
    </div>
  );
};