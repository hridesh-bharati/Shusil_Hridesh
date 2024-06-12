import React from 'react';
import { Link } from 'react-router-dom';
import callIcon from '/images/icon/call.gif';
import { FacebookShareButton, WhatsappShareButton, EmailShareButton } from 'react-share';

const customMobileNumber = '7267995307';
const title = 'Hello! *Mr. Ajay tiwari* ';

const generateWhatsAppLink = () => {
    const shareMessage = encodeURIComponent(title);
    const whatsappLink = `https://wa.me/${customMobileNumber}?text=${shareMessage}`;
    return whatsappLink;
};

// Define shareUrl and title variables outside of addressData
const addressData = {
    address1: 'Paragpur raod Near Ramharsh Inter Collage Nichlaul.',
    address2: 'Main market Road in front of Rauniyar chitra mandir Thoothibari.',
    phoneNumbers: [
        { name: 'Mr. Ajay Tiwari', number: '9918151032' },
        { name: 'Santosh Singh Chauhan', number: '7398889347' },
        { name: 'Manjesh Vishwakarma', number: '9621444858' },
        { name: 'Hridesh Bharati', number: '7267995307' },
    ],
};
const whatsappLink = generateWhatsAppLink();


const quickLinksData = [
    { text: 'Home', link: '/' },
    { text: 'Branch', link: '/branch' },
    { text: 'DOEACC Course', link: '/NielitCourse' },
    { text: 'Diploma Courses', link: 'diploma' },
];
const otherLinksData = [
    { text: 'Certificate Verification', link: '/verification' },
    { text: 'New Admission', link: '/admissionForm' },
    { text: 'Enquire', link: '/contact' },
    { text: 'Term & Conditions', link: '/Discription' },
];

const newsUpdatesData = [
    'O level only 14999 Rs.',
    'CCC free on ADCA',
    'Assignments on every module.',
    'Projects based className',
];

function Footer() {
    return (
        <>
            <footer className="text-white text-lg-start py-4 border border-top" id="MyFooterColor" style={{ background: 'var(--cardHeadColorDark)' }}>
                <div className="container-fluid border-bottom">
                    <div className="row">
                        {/* Column 1: ADDRESS */}
                        <div className="col-md-4 mb-4 mb-md-0 m-sm-0 p-0">
                            <b data-aos="fade-down" className="ms-1" style={{ color: 'orange' }}>
                                <i className="fa fa-home text-white"></i> ADDRESS
                            </b>
                            <hr className="m-0 p-0" />
                            <table className="table mytable table-striped-columns mt-1">
                                <tbody className="font-weight-normal">
                                    <tr>
                                        <td data-aos="fade-right" data-aos-duration="100">
                                            <i className="bi bi-geo-alt-fill text-danger"></i><span id="address1">{addressData.address1}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-aos="fade-right" data-aos-duration="100">
                                            <i className="bi bi-geo-alt-fill text-danger"></i><span id="address2">{addressData.address2}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-aos="fade-right" data-aos-duration="200">
                                            <div className="d-flex flex-wrap">
                                                {addressData.phoneNumbers.map((phone, index) => (
                                                    <div key={index} className="d-inline-flex align-items-center mb-2 me-4">
                                                        <img src={callIcon} alt="" />
                                                        <span className="d-inline-block ms-2" title={phone.name}>+91 {phone.number}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        {/* Column 2: Quick Links */}
                        <div className="col-md-4 mb-4 mb-md-0 m-sm-0 ">
                            <b data-aos="fade-down" style={{ color: 'orange' }}>
                                <i className="fa fa-tags text-white"></i> QUICK LINKS

                            </b>
                            <hr className="m-0 p-0" />
                            <div className="row ">
                                <div className="col-6">
                                    <table className="table text-white table-striped-columns mt-1 footer-table">
                                        <tbody className="font-weight-normal">
                                            {quickLinksData.map((item, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <Link className="nav-link icon-link icon-link-hover" to={item.link} data-aos="fade-right" data-aos-duration={100}>
                                                            <i className="bi bi-arrow-right-short d-flex align-items-center"></i>
                                                            {item.text}
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-6">
                                    <table className="table text-white table-striped-columns mt-1 footer-table">
                                        <tbody className="font-weight-normal">
                                            {otherLinksData.map((item, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <Link className="nav-link icon-link icon-link-hover" to={item.link} data-aos="fade-right" data-aos-duration={100}>
                                                            <i className="bi bi-arrow-right-short d-flex align-items-center"></i>
                                                            {item.text}
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

                        {/* Column 3: NEWS & UPDATES */}
                        <div className="col-md-4 mb-4 mb-md-0">
                            <b data-aos="fade-down" style={{ color: 'orange' }}><i className="bi bi-newspaper text-white"></i> &nbsp;NEWS & UPDATES
                            </b>
                            <hr className="m-0 p-0" />
                            <table className="table text-white table-striped-columns mt-1 footer-table mytable">
                                <tbody className="font-weight-normal">
                                    {newsUpdatesData.map((update, index) => (
                                        <tr key={index}>
                                            <td data-aos="fade-right" data-aos-duration="300">{update}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td data-aos="fade-right" data-aos-duration="300" className="d-flex justify-content-evenly">
                                            <Link to={whatsappLink} className="nav-link text-success border-primary ">
                                                {/* <i className="bi bi-whatsapp fs-4 text-white px-2 py-1" title="Whatsapp share" style={{ background: '#19960e', borderRadius: '5px' }}></i> */}
                                                <img src="./images/icon/wp.png"  title="Whatsapp share" className='img-fluid'   style={{ width: '40px' }} alt="Fb" />

                                            </Link>
                                            <Link to="#" className="nav-link text-success border-primary ">
                                                {/* <i className="bi bi-youtube fs-4 text-white px-2 py-1" title="Youtube" style={{ background: 'red', borderRadius: '5px' }}></i> */}
                                                <img src="./images/icon/yyt.png"  title="Youtube" className='img-fluid'  style={{ width: '40px' }} alt="Fb" />

                                            </Link>
                                            <Link to="https://www.facebook.com/DrishteeInstituteOfComputerTechnology?mibextid=ZbWKwL" className="nav-link text-success border-primary ">
                                                {/* <i className="bi bi-facebook fs-4 text-white px-2 py-1" title="Go to facebook page" style={{ background: 'blue', borderRadius: '5px' }}></i> */}
                                                <img src="./images/icon/fb.png"  title="Go to facebook page" className='img-fluid'  style={{ width: '40px' }} alt="Fb" />

                                            </Link>
                                            <Link to="https://maps.app.goo.gl/eRr649A7s3KMCVAE9" className="nav-link text-info border-info ">
                                                <img src="./images/icon/gmap.png" className='img-fluid' title="Go to map" style={{ width: '40px' }} alt="map" />
                                            </Link>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        {/* Last Footer */}
                        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} id="lastFooter">
                            &copy; 2024 DIIT All Rights Reserved | Developed By : <strong className="text-warning">Sushil kandu</strong> 
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
