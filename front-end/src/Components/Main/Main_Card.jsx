//import Hooks
import { useDispatch } from "react-redux";
import { fetchchosenproduct } from "../../globalstate/Slice/product";
import { motion } from "framer-motion";
//import import component
import { Rating, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

export default function MainCard({ id, img, title, price, description, rating }) {
  let dispatch = useDispatch();
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "black",
    },
  });

  const StyledButton = styled(Button)({
    width: "100%",
  });

  return (
    <motion.div
      className="main-card"
      key={id}
      layout
      initial={{ transform: "scale(0)" }}
      animate={{ transform: "scale(1)" }}
      transition={{ duration: 0.6, type: "spring", stiffness: 50 }}>
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${img[0].attributes.url})`,
        }}
      />
      <div className="card-body">
        <h3>{title}</h3>
        <div className="card-rating">
          <Stack spacing={1}>
            <StyledRating
              name="half-rating-read"
              defaultValue={rating}
              precision={0.5}
              readOnly
              style={{ margin: "auto" }}
            />
          </Stack>
        </div>
        <span className="price">${price}</span>
        <div className="card-text" dangerouslySetInnerHTML={{ __html: description }} />

        <Link className="card-add" to={`productdetails/${id}`}>
          <StyledButton
            color="primary"
            variant="contained"
            onClick={() => {
              dispatch(
                fetchchosenproduct({
                  product_id: id,
                  product_img: { data: img },
                  product_title: title,
                  product_price: price,
                  product_description: description,
                  product_rating: rating,
                })
              );
            }}>
            <span className="show-deatils">Show Details</span>
            {/* <i>
              <MdAddShoppingCart />
            </i> */}
          </StyledButton>
        </Link>
      </div>
    </motion.div>
  );
}
