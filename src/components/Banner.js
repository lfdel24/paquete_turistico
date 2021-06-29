import { makeStyles } from "@material-ui/core";

const Banner = () => {
  const style = useStyles();
  return <h1 className={style.root}>Banner...</h1>;
};

export default Banner;

const useStyles = makeStyles((theme) => ({
  root: {},
}));
