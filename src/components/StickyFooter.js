import { makeStyles } from "@material-ui/core";

const StickyFooter = () => {
  const style = useStyles();
  return <h1>Sticky Footer...</h1>;
};

export default StickyFooter;

const useStyles = makeStyles((theme) => ({
  root: {},
}));
