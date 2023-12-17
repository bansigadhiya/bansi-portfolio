import React, { useEffect, useState } from 'react'

const Animation = () => {
    //eyes follow mouse cursor
    //eyes follow mouse cursor
    const [eyePosition, setEyePosition] = useState({ x: 50, y: 50 });

    useEffect(() => {
        document.addEventListener("mousemove", (event) => {
            const x = (event.clientX * 100) / window.innerWidth + "%";
            const y = (event.clientY * 100) / window.innerHeight + "%";

            // Add this line to consider vertical movement:
            const adjustedY = Math.min(Math.max(y * 0.5, 0), 100);

            setEyePosition({ x, y: adjustedY });
        });
    }, []);

    // const isHoveringSNSBtn = (event) => {
    //   return event.target.closest(".sns-btn");
    // };
    // const adjustedY = Math.min(Math.max(y * 0.5, 0), 100);

    return (
        <div className="field">
            <div className="face">
                <div className="eye-wrap">
                    <div
                        className="face__eye"
                        style={{
                            left: eyePosition.x,
                            top: eyePosition.y,
                            // Update transform to use both x and y:
                            transform: `translate(-${eyePosition.x}, -${eyePosition.y})`,
                        }}
                    >
                        <div className="face__eye-ball"></div>
                    </div>
                    <div
                        className="face__eye"
                        style={{
                            left: eyePosition.x,
                            top: eyePosition.y,
                            // Update transform to use both x and y:
                            transform: `translate(-${eyePosition.x}, -${eyePosition.y})`,
                        }}
                    >
                        <div className="face__eye-ball"></div>
                    </div>
                </div>
                <div className="face__nose"></div>
                <div
                // className={`face__mouth ${isHoveringSNSBtn(event) ? "hover" : ""}`}
                ></div>
            </div>
            <a
                className="sns-btn"
                href="https://twitter.com/TKS_1234567"
                target="_blank"
            >
                <i className="sns-btn__icon fab fa-twitter"></i>
                <p className="sns-btn__body">Follow</p>
            </a>
        </div>
    )
}

export default Animation