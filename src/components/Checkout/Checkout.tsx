import React, { useContext } from "react";
import "./styles.css";
import { Context } from "../../context/ProductContext";
import { Button } from "@mui/material";

const Checkout = () => {
    const {
        products,
        setProducts,
        cart,
        setCart,
        addToCart,
        removeFromCart,
    }: any = useContext(Context);

    //Todo befejezni a Checkout menüt
    return (
        <>
            <div className="form-container">
                <form className="checkout-form">
                    <div className="address-inputs">
                        <label>Full Name</label>
                        <input
                            className="form-input"
                            type="text"
                            placeholder="Roland san"
                        />
                        <label>Email</label>
                        <input
                            className="form-input"
                            type="email"
                            placeholder="rolca@gmail.com"
                        />
                        <label>Address</label>
                        <input
                            className="form-input"
                            type="text"
                            placeholder="Arany Janos street 65"
                        />
                        <label>City</label>
                        <input
                            className="form-input"
                            type="text"
                            placeholder="Miskolc"
                        />

                        <div className="state-zip">
                            <label className="form-label label-zip">
                                Zip code
                            </label>
                            <input
                                className="form-input zip"
                                type="text"
                                placeholder="3711"
                            />

                            <label className="form-label label-state">
                                State
                            </label>
                            <input
                                className="form-input state"
                                type="text"
                                placeholder="State"
                            />
                        </div>
                    </div>
                    <div className="billing-inputs">
                        <label>Name on Card</label>
                        <input
                            className="form-input"
                            type="text"
                            placeholder="Kerekes Roland"
                        />
                        <label>Credit card number</label>
                        <input
                            className="form-input"
                            type="email"
                            placeholder="1123-5525-4128-4152"
                        />
                        <label>Exp Month</label>
                        <input
                            className="form-input"
                            type="number"
                            min={1}
                            max={12}
                        />
                        <div className="exp-cvv">
                            <label className="form-label label-exp">
                                Exp Year
                            </label>
                            <input
                                className="form-input exp"
                                type="text"
                                placeholder="3711"
                            />

                            <label className="form-label label-cvv">CVV</label>
                            <input
                                className="form-input cvv"
                                type="text"
                                placeholder="State"
                            />
                        </div>
                    </div>
                    <Button
                        style={{
                            position: "absolute",
                            bottom: "1.5rem",
                            width: "90%",
                            left: "2.3rem",
                        }}
                        variant="contained"
                    >
                        Place order
                    </Button>
                </form>
            </div>
        </>
    );
};

export default Checkout;
