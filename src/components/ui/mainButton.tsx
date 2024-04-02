type Props = {
  title: string;
  onClick?: () => void;
  types?: "submit" | "button";
  disabled?: boolean;
};

const MainButton = (props: Props) => {
  const { title, types = "button", onClick, disabled } = props;

  return (
    <>
      <button type={types} onClick={onClick} disabled={disabled} className=" mt-5 main-btn bg-red-600">
        {title}
      </button>
    </>
  );
};

export default MainButton;
