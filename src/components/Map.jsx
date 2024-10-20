import React, { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import axios from "axios"
import "../stylesheets/MapStyles.css"

const MapComponent = () => {
    const [windData, setWindData] = useState([])
    const [userLocation, setUserLocation] = useState(null)

    const cities = [
        { name: "Mumbai", lat: 19.076, lon: 72.8777 },
        { name: "Delhi", lat: 28.7041, lon: 77.1025 },
        { name: "Kolkata", lat: 22.5726, lon: 88.3639 },
        { name: "Bangalore", lat: 12.9716, lon: 77.5946 },
    ]

    // Fetch Wind Data from OpenWeatherMap
    useEffect(() => {
        const fetchWindData = async () => {
            const apiKey = "YOUR_API_KEY" // Replace with your OpenWeatherMap API key
            const requests = cities.map((city) =>
                axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${
                        city.lat
                    }&lon=${city.lon}&appid=${
                        import.meta.env.VITE_OPENWEATHER_APIKEY
                    }`
                )
            )

            try {
                const results = await Promise.all(requests)
                const windInfo = results.map((response, index) => {
                    const data = response.data
                    return {
                        position: [data.coord.lat, data.coord.lon],
                        speed: data.wind.speed,
                        direction: data.wind.deg,
                        city: cities[index].name,
                    }
                })
                setWindData(windInfo)
            } catch (error) {
                console.error("Error fetching wind data:", error)
            }
        }

        fetchWindData()
    }, [])

    // Get User Location (Geolocation API)
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const userPosition = [
                    position.coords.latitude,
                    position.coords.longitude,
                ]
                setUserLocation(userPosition)

                // Optionally, fetch wind data for user's location
                axios
                    .get(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=YOUR_API_KEY`
                    )
                    .then((response) => {
                        const data = response.data
                        setWindData((prevWindData) => [
                            ...prevWindData,
                            {
                                position: [data.coord.lat, data.coord.lon],
                                speed: data.wind.speed,
                                direction: data.wind.deg,
                                city: "Your Location",
                            },
                        ])
                    })
                    .catch((error) =>
                        console.error("Error fetching user wind data:", error)
                    )
            })
        }
    }, [])

    // Function to determine arrow color based on wind speed
    const getWindColor = (speed) => {
        if (speed < 2) return "green"
        if (speed < 5) return "yellow"
        return "red"
    }

    // Custom wind icon with rotation and color based on direction and speed
    const getWindIcon = (speed, direction) => {
        const windColor = getWindColor(speed)
        const windIconStyle = `
      transform: rotate(${direction}deg);
      color: ${windColor};
      animation: windAnimation ${10 / speed}s infinite linear;
    `
        const arrow = L.divIcon({
            html: `<div class="wind-arrow" style="${windIconStyle}">🡺</div>`,
            className: "wind-icon",
        })
        return arrow
    }

    return (
        <MapContainer
            center={[20.5937, 78.9629]}
            zoom={5}
            style={{ height: "100vh", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* Display wind data markers */}
            {windData.map((wind, index) => (
                <Marker
                    key={index}
                    position={wind.position}
                    icon={getWindIcon(wind.speed, wind.direction)}
                >
                    <Popup>
                        <strong>{wind.city}</strong> <br />
                        Wind Speed: {wind.speed} m/s <br />
                        Wind Direction: {wind.direction}°
                    </Popup>
                </Marker>
            ))}

            {/* User location marker */}
            {userLocation && (
                <Marker
                    position={userLocation}
                    icon={getWindIcon(3, 180)} // Assuming default wind for user; replace with actual if fetched
                >
                    <Popup>
                        <strong>Your Location</strong> <br />
                        Wind data available for your area.
                    </Popup>
                </Marker>
            )}
        </MapContainer>
    )
}

export default MapComponent
