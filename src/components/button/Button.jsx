import './Button.css';

export const ButtonTheme = {
    WARNING: "warn"
}

const Button = props => {
    return (
        <button className="Row AlignCenterV AppButton" data-theme={props.theme}>
            {props.icon ? <i className={props.icon}></i>: ""}
            <span>{props?.label || 'No Label'}</span>
        </button>
    );
}

export default Button;