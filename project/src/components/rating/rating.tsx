import React, {memo} from 'react';

type RatingProps = {
  handleClick: (evt: React.MouseEvent) => void,
}

const Rating = ({handleClick}: RatingProps) => (
  <div className="rating">
    <div className="rating__stars">
      <input className="rating__input" id="star-10" type="radio" name="rating" value="10" onClick={handleClick}/>
      <label className="rating__label" htmlFor="star-10">Rating 10</label>

      <input className="rating__input" id="star-9" type="radio" name="rating" value="9" onClick={handleClick}/>
      <label className="rating__label" htmlFor="star-9">Rating 9</label>

      <input className="rating__input" id="star-8" type="radio" name="rating" value="8" onClick={handleClick}/>
      <label className="rating__label" htmlFor="star-8">Rating 8</label>

      <input className="rating__input" id="star-7" type="radio" name="rating" value="7" onClick={handleClick}/>
      <label className="rating__label" htmlFor="star-7">Rating 7</label>

      <input className="rating__input" id="star-6" type="radio" name="rating" value="6" onClick={handleClick}/>
      <label className="rating__label" htmlFor="star-6">Rating 6</label>

      <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onClick={handleClick}/>
      <label className="rating__label" htmlFor="star-5">Rating 5</label>

      <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onClick={handleClick}/>
      <label className="rating__label" htmlFor="star-4">Rating 4</label>

      <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onClick={handleClick}/>
      <label className="rating__label" htmlFor="star-3">Rating 3</label>

      <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onClick={handleClick}/>
      <label className="rating__label" htmlFor="star-2">Rating 2</label>

      <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onClick={handleClick}/>
      <label className="rating__label" htmlFor="star-1">Rating 1</label>
    </div>
  </div>
);


export default memo(Rating);
