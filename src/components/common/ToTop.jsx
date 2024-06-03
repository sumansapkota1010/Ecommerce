import React from 'react'
import { BiArrowToTop } from "react-icons/bi";

export const ToTop = () => {
    return (
        <>

            <div className="fixed right-4 bottom-4 z-40">
                <BiArrowToTop
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                />
            </div>

        </>
    )
}
