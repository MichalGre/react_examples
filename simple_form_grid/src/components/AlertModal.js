import classes from "./AlertModal.module.css";

const AlertModal = (props) => {
  return (
    <div
      className={`${classes.modale} ${props.opened && classes.opened} `}
      aria-hidden="true"
    >
      <div className={classes["modal-dialog"]}>
        <div className={classes["modal-header"]}>
          <h2>{props.errorHeader}</h2>
          <a
            href="#"
            onClick={props.onClose}
            className={`${classes["btn-close"]}`}
            aria-hidden="true"
          >
            &times;
          </a>
        </div>
        <div className={classes["modal-body"]}>{props.errorMessage}</div>
      </div>
    </div>
  );
};

export default AlertModal;
