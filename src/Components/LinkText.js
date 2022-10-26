import { Link } from '@mui/material';

const LinkText = ({ title, styles }) => {
  return (
    <Link href='#' underline='always' style={styles}>
      {title}
    </Link>
  );
};

export default LinkText;
