
import './OverlayModal.css';

const OverlayModal = props => {

    return (

        <div className="boxDialog">
            <div id="mobileDialog">
                <a href="#close" title="Close" className="close">
                    <strong>X</strong>
                </a>
                {props.children}
            </div>
        </div>
    );
}



export default OverlayModal;
