

const Card = props => {
    return (

        <div className="container">
            <div className="row">
                {props.children}
            </div>
        </div>
    );

}

export default Card;