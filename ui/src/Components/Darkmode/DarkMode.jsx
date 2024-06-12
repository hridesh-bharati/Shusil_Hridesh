import enquiryBg from "/images/vender/enquiryBg.png";
const toggleDarkMode = (isDarkMode, setIsDarkMode) => {
    setIsDarkMode(prevMode => !prevMode);
    const BgX = 'var(--MyDarkGrayBg)'
    const navBar = document.getElementById('TopNavBar');
    const toggleNavBg = document.getElementById('toggleNav');
    const CourseListNav = document.getElementById('CourseListNav');
    const studentZoneNav = document.getElementById('studentZoneNav');
    const offcanvasScrollingRight = document.getElementById('offcanvasScrollingRight');
    const Home = document.getElementById('Home');
    const aboutText = document.getElementById('aboutText');
    const FeatureTextOne = document.getElementById('FeatureTextOne');
    const FeaturesTableColor = document.getElementById('FeaturesTableColor');
    const tableData = document.getElementById('tableData');
    const LinkData = document.getElementById('LinkData');
    // const TestimonialChild = document.getElementById('TestimonialChild');
    // ______________Start About________________
    const aboutBg = document.getElementById('aboutBg');
    const aboutMainBg = document.getElementById('aboutMainBg');
    const MissionLeft1 = document.getElementById('MissionLeft1');
    const MissionLeft2 = document.getElementById('MissionLeft2');
    const MissionRight = document.getElementById('MissionRight');
    const Accordion1 = document.getElementById('Accordion1');
    const MyCardBg = document.getElementById('MyCardBg');
    const MyCardBgText = document.getElementById('MyCardBgText');
    const counter1 = document.getElementById('counter1');
    const counter2 = document.getElementById('counter2');
    const counter3 = document.getElementById('counter3');
    const counter4 = document.getElementById('counter4');
    // const affiliationsContainer = document.getElementById('affiliationsContainer');
    const branchBg = document.getElementById('branchBg');
    const branchBgCard = document.getElementById('branchBgCard');
    const shortContact = document.getElementById('shortContact');
    const MyFooterColor = document.getElementById('MyFooterColor');
    const lastFooter = document.getElementById('lastFooter');
    const courseMarqueeSlide = document.getElementById('courseMarqueeSlide');
    const coureContentList = document.getElementById('coureContentList');

    const diplomaBg = document.getElementById('diplomaBg');
    const mainDiplomaContainer = document.getElementById('mainDiplomaContainer');
    const diplomaCard = document.getElementById('diplomaCard');
    const diplomaText = document.getElementById('diplomaText');
    const certificateBgMain = document.getElementById('certificateBgMain');

    const certificateBg = document.getElementById('certificateBg');
    const proLang = document.getElementById('proLang');
    const proTable = document.getElementById('proTable');
    // Admission
    const admissionBg = document.getElementById('AdmForm')
    const AdmGuid = document.getElementById('AdmGuidBg')

    if (navBar) {
        navBar.style.backgroundColor = isDarkMode ? 'var(--darkRed)' : 'black';
    }
    if (toggleNavBg) {
        toggleNavBg.style.backgroundColor = isDarkMode ? 'var(--topNavBgColor)' : 'black';
    }
    if (CourseListNav) {
        CourseListNav.style.backgroundColor = isDarkMode ? 'var(--darkRed)' : 'black';
    }
    if (studentZoneNav) {
        studentZoneNav.style.backgroundColor = isDarkMode ? 'var(--darkRed)' : 'black';
    }
    if (offcanvasScrollingRight) {
        offcanvasScrollingRight.style.backgroundColor = isDarkMode ? 'white' : 'black';
    }
    if (Home) {
        Home.style.backgroundColor = isDarkMode ? 'var(--mainBgcolor)' : 'black';
        Home.style.color = isDarkMode ? 'black' : 'var(--mainBgcolor)';
    }
    if (aboutText) {
        aboutText.style.color = isDarkMode ? 'black' : 'white';
    }
    // Handle image display
    // const carouselExampleInterval = document.getElementById('carouselExampleInterval');
    // if (carouselExampleInterval) {
    //     carouselExampleInterval.style.background = isDarkMode ? `url(${enquiryBg})` : `url(${testimonial})`;
    // }

    if (FeatureTextOne) {
        FeatureTextOne.style.color = isDarkMode ? 'black' : 'yellow';
    }
    if (FeaturesTableColor) {
        FeaturesTableColor.style.backgroundColor = isDarkMode ? 'white' : BgX;
    }
    if (tableData) {
        tableData.style.color = isDarkMode ? 'black' : 'white';
        tableData.style.backgroundColor = isDarkMode ? 'white' : BgX;
    }

    if (LinkData) {
        LinkData.style.backgroundColor = isDarkMode ? 'white' : BgX;
    }
    // _________________Start About_____________________

    if (aboutMainBg) {
        aboutMainBg.style.backgroundColor = isDarkMode ? '#b2beff' : 'black';
    }
    if (aboutBg) {
        aboutBg.style.backgroundColor = isDarkMode ? 'white' : BgX;
        aboutBg.style.color = isDarkMode ? 'black' : 'white';
    }
    if (MissionLeft1) {
        MissionLeft1.style.backgroundColor = isDarkMode ? 'white' : BgX;
        MissionLeft1.style.color = isDarkMode ? 'black' : 'white';
    }
    if (MissionLeft2) {
        MissionLeft2.style.backgroundColor = isDarkMode ? 'white' : BgX;
        MissionLeft2.style.color = isDarkMode ? 'black' : 'white';
    }
    if (MissionRight) {
        MissionRight.style.backgroundColor = isDarkMode ? 'white' : BgX;
        MissionRight.style.color = isDarkMode ? 'black' : 'white';
    }
    if (Accordion1) {
        Accordion1.style.backgroundColor = isDarkMode ? 'white' : BgX;
        Accordion1.style.color = isDarkMode ? 'black' : 'white';
    }
    if (MyCardBg) {
        MyCardBg.style.backgroundColor = isDarkMode ? 'white' : BgX;
        if (MyCardBgText) {
            const listItems = MyCardBgText.querySelectorAll('li');
            listItems.forEach(item => {
                item.style.color = isDarkMode ? 'black' : 'white';
            });
        }
    }
    const affiliationsContainer = document.getElementById('affiliationsContainer');
    if (affiliationsContainer) {
        // Select all card bodies within the affiliations container
        const cardBodies = affiliationsContainer.querySelectorAll('.card-body');

        // Apply styles to each card body
        cardBodies.forEach(cardBody => {
            // Apply background color
            cardBody.style.backgroundColor = isDarkMode ? '' : BgX;
            // Apply text color
            cardBody.style.color = isDarkMode ? 'black' : 'white';
        });
    }
    // _________________End About_______________________
    // _________________Start Counter Card ___________________
    if (counter1) {
        counter1.style.backgroundColor = isDarkMode ? 'white' : BgX;
        counter1.style.color = isDarkMode ? 'black' : 'white';
    } if (counter2) {
        counter2.style.backgroundColor = isDarkMode ? 'white' : BgX;
        counter2.style.color = isDarkMode ? 'black' : 'white';
    } if (counter3) {
        counter3.style.backgroundColor = isDarkMode ? 'white' : BgX;
        counter3.style.color = isDarkMode ? 'black' : 'white';
    } if (counter4) {
        counter4.style.backgroundColor = isDarkMode ? 'white' : BgX;
        counter4.style.color = isDarkMode ? 'black' : 'white';
    }
    // _________________Start Branch ___________________
    if (branchBg) {
        branchBg.style.backgroundColor = isDarkMode ? '#b2beff' : 'black';
        branchBg.style.color = isDarkMode ? 'black' : 'gray';
    }
    if (branchBgCard) {
        branchBgCard.style.backgroundColor = isDarkMode ? 'var(--cardHeadColorDark)' : BgX;
        branchBgCard.style.border = isDarkMode ? 'transparent' : '1px solid white';
    }
    if (shortContact) {
        shortContact.style.backgroundColor = isDarkMode ? 'var(--cardHeadColorDark)' : BgX;
        shortContact.style.border = isDarkMode ? 'transparent' : '1px solid gray';
    }
    // _________________End Branch ___________________
    // _________________Start Footer ___________________

    if (MyFooterColor) {
        MyFooterColor.style.backgroundColor = isDarkMode ? 'var(--cardHeadColorDark)' : 'black';
    }
    if (lastFooter) {
        lastFooter.style.backgroundColor = isDarkMode ? 'rgba(0, 0, 0, 0.2)' : BgX;
    }
    if (courseMarqueeSlide) {
        courseMarqueeSlide.style.backgroundColor = isDarkMode ? '#FF9500' : BgX;
        courseMarqueeSlide.style.color = isDarkMode ? 'black' : 'white';
    }
    if (coureContentList) {
        coureContentList.style.backgroundColor = isDarkMode ? 'var(--cardHeadColor)' : 'gray';
        coureContentList.style.color = isDarkMode ? 'white' : 'black';


    }
    // _________________End Footer ___________________

    if (diplomaBg) {
        diplomaBg.style.backgroundColor = isDarkMode ? '#b2beff' : 'black';
        diplomaBg.style.color = isDarkMode ? 'black' : 'white';
    }
    if (mainDiplomaContainer) {
        mainDiplomaContainer.style.backgroundColor = isDarkMode ? 'white' : BgX;
        mainDiplomaContainer.style.color = isDarkMode ? 'black' : 'white';
        mainDiplomaContainer.style.border = isDarkMode ? 'transparent' : '1px solid gray';

    }
    if (diplomaCard) {
        diplomaCard.style.backgroundColor = isDarkMode ? 'white' : BgX;
    }
    if (diplomaText) {
        diplomaText.style.color = isDarkMode ? 'black' : 'white';
    }
    if (certificateBg) {
        certificateBg.style.backgroundColor = isDarkMode ? 'white' : BgX;
        certificateBg.style.color = isDarkMode ? 'black' : 'white';
    }
    if (certificateBgMain) {
        certificateBgMain.style.backgroundColor = isDarkMode ? '#b2beff' : 'black';
    }
    if (proLang) {
        proLang.style.backgroundColor = isDarkMode ? '#b2beff' : 'black';
    }
    if (proTable) {
        proTable.style.backgroundColor = isDarkMode ? 'white' : BgX;
        proTable.style.border = isDarkMode ? 'transparent' : '1px solid gray';
    }
    // start Admission from
    if (admissionBg) {
        admissionBg.style.backgroundColor = isDarkMode ? 'var(--admHeadColor)' : 'var(--MyDarkGrayBg)';
    }
    if (AdmGuid) {
        AdmGuid.style.backgroundColor = isDarkMode ? 'pink' : 'gray';
    }
    // End Admission from


};

export default toggleDarkMode;
