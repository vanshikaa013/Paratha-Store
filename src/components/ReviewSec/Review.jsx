// import imranSir from "../../assets/imransir.jpg"
// import AdilSir from "../../assets/adilSir.jpg"
// import RuchiMam from "../../assets/ruchiMa'am.jpg"
import Rating from "@mui/material/Rating";
import { useContext } from "react";
import ThemeContext from "../Theme/ThemeContext";



const reviewData = [
    {
      id: 1,
      name: "Imran Khan",
      text: "The parathas here are truly exceptional! Always served hot, they are packed with a range of flavors that cater to every palate. Each bite is a delightful experience, and the staff are incredibly welcoming.",
      img: "https://media.licdn.com/dms/image/v2/D5603AQEnm7k205SYRw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727163090711?e=1735776000&v=beta&t=po5TM8uA9JXS3jqPFbtqFA-ZGJ5dHqkcy67FpbmHijQ",
      rating: 4,
    },
    {
      id: 2,
      name: "Adil Khan",
      text: "I've tried a lot of parathas, but these are my favorite! Each one is delicious, and you can taste the high-quality ingredients used. I always leave satisfied and eager to come back for more!",
      img: "https://media.licdn.com/dms/image/v2/C4D03AQHyEOnKHIVseg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1656854104200?e=1735776000&v=beta&t=RiE3waJz2bU55NxqHR5po6kDbs4KkbC7EFwJWCxBviI",
      rating: 5,
    },
    {
      id: 3,
      name: "Ruchi Jain",
      text: "As a paratha lover, I can confidently say that this place is a gem! The parathas are always crispy on the outside and tender on the inside, with just the right amount of spices to elevate every bite. Highly recommend!",
      img: "https://media.licdn.com/dms/image/v2/D4E03AQERMn-9l47osA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694616658221?e=1735776000&v=beta&t=nzHrRC4eZoFksRpM900O27DRne7G3aNptOWgMac8RbE",
      rating: 5,
    },
  ];

  const ReviewSection = () => {
    const {dark}= useContext(ThemeContext)
    return (
      <div className={dark ? "py-10 bg-gray-800 text-white" : "py-10 bg-gray-50"}>
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customers say
            </p>
            <h1 className="text-3xl font-bold">Customer Reviews</h1>
            <p className="text-xs text-gray-400">
              Discover why our customers love us!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviewData.map((review) => (
              <div key={review.id} className={dark ? "flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 rounded-xl bg-gray-400 text-black" :"flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 rounded-xl bg-white"}>
                <img
                  className="rounded-full w-24 h-24 object-cover mx-auto"
                  src={review.img}
                  alt={review.name}
                />
                <Rating name="read-only" value={review.rating} readOnly />
                <p className={dark ? "text-gray-700 text-sm" : "text-gray-500 text-sm"}>{review.text}</p>
                <h1 className="text-xl font-bold">{review.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ReviewSection;