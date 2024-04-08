import React, {useEffect, useRef} from "react"
import silverMapStyles from "./styles.json"
function GoogleMapComponent({center, zoom}: any) {
    const mapRef = useRef<any>(null)

    useEffect(() => {
        let mapInstance: any
        if (window.google) {
            mapInstance = new window.google.maps.Map(mapRef.current, {
                center,
                zoom,
                styles: silverMapStyles,
                streetViewControl: false,
                fullscreenControl: false,
                mapTypeControl: false,
                zoomControl: false,
            })
        }
        new window.google.maps.Marker({
            position: center,
            map: mapInstance,
            label: {
                text: "Meraki Lounge",
                color: "#161616",
                fontSize: "18px",
                fontWeight: "bolder",
                fontFamily: `"Cinzel", "Times New Roman"`,
            },
            icon: {
                path: window.google.maps.SymbolPath.BACKWARD_OPEN_ARROW,
                scale: 5,
                fillColor: "#161616", // Black color
                fillOpacity: 1,
                strokeWeight: 0,
            },
        })

        mapInstance?.addListener("click", (mapsMouseEvent: any) => {
            // Close
            const myLatlng = {lat: 32.7091321, lng: -117.1553064}
            var locationName = "Meraki Lounge, Tenth Avenue, San Diego, CA, USA"
            var encodedLocationName = encodeURIComponent(locationName)
            // Construct the Google Maps URL
            var mapsUrl = `https://www.google.com/maps?q=${encodedLocationName}&ll=${myLatlng.lat},${myLatlng.lng}`

            // Open the URL in a new tab
            window.open(mapsUrl, "_blank")
        })
    }, [center, zoom])

    return <div ref={mapRef} style={{width: "100%", height: "400px"}} />
}

export default GoogleMapComponent
