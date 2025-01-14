import React from 'react'
import './WeatherSection.css'

const WeatherSection = () => {
    return (
        <>
            <div className='weather-container'>
                <div className='weather-box'>
                    <div className="current-weather">
                        <div className='weather-image'>
                            <img className='weather-icon' src="./src/assets/weather-icon.webp" alt="" />
                        </div>
                        <div className='weather-details'>
                            <div className='place'>
                                <span>Karera</span>
                            </div>
                            <div className='date'>
                                <span>25-12-2006</span>
                            </div>
                            <div className='temperature'>
                                <span>25*C</span>
                            </div>
                            <div>
                                <span>Sunrise: 07:00 AM</span><br />
                                <span>Sunset: 05:00 PM</span>
                            </div>
                        </div>
                    </div>
                    <div class="days-forecast">
                        <h2>4-Day Forecast</h2>
                        <ul class="weather-cards">
                            <li class="card">
                                <h3>( _______ )</h3>
                                <h4>Temp: __*C</h4>
                            </li>
                            <li class="card">
                                <h3>( _______ )</h3>
                                <h4>Temp: __*C</h4>
                            </li>
                            <li class="card">
                                <h3>( _______ )</h3>
                                <h4>Temp: __*C</h4>
                            </li>
                            <li class="card">
                                <h3>( _______ )</h3>
                                <h4>Temp: __*C</h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='agriculture-information'>
                    <div className='soil'>
                        <div className='soil-details-box'>
                            <span className='soil-type'>Soil type!</span><br/>
                            <span className='crops'>Growable Crops</span>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quo dignissimos cupiditate inventore dolor dolores minima consequuntur rem ab illo, illum voluptate laudantium nisi deserunt aliquid blanditiis quaerat doloremque alias!</p>
                        </div>
                        <div className='helpers'>
                            <div className='fertilizers'>
                                <span>Fertilizers you can use:</span>
                                <ul>
                                    <li>Urea</li>
                                    <li>Ammonium Sulphate</li>
                                    <li>Calcium Ammonium Nitrate</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherSection
