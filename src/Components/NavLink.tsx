
type Props = {
  link: String;
};

const NavLink = ({ link }: Props) => {
  return <a href={`/${link === "home"? "" : link}`}>{link}</a>;
};

export default NavLink;
