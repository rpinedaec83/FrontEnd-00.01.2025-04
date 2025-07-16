export default function Button({label, onClick, type="button", btnStyle = "btn btn-primary"}){
    return <button type={type} onClick={onClick} className={btnStyle}  ><i className="fa fa-bug"></i> {label} </button>
}