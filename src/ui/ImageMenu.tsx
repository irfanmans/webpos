interface ImageMenuProps {
  src: string;
  className?: string;
  altDesc: string | undefined;
}

export default function ImageMenu({ src, className, altDesc }: ImageMenuProps) {
  return (
    <>
      <img src={src} className={className} alt={altDesc} />
    </>
  );
}
