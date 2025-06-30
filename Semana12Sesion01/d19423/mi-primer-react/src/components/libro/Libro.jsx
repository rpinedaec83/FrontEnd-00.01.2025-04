import React from 'react';
import './Libro.css';

function Libro(props){

    return(
        <>
             <div id="products" className="row view-group">
                <div className="item col-xs-4 col-lg-4">
                    <div className="thumbnail card">
                        <div className="img-event">
                            <img className="group list-group-image img-fluid" src="http://placehold.it/400x250/000/fff" alt="" />
                        </div>
                        <div className="caption card-body">
                            <h4 className="group card-title inner list-group-item-heading">
                                {props.titulo}</h4>
                            <p className="group inner list-group-item-text">
                                {props.descripcion}</p>
                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <p className="lead">
                                        $21.000</p>
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <a className="btn btn-success" href="http://www.jquery2dotnet.com">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Libro