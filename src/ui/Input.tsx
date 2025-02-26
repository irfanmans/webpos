interface InputProps {
  type: string;
  id: string;
  name: string;
  className: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export default function Input({
  type,
  id,
  name,
  className,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}
