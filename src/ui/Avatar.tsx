interface AvatarProps {
  srcImage: string;
  altDesc: string | undefined;
  className: string;
}

export default function Avatar({ srcImage, altDesc, className }: AvatarProps) {
  return (
    <>
      <img src={srcImage} alt={altDesc} className={className} />
    </>
  );
}
