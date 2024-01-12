import React from 'react'

const Backdrop=()=>{
    return <div className={classes.backdrop}></div>
};
const ModalOverlay=()=>{
    return(
        <div className={classes.modal}>
            <div>{props.children}</div>
        </div>
    )
}
const portalElement = document.getElementById("overlays");
const Modal = () => {
  return (
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop/>,portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>)}
    </React.Fragment>
   
  )
}

export default Modal
