import React from 'react'
import './SurveyForm.css'

const Surveyform = () => {
    return (
        <div className='surveyform-container'>
            <form>
                <div className='heading'>
                    <h2>
                        Survey Form to provide you best content!
                    </h2>
                </div>
                <div className='name-input'>
                    <div>
                        <label>First Name:</label>
                        <input type="text" name="fname" required />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" name="lname" required />
                    </div>
                </div>
                <div className='place-input'>
                    <div>
                        <label>City:</label>
                        <input type="text" name="city" required />
                    </div>
                    <div>
                        <label>State:</label>
                        <input type="text" name="state" required />
                    </div>
                </div>
                <div className='phone-input'>
                    <div>
                        <label>Phone:</label>
                        <input type="number" name="phone" required />
                    </div>
                    <div>
                        <span>will used to save your survey details!</span>
                    </div>
                </div>
                <div className='form-btn'>
                    <button>Submit Form</button>
                </div>
            </form>
        </div>
    )
}

export default Surveyform
