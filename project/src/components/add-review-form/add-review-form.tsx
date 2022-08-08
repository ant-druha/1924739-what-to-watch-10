import './add-review-form.css';
import React, {useRef, useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {addCommentAction} from '../../store/api-actions';

type AddReviewFormProps = {
  filmId: number,
}

export const AddReviewForm = ({filmId}: AddReviewFormProps) => {
  const [rating, setRating] = useState<number | undefined>();
  const [text, setText] = useState<string>('');
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);
  const [isFormDisabled, setFormDisabled] = useState(false);

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const dispatch = useAppDispatch();

  const handleClick = (evt: React.MouseEvent) => {
    const target = evt.target as HTMLInputElement;
    target.checked = true;
    setRating(Number(target.value));
    setSubmitDisabled(!validate());
  };

  const handleTextChange = (evt: React.FormEvent) => {
    const textArea = evt.target as HTMLTextAreaElement;
    setText(textArea.value);
    setSubmitDisabled(!validate());
  };

  const validate = (): boolean => validateText() && validateRating();

  const validateText = (): boolean => {
    if (textAreaRef === null || textAreaRef.current === null) {
      return false;
    }
    const errorElement = formRef?.current?.querySelector('.add-review__error-text');

    if (text.length < 50 || text.length > 400) {
      if (errorElement instanceof HTMLElement) {
        errorElement.textContent = 'Text length must be between 50 and 400 characters.';
        errorElement.style.display = 'inline';
      }

      return false;
    }

    if (errorElement instanceof HTMLElement) {
      errorElement.style.display = 'none';
    }

    return true;
  };

  const validateRating = (): boolean => {
    let errorElement = null;
    if (textAreaRef !== null && textAreaRef.current !== null) {
      errorElement = formRef?.current?.querySelector('.add-review__error-text');
    }

    if (rating === null || rating === 0) {
      if (errorElement instanceof HTMLElement) {
        errorElement.textContent = 'Rating must be set.';
        errorElement.style.display = 'inline';
      }
      return false;
    }

    if (errorElement instanceof HTMLElement) {
      errorElement.style.display = 'none';
    }

    return true;
  };

  const handleFormSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();

    setFormDisabled(true);
    await dispatch(addCommentAction({filmId, comment: text, rating: rating || 0}));
    setFormDisabled(false);
  };

  return (
    <div className="add-review">
      <form
        action=""
        ref={formRef}
        className={`add-review__form ${isFormDisabled ? 'add-review__form--disabled' : ''}`}
        onSubmit={handleFormSubmit}
      >
        <div className="rating">
          <div className="rating__stars">
            <input className="rating__input" id="star-10" type="radio" name="rating" value="10" onClick={handleClick}/>
            <label className="rating__label" htmlFor="star-10">Rating 10</label>

            <input className="rating__input" id="star-9" type="radio" name="rating" value="9" onClick={handleClick}/>
            <label className="rating__label" htmlFor="star-9">Rating 9</label>

            <input className="rating__input" id="star-8" type="radio" name="rating" value="8" onClick={handleClick}
              defaultChecked
            />
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

        <div className="add-review__text">
          <textarea
            ref={textAreaRef}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="AddReviewScreen text"
            onInput={handleTextChange}
          >
          </textarea>
          <div className="add-review__submit">
            <span className='add-review__error-text'></span>
            <button className={`add-review__btn ${isSubmitDisabled ? 'add-review__btn--disabled' : ''} `}
              type="submit"
            >Post
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};
