import Link from "next/link";
type Props = {
  title: string;
  href?: string; // Yangi prop: href
  types?: "submit" | "button";
  disabled?: boolean;
  onClick?: () => void;
};

const MainButton = (props: Props) => {
  const { title, href, types = "button", onClick, disabled } = props;

  if (href) {
    return (
      <Link href={href} target="_blank" className="mt-5 main-btn bg-red-600" role={types}>
        {title}
      </Link>
    );
  }

  return (
    <button type={types} onClick={onClick} disabled={disabled} className="mt-5 main-btn bg-red-600">
      {!disabled ? title : <div className="loader"></div>}
    </button>
  );
};

export default MainButton;
