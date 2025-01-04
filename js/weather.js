// Weather data fetching functionality
async function fetchWeatherData(city) {
    try {
        const response = await fetch(
            `${CONFIG.BASE_URL}?q=${city}&appid=${CONFIG.API_KEY}&units=metric`
        );
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        
        return await response.json();
    } catch (error) {
        throw error;
    }
}