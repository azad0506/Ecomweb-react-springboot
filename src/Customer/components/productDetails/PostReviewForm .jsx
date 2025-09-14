
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReview } from '../../../stateRedux/Review/ReviewAction';
// import { postReview } from './reviewActions'; // Your action to post a review

const PostReviewForm = ({ productId }) => {
  const dispatch = useDispatch();
  const [reviewText, setReviewText] = useState({review:""});

  const handlechange=(e)=>{
        const { name, value } = e.target;
        setReviewText({...reviewText,[name]:value})

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("reviewText" ,reviewText)
    if (!reviewText ) return alert('Please add review text .');

    // Dispatch action to post the review
    // dispatch(postReview({ productId, review: reviewText, rating }));
    const data=({...reviewText,productId:productId})
    console.log("data",data)
    dispatch(createReview(data))

    // Reset form
    setReviewText({review:""});
    
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Post Your Review</h2>

       <input
      type="text"
      name='review'
      className="flex-grow border-b-2 border-gray-400 focus:border-blue-600 outline-none py-1 placeholder-gray-500"
      value={reviewText.review}
      onChange={handlechange}
      placeholder="Write your review here"
    />

      {/* <div className="flex items-center mb-3">
        <label className="mr-2 font-semibold">Rating:</label>
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          <option value={0}>Select rating</option>
          {[1, 2, 3, 4, 5].map((val) => (
            <option key={val} value={val}>
              {val} Star{val > 1 && 's'}
            </option>
          ))}
        </select>
      </div> */}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit Review
      </button>
    </form>
  );
};

export default PostReviewForm;
