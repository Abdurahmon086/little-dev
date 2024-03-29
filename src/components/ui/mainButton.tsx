type Props = {
  title: string;
};

const MainButton = (props: Props) => {
  const { title } = props;

  return (
    <>
      <button className=" mt-5 main-btn bg-red-600">{title}</button>
    </>
  );
};

export default MainButton;
