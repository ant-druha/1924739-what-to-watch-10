import './add-review-form.css';
import React, {useRef, useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {addCommentAction} from '../../store/api-actions';
import Rating from '../rating/rating';

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

  const validateText = (inputText: string): boolean => {
    if (textAreaRef === null || textAreaRef.current === null) {
      return false;
    }
    const errorElement = formRef?.current?.querySelector('.add-review__error-text');

    if (inputText.length < 50 || inputText.length > 400) {
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

  const validate = (inputText: string): boolean => validateText(inputText) && validateRating();

  const handleRatingClick = (evt: React.MouseEvent) => {
    const target = evt.target as HTMLInputElement;
    target.checked = true;
    setRating(Number(target.value));
    setSubmitDisabled(!validate(text));
  };

  const handleTextChange = (evt: React.FormEvent) => {
    const textArea = evt.target as HTMLTextAreaElement;
    setText(textArea.value);
    setSubmitDisabled(!validate(textArea.value));
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
        <Rating handleClick={handleRatingClick}/>

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
            <button
              className={`add-review__btn ${isSubmitDisabled ? 'add-review__btn--disabled' : ''} `}
              type="submit"
            >Post
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};
