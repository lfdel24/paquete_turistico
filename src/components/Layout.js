import { makeStyles } from "@material-ui/core";

const Layout = ({ children }) => {
  const style = useStyles();
  return <div className={style.root}>{children}</div>;
};

export default Layout;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh",
    margin: theme.spacing(2),
  },
}));
