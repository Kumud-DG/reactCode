import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">

                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>SynthData</h4>
                        <h7   className="list-unstyled">
                            <li>@2021 SynthData </li>
                        </h7>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h5>Products</h5>
                        <h5>Features</h5>
                        <h5>Integerations</h5>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h5>About</h5>
                     
                    </div>
                    {/*column4*/}
                    <div className="col">
                        <h5>Contact Us</h5>
                    </div>
                    {/*vertical divide*/}

                    <div class="col v-divider">  </div>
                    {/*column5*/}
                    <div className="col">
                        <h5>Join our news Letter here </h5>
                        <div className="newsletter">
                            <div className="mailInputs">
                                <input type="text" placeholder="Enter Your email address">
                                </input>
                                <Button >Join</Button>
                            </div>
           
                        </div>
                    </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} SynthData | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
}
const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn-medium',
    'btn-large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>

    )
}

export default Footer;