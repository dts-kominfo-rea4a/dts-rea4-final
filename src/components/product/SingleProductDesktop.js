import { useEffect, useState } from "react";
import {
  ExtraActionsWrapper,
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
  ProductMetaWrapper,
} from "../../styles/product";
import { Stack, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";
import ProductMeta from "./ProductMeta";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, selectCart } from "../../features/cart/sliceCart";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";

export default function SingleProductDesktop({ product, matches, category }) {
  const dispatcher = useDispatch();
  const cart = useSelector(selectCart);
  const navigate = useNavigate();
  const [isFav, setFav] = useState(0);

  const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
    useDialogModal(ProductDetail);

  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  const addToCartHandler = () => {
    alert("under construction !");
  };

  const isFavHandler = () => {
    setFav(1);
    const newItem = {
      id: product.id,
      title: product.title,
      price: 10000,
      release_date: product.release_date,
      category: category === "upcoming" ? "Upcoming" : "Now Playing",
      image: "https://image.tmdb.org/t/p/original" + product.poster_path,
      rating: {
        rate: product.vote_average,
        count: product.vote_count,
      },
    };

    dispatcher(addCartItem(newItem));

    alert("added to watchlist");
  };

  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage
          src={"https://image.tmdb.org/t/p/original" + product.poster_path}
        />
        <ProductFavButton isfav={isFav} onClick={isFavHandler}>
          <FavoriteIcon />
        </ProductFavButton>
        {(showOptions || matches) && (
          <ProductAddToCart
            show={showOptions}
            variant="contained"
            onClick={addToCartHandler}
          >
            Add to cart
          </ProductAddToCart>
        )}
        <ProductActionsWrapper show={showOptions || matches}>
          <Stack direction={matches ? "row" : "column"}>
            <ProductActionButton>
              <Tooltip placement="left" title="share this product">
                <ShareIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <Tooltip placement="left" title="Full view">
                <FitScreenIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductMeta product={product} />
      <ProductDetailDialog product={product} />
    </>
  );
}
