import React from 'react'
import NaviBar from './NaviBar'

const AddBook = () => {
  return (
    <div>
        <NaviBar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                        <label htmlFor="" className="form-label">Book Title</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                    <label htmlFor="" className="form-label">Category</label>
                    <select name="" id="" className="form-control">
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    </div>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                    <label htmlFor="" className="form-label">Publish year</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                        <label htmlFor="" className="form-label">Author name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Book Description</label>
                        <textarea name="" id="" className="form-control"></textarea>
                    </div>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                    <label htmlFor="" className="form-label">Distributer name</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                    <label htmlFor="" className="form-label">Publisher name</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                        <label htmlFor="" className="form-label">Price</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                    <label htmlFor="" className="form-label">Edition</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                        <button className="btn btn-info">Submit</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddBook
