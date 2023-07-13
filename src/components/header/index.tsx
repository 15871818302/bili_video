import "./header.css";

const Header = (props: any) => {
  return (
    <div className="header">
      <div>{props.pathName}</div>
    </div>
  );
};

export default Header;
