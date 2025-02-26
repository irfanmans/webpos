import { IconType } from "react-icons";

interface IconBrandProps {
  icon?: IconType;
  title?: string;
  size: number;
  className?: string;
  onClick?: () => void;
}

export default function IconBrand({
  icon: Icon,
  title,
  size,
  className,
  onClick,
}: IconBrandProps) {
  return (
    <>
      <div onClick={onClick}>
        {Icon && <Icon size={size} className={className} />}
        {title && <h1>{title}</h1>}
      </div>
    </>
  );
}
