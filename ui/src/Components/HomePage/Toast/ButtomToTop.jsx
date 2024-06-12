import React from 'react';

function ScrollToTopButton() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button onClick={handleScrollToTop} className="btn btn-primary" id="btnBackToTop"
            style={{ position: 'fixed', bottom: '55px', right: '20px' }}
            title="Scroll to Top">
            <i className="bi bi-arrow-up-circle-fill fs-4"></i>
        </button>

    );
}

function ButtomToTop() {
    return (
        <div style={{ zIndex: '99999' }} className='position-absolute'>
            <ScrollToTopButton />
        </div>
    );
}

export default ButtomToTop;
