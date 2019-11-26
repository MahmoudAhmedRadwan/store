import React from 'react';
import bmw from '../assets/img/bmw.jpg';
import Cart from './Cart'
import products from "./store_data/store_data";

class Store extends React.Component{

    state = {
        products : [],
        cartProuduct : []
    }

    componentDidMount(){
        this.setState({
            products
        });
    }
    

    searchChange = (event) => {
        
        let filteredProducts = this.state.products.filter((product) => {
            return product.title.includes(event.target.value)
        })


        if(event.target.value != ""){
            this.setState({
                products: filteredProducts
            });
        } else {
            this.setState({
                products 
            });
        }
    }

    addToCart = (product) => {
        
        console.log(product)
        this.setState({
            cartProuduct : [...this.state.cartProuduct, product]
        })
    }

    
    render(){
        const { cartProuduct } = this.state; 
        return(
            <div>
                <header>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 px-0">
                                <div className="img-background text-right">
                                    <Cart cartProducts={cartProuduct}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="search-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mt-5">
                                <span>Search : </span>
                                <input className="search-cars outLine" placeholder="Search Cars Name..." type="text" onChange={this.searchChange} value={this.state.searchValue} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cars mt-5">
                    <div className="container">
                        <div className="row" >                
                            {this.state.products.map((product)=>{
                                return(
                                    <div className="col-3" key={product.id}>
                                        <div class="card">
                                        <img src={product.img} class="card-img-top car-img" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{product.title}</h5>
                                            <p class="card-text">{product.description}</p>
                                            <button onClick={() => {this.addToCart(product)}} class="btn btn-primary">Add To Cart</button>
                                        </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Store;