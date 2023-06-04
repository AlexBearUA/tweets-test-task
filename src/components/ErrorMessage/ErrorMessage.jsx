import css from './ErrorMessage.module.scss';

export const ErrorMessage = () => {
  return (
    <>
      <p className={css.errorText}>
        Oooops, something going wrong, refresh the page
      </p>
    </>
  );
};
