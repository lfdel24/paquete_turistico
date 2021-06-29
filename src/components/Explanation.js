import { makeStyles } from "@material-ui/core";

const Explanation = () => {
  const style = useStyles();
  return <h1 className={style.root}>Explanation...</h1>;
};
export default Explanation;

const useStyles = makeStyles((theme) => ({
  root: {},
}));
