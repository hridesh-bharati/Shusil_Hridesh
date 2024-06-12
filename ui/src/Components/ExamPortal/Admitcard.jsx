import React from 'react'

export default function Admitcard() {
    const AdmitStyle = {
        border: '2px solid black',
        margin: '0'
    }
    return (
        <div className='bg-white py-3 overflow-x-auto' id='Admitcard'>
            <div className='px-md-5 m-auto myshadow py-5 pb-1 mb-5' style={{ width: '50rem' }}>
                <div className="row d-flex justify-content-between" style={AdmitStyle}>
                    <div className="col-1 text-center mx-0 px-0">
                        <img src="images/vender/logo.png" className='img-fluid py-2' style={{ width: '100px' }} alt="" />
                    </div>
                    <div className="col-11 text-center mx-0 px-0">
                        <h4 className='fw-bold pb-0'>DRISHTEE INSTITUTE OF INFORMATION TECHNOLOGY</h4>
                        <h6>A complete I.T. institute</h6>
                    </div>
                </div>
                <button className="btn text-light rounded-0 fw-bold bg-dark w-100">ADMIT CARD FOR FINAL COURSE PROGRAM - 2024</button>
                <div className="row py-2" style={AdmitStyle}>
                    {/* <div className="col-1">QR</div> */}
                    <div className="col-10 text-center">
                        Paragpur raod Near Ramharsh Inter Collage Nichlaul, <br /> Distt-Maharajganj,  <br /> Uttar-pradesh 273304
                    </div>
                    <div className="col-2">
                        <img src="images/vender/abhay.jpg" className='img-fluid' style={{ width: '100px' }} alt="student" />
                    </div>
                </div>
                {/* ___________Student table________________ */}
                <div
                    class="table-responsive">
                    <table
                        class="table table-light table-sm table-bordered border-secondary">
                        <tbody>
                            <tr>
                                <th>Registration No.</th>
                                <td>121</td>
                                <th>Course</th>
                                <td>ADCA</td>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>Balram</td>
                                <th>father's name</th>
                                <td>Ramesh</td>
                            </tr>
                            <tr>
                                <th>father's name</th>
                                <td>Ramesh</td>
                                <th>Gender</th>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <th colSpan={5}>Address</th>
                            </tr>
                            <tr>
                                <td colSpan={5}>Village-Bahaji, post-ledi farm, nichlaul Maharajganj</td>
                            </tr>
                            <tr>
                                <th colSpan={5} className='table-secondary'>EXAMINATION CENTER ADDRESS</th>
                            </tr>
                            <tr>
                                <td colSpan={5}>Paragpur raod, inside of life care farma, Near Ramharsh Inter Collage Nichlaul, Distt-Maharajganj, Uttar-pradesh 273304</td>
                            </tr>
                        </tbody>
                    </table>
                </div>



                <div className="mx-5">
                    <button className="btn btn-sm hover-btn p-0 m-0" >
                        <img src="/images/icon/download.png" className='img-fluid p-0 m-0' style={{width:'100px'}} alt="Download" />  </button>
                    <h5 className='text-white lh-lg'>Download your E-Certificate  </h5>
                </div>
            </div>
        </div>
    )
}
