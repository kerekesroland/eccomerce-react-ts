import React, { useContext, useRef, useState } from "react";
import "./styles.css";
import { Context } from "../../context/ProductContext";
import { Button } from "@mui/material";

const Checkout = () => {
    const { cart, setCart }: any = useContext(Context);

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);
    const zipRef = useRef<HTMLInputElement>(null);
    const stateRef = useRef<HTMLInputElement>(null);
    const cardNameRef = useRef<HTMLInputElement>(null);
    const cardNumberRef = useRef<HTMLInputElement>(null);
    const expMonthRef = useRef<HTMLInputElement>(null);
    const expYearRef = useRef<HTMLInputElement>(null);
    const cvvRef = useRef<HTMLInputElement>(null);

    const [order, setOrder] = useState<Array<any>>([]);

    let inputs: any = {};

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (inputs) {
            console.log(order);
            setCart([]);
            e.target.reset();
        }
    };

    const setCheckoutDetails = () => {
        inputs = {
            name: nameRef?.current?.value,
            email: emailRef?.current?.value,
            address: addressRef?.current?.value,
            city: cityRef?.current?.value,
            zip: zipRef?.current?.value,
            state: stateRef?.current?.value,
            cardName: cardNameRef?.current?.value,
            cardNumber: cardNumberRef?.current?.value,
            expMonth: expMonthRef?.current?.value,
            expYear: expYearRef?.current?.value,
            cvv: cvvRef?.current?.value,
        };
        setOrder([...cart, inputs]);
    };

    //Todo ujrairni a checkout menut
    return (
        <>
            <div className="form-container">
                <form
                    onSubmit={(e: any) => handleSubmit(e)}
                    className="checkout-form"
                >
                    <div className="address-inputs">
                        <label>Full Name</label>
                        <input
                            ref={nameRef}
                            className="form-input fullName"
                            type="text"
                            placeholder="Roland san"
                        />
                        <label>Email</label>
                        <input
                            ref={emailRef}
                            className="form-input email"
                            type="email"
                            placeholder="rolca@gmail.com"
                        />
                        <label>Address</label>
                        <input
                            ref={addressRef}
                            className="form-input address"
                            type="text"
                            placeholder="Arany Janos street 65"
                        />
                        <label>City</label>
                        <input
                            ref={cityRef}
                            className="form-input"
                            type="text"
                            placeholder="Miskolc"
                        />

                        <div className="state-zip">
                            <label className="form-label label-zip">
                                Zip code
                            </label>
                            <input
                                ref={zipRef}
                                className="form-input zip"
                                type="text"
                                placeholder="3711"
                            />

                            <label className="form-label label-state">
                                State
                            </label>
                            <input
                                ref={stateRef}
                                className="form-input state"
                                type="text"
                                placeholder="State"
                            />
                        </div>
                    </div>
                    <div className="billing-inputs">
                        <label>Name on Card</label>
                        <input
                            ref={cardNameRef}
                            className="form-input"
                            type="text"
                            placeholder="Kerekes Roland"
                        />
                        <label>Credit card number</label>
                        <input
                            ref={cardNumberRef}
                            className="form-input"
                            type="text"
                            placeholder="1123-5525-4128-4152"
                        />
                        <label>Exp Month</label>
                        <input
                            ref={expMonthRef}
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
                                ref={expYearRef}
                                className="form-input exp"
                                type="text"
                                placeholder="2022"
                            />

                            <label className="form-label label-cvv">CVV</label>
                            <input
                                ref={cvvRef}
                                className="form-input cvv"
                                type="password"
                                placeholder="State"
                            />
                        </div>
                    </div>
                    <Button
                        onClick={() => setCheckoutDetails()}
                        type="submit"
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
