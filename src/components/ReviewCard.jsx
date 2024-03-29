import {star} from '../assets/icons';

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={imgURL}
        alt="customers"
        className="h-[120px] w-[120px] rounded-full object-cover"
      />

      <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>

      <div className="mt-6 flex items-center justify-center gap-2.5">
        <img
          src={star}
          alt="rating-star"
          width={24}
          height={24}
          className="m-0 object-contain"
        />
        <p className="font-montserrat text-xl text-slate-400">({rating})</p>
      </div>

      <h3 className="mt-1 text-center font-palanquin text-3xl font-bold dark:text-white">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
