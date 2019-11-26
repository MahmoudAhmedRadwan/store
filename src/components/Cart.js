import React from 'react'

class Cart extends React.Component{

    state = {
        visible: false  
    };

    toggleMenu = () => {
        this.setState({visible: !this.state.visible})
    }
    
    render(){
        const { cartProducts } = this.props;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <i className="fa fa-shopping-cart cart-adjust" onClick={this.toggleMenu}></i>
                        {this.state.visible && (
                            <div className="cart-hover text-center"  id="cart-preview">
                                {cartProducts && cartProducts.length > 0 ? cartProducts.map(products => {
                                    return(
                                        <div key={products.id}>
                                            <h2 className="cart-title">{products.title}</h2>    
                                        </div>
                                    )
                                }): (
                                    <div>
                                        <p>There is no items in the cart</p>
                                    </div>
                                )}

                            </div>  
                        )}
                        
                    </div>    
                </div>   
            </div>
        )
    }
}

export default Cart;