import React from 'react'

export default function Form() {
  return (
    <div>
        <form className="row g-3 needs-validation " novalidate>
        <div className="col-10 mx-auto position-relative">
            <label for="validationTooltip01" className="form-label">Name :</label>
            <input type="text" className="form-control" id="validationTooltip01"  required />
            <div className="valid-tooltip" >
            Looks good!
            </div>
        </div>
        <div className="col-10 mx-auto position-relative">
            <label for="validationTooltipUsername" className="form-label">Email :</label>
            <div className="input-group has-validation">
            <input type="text" className="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required />
            <div className="invalid-tooltip">
                Please choose a unique and valid email id.
            </div>
            </div>
        </div>
        <div className=" col-10 mx-auto position-relative">
            <label for="validationTooltip03" className="form-label">Section :</label>
            <input type="text" className="form-control" id="validationTooltip03" required />
            <div className="invalid-tooltip">
            Please provide a valid city.
            </div>
        </div>
        <div className="col-10 mx-auto position-relative">
            <label for="validationTooltip05" className="form-label">Image :</label>
            <input type="file" className="form-control " id="validationTooltip05" required />
            <div className="invalid-tooltip">
            Please provide a valid photo in jpg format.
            </div>
        </div>
        <div className="col-3 mx-auto">
            <button className="btn btn-primary" type="submit">Submit</button>
        </div>
        </form>
    </div>
  )
}
