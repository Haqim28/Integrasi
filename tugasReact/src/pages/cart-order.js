import "../components/assets/css/cart-order.css"
import React, { useEffect, useState } from 'react';
import Geprek from "../components/assets/menu/paketGeprek.png"
import Minus from "../components/assets/-.png"
import Plus from "../components/assets/+.png"
import Sampah from "../components/assets/sampah.png"
import Maps from "../components/assets/maps.png"
import selectMaps from "../components/assets/selectMap.png"
import { UserContext } from '../context/userContext';
import { useContext } from 'react';
import { API } from "../config/api";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";

function CartOrder() {
    
    const [dataUser, dispatch] = useContext(UserContext);
    const [counter, setCounter] = useState(0);
    const [subtotal,setSubTotal] = useState(0);
    let data = 0
    // ===========================

    const { id } = useParams()
    const [state] = useContext(UserContext)

    const [cart, setCart] = useState()
    const getData = async () => {
        try {
            const response = await API.get("/transactions");
            setCart(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (state.user)
            getData()
    }, [state])

    const deleteById = useMutation(async (id) => {
        try {
            await API.delete(`/transactions/${id}`);
            getData()
        } catch (error) {
            console.log(error);
        }
    });

    const HandleAdd = async (qty, id) => {
        try {
            await API.patch(`/transactions/${id}`, { qty: qty })
            getData()
        } catch (error) {
            console.log(error);
        }
    }
    const HandleLess = async (qty, id) => {
        try {
            if (qty === 0) {
                deleteById.mutate(id)
            } else {
                await API.patch(`/transactions/${id}`, { qty: qty })
                getData()
            }
        } catch (error) {
            console.log(error);
        }

    }
    const filter = cart?.filter(p => p.buyer_id === id)
    const sum = cart?.map(p => p.product.price * p.qty).reduce((a, b) => a += b, 0)
    const qty = cart?.map(p => p.qty).reduce((a, b) => a += b, 0)


   

    function Add() {
        data = data + 1;
        return (setCounter(counter + 1) , setSubTotal((counter+1)*15000), console.log(data+1) );
    }

    function Less() {
        return (setCounter(counter - 1));
    }

  
    return (
        <div className="container mt-5 ">
            
            <div className="title-order">
                Geprek Bensu
            </div>
            <div className="delivery-title">
                Delivery Location
            </div>
            <div className="row">
                    <input type="text" className="form-control input-delivery ml-3 mb-2" placeholder="Harbour Building" aria-label="Username" aria-describedby="addon-wrapping"/>


                    <div class="col-md-auto col-lg-3 text-right  text-white" >
                        <div className="btn-delivery text-center " style={{cursor:'pointer'}} data-toggle="modal" data-target=".bd-example-modal-xl">
                            <div className='pt-2'>Select On Map <img src={selectMaps}></img></div>
                        </div>  
                        <div className="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                                <div className="  modal-dialog  modal-xl" >
                                    <div className="modal-content">
                                        <img src={Maps} alt="" ></img>
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                    </div>
            </div>
            <div className="riview-order">
                Riview Your Order
            </div>
            <div>
                <div className="row ml-2 ">
                    <div className="col-lg-8 col-md-12">
                        
                        <hr />
                    <div data-spy = "scroll">
                        {/* {cart?.map((item) => ( */}

                   
                        <div className="d-flex riview-ukuran" >
                            <div >
                                <div className="d-md-flex">
                                    <div className="justify-content-start">
                                        <img src={Geprek} alt=''></img>
                                    </div>
                                    <div className="justify-content-end ml-3">
                                        <div className="mb-3">
                                            <h5 className="">Paket Geprek</h5>
                                            <div className="mt-5 p-3 ">
                                                <img src={Minus} alt="" className="mr-3" onClick={Less} style={{cursor:'pointer'}}></img>
                                                <label className="mr-3">{counter}</label>
                                                <img src={Plus} alt="" onClick={Add } style={{cursor:'pointer'}}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </div>
                            <div className="ml-auto">
                                <div>
                                    Rp 15.000
                                </div>
                            <img src={Sampah} alt="" className="mt-5"></img>
                            </div>
                        </div>
                        <hr />
                        
                        
                        
                        
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-12 text-right">
                        <hr />
                            <div className="total-ukuran text-right">
                                <div className="d-flex total-ukur  p-3 text-right">
                                    <div>Subtotal</div>
                                    <div className="ml-auto">Rp {subtotal}</div>
                                </div>
                                <div className="d-flex total-ukur  p-3">
                                    <div>Qty</div>
                                    <div className="ml-auto">2</div>
                                </div>
                                <div className="d-flex total-ukur  p-3">
                                    <div>Ongkir</div>
                                    <div className="ml-auto">10.000</div>
                                </div>
                            </div>
                        <hr />
                        <div className="text-right">
                            <button className="btn-order text-white" data-toggle="modal" data-target=".bd-example-modal-xl">
                                see How far ?
                            </button>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
             
       
    );
  }
  export default CartOrder;