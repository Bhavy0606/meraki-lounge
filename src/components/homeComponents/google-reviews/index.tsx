
import { useEffect } from "react";
import styles from "./google-reviews.module.scss";

const GoogleReviews = () => {

    useEffect(() => {
        let tries = 0;

        const initWidget = () => {
            const elementRef: any = document.querySelector('#bf-revz-widget-9876543213315183');
            if (!elementRef) {
                tries++;
                if (tries > 50) {
                    return false;
                }
                setTimeout(initWidget, 500);
                return;
            }

            // Clear any existing content in the div before adding the iframe
            elementRef.innerHTML = '';

            elementRef.innerHTML = `
                <iframe 
                    id="review-widget" 
                    title="Customer reviews" 
                    width="100%" 
                    height="720px" 
                    style="border-width: 0px; max-width: 680px; display: block; overflow: hidden; margin: 0px auto; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);" 
                    src="https://widgets-v7.birdeye.com/api/widgets?bid=172295611624511&wno=3" 
                    allow="payment">
                </iframe>
            `;

            const bfDiv: any = document.querySelector('#bf-revz-widget-9876543213315183 .bf-dv');
            // const bfSpan = document.querySelector('#bf-revz-widget-9876543213315183 .bf-spn');
            // const bfPwr = document.querySelector('#bf-revz-widget-9876543213315183 .bf-pwr');

            if (bfDiv && bfDiv.style) {
                bfDiv.style.display = 'none';
            } else {
                elementRef.style.height = '100%';
                elementRef.style.width = '100%';
            }
        };

        initWidget();
    }, []);

    return (
        <div className={styles["container"]}>
            <div
                id="bf-revz-widget-9876543213315183"
                style={{
                    maxWidth: '700px',
                    margin: '0 auto',
                    padding: '20px',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }}
            ></div>
        </div>
    );
};

export default GoogleReviews;
