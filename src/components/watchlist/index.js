import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Rating, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, removeCartItem } from "../../features/cart/sliceCart";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Watchlist = () => {
  const cart = useSelector(selectCart);
  const dispatcher = useDispatch();

  const deleteCartItemHandler = (id) => {
    dispatcher(removeCartItem(id));
  };

  const columns = [
    {
      field: "image",
      headerName: "IMG",
      width: 80,
      sortable: false,
      renderCell: (params) => (
        <img
          src={params.value}
          height="30"
          width="30"
          style={{ marginLeft: "10px" }}
          alt="product"
        />
      ),
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "category",
      headerName: "Category",
      width: 130,
    },
    {
      field: "rating",
      headerName: "Rating",
      width: 130,
      valueFormatter: ({ value }) => value.rate,
      renderCell: (params) => (
        <Rating
          size="small"
          readOnly
          defaultValue={params.value.rate - 4}
          precision={0.5}
        />
      ),
      sortComparator: (a, b) => {
        if (a.rate > b.rate) return 1;
        if (a.rate < b.rate) return -1;
        if (a.rate === b.rate) return 0;
      },
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
          deleteCartItemHandler(params.row.id);
        };

        return (
          <IconButton aria-label="delete" onClick={onClick}>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={cart}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnMenu
        disableSelectionOnClick
      />
    </div>
  );
};

export default Watchlist;
