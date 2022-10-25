import { Typography, Rating } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/product";

export default function ProductMeta({ product, matches }) {
  return (
    <ProductMetaWrapper>
      <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
        {product.title}
      </Typography>
      {/* <Typography variant={matches ? "caption" : "body1"}>
        {product.popularity}
      </Typography> */}
      <Rating
        size="small"
        readOnly
        defaultValue={product.vote_average - 4}
        precision={0.5}
      />
    </ProductMetaWrapper>
  );
}
