
import React from 'react'
import styles from "../../style.js";
import { useState,useEffect ,Fragment} from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import Loader from "../layout/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import Footer from '../Homepage/Footer';
import { usernavLinks } from '../../constants/index.js';
import Navbar from '../Navbar.jsx'
import ReactStars from "react-rating-stars-component";
import ReviewCard from './ReviewCard.jsx';
import { useAlert } from "react-alert";
import { addItemsToCart } from "../../actions/cartAction";

import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../actions/productAction";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";


const ProductDetails = () => {
  const alert=useAlert();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );
  const options={
    edit:false,
    color:"rgba(255,255,255,0.1)",
    activeColor:"tomato",
    value:product.ratings,
    isHalf:true,
    size:window.innerWidth<600?20:25,
  }
  const quantity=1;
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const addToCartHandler = () => {
    dispatch(addItemsToCart(id,quantity));
    alert.success("Item Added To Cart");
  };
  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", id);

    dispatch(newReview(myForm));
    setOpen(false);
    window.location.reload();
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    
    dispatch(getProductDetails(id));
  }, [dispatch, id,error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <>  
           <div className="bg-primary w-full overflow-hidden text-white font-poppins" >
             <div className={`${styles.paddingX} ${styles.flexCenter} `}>
           <div className={`${styles.boxWidth}`}>
              <Navbar title="subhakarya" navLinks={usernavLinks} buttontitle="Logout"/>
            </div>
          </div>
          <div className="ProductDetails">
            <div>
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <ReactStars {...options} />
                <span className="detailsBlock-2-span">
                  {" "}
                  ({product.numOfReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`Rs.${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  
                  <button
                    disabled={product.Stock < 1 ? true : false}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "Unavailaible" : "Availaible"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>

              <button onClick={submitReviewToggle} className="submitReview">
                Submit Review
              </button>
            </div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>

          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <ReactStars
              onChange={(newRating) => setRating(newRating)}
                // onChange={(e) => setRating(e.target.value)}
                value={rating}
                size={25}
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>

          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
       <div className={`${styles.boxWidth}`}>
         <Footer />
      </div>
        </div>
        </div>
        
       </>
      )}
    </Fragment>
  );
          }

export default ProductDetails

