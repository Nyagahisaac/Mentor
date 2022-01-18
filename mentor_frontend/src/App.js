import React from 'react';
import { BrowserRouter as Router, Link, Route, useLocation} from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import FAQs from './components/FAQs';
import ImageGallery from './components/ImageGallery';
import Footer from './Navigation/Footer';
import Header from './Navigation/WhiteHeader';
import AboutUs from './Pages/AboutUs';
import Dividends from './Pages/Dividends/Dividends';
import EventList from './Pages/Events/EventList';
import EventDetails from './Pages/Events/EventDetails';
import Home from './Pages/Home';
import Location from './Pages/Location';
import Memberships from './Pages/Memberships';
import Personal from './Pages/Menu/Personal';
import NewsList from './Pages/News/NewsList';
import InsureList from './Pages/ProductPages/InsureList';
import InvestList from './Pages/ProductPages/InvestList';
import LoanDetail from './Pages/ProductPages/LoanDetail';
import LoanEstimate from './Pages/ProductPages/LoanEstimate';
import LoansList from './Pages/ProductPages/LoansList';
import SavingsList from './Pages/ProductPages/SavingsList';
import Solutions from './Pages/Solutions';
import RegisterSuccess from './Pages/SuccessPages/RegisterSuccess';
import Confirmation from './Users/Confirmation';
import MemberLogin from './Users/MemberLogin';
import ScreenFour from './Users/ScreenFour';
import ScreenOne from './Users/ScreenOne';
import ScreenThree from './Users/ScreenThree';
import ScreenTwo from './Users/ScreenTwo';
import ScreenZero from './Users/ScreenZero';
import WelcomeScreen from './Users/WelcomeScreen';
import Backdrop from './components/Backdrop';
import CustomModal from './components/CustomModal';
import BankingList from './Pages/ProductPages/BankingList';
import NewsDetail from './Pages/News/NewsDetail';
import PressReleaseComponent from './Pages/News/PressReleas';
import TSC from './Pages/Memberships/TSC';
import BOG_CivilServants from './Pages/Memberships/BOG_CivilServants';
import TermsConditions from './Pages/Memberships/TermsConditions';
import Business from './Pages/Menu/Business';
import Corporate from './Pages/Menu/Corporate';
import PersonalLoans from './Pages/ProductCategories/Loans/PersonalLoans';
import BusinessLoans from './Pages/ProductCategories/Loans/BusinessLoans';
import CorporateLoans from './Pages/ProductCategories/Loans/CorporateLoans';
import Life from './Pages/ProductPages/InsuranceCategories/Life';
import PropertyInsurance from './Pages/ProductPages/InsuranceCategories/PropertyInsurance';
import Education from './Pages/ProductPages/InsuranceCategories/Education';
import Auto from './Pages/ProductPages/InsuranceCategories/Auto';
import Health from './Pages/ProductPages/InsuranceCategories/Health';
import UserProfile from './Profile/UserProfile';
import MobileBanking from './Pages/RegistrationForms/MobileBanking';
import ATMApplication from './Pages/RegistrationForms/ATMApplication';
import FosaLoan from './Pages/RegistrationForms/FosaLoan';
import BosaLoan from './Pages/RegistrationForms/BosaLoan';
import FundsTransfer from './Pages/RegistrationForms/FundsTransfer';
import SalaryAdvance from './Pages/RegistrationForms/SalaryAdvance';
import StandingOrderVariation from './Pages/RegistrationForms/StandingOrderVariation';
import AccountStatementRequest from './Pages/RegistrationForms/AccountStatementRequest';
import JointAccountApplication from './Pages/RegistrationForms/JointAccountApplication';
import BusinessAccountRegistration from './Pages/RegistrationForms/BusinessAccountRegistration';
import OurTeam from './Pages/OurTeam';
import Employed from './Pages/Memberships/Employed';
import BusinessCompanies from './Pages/Memberships/BusinessCompanies';
import GroupsChamas from './Pages/Memberships/GroupsChamas';
import TSCZero from './Pages/Memberships/TCS/TCSZero';
import TSCOne from './Pages/Memberships/TCS/TSCOne';
import TSCTwo from './Pages/Memberships/TCS/TSCTwo';
import TSCThree from './Pages/Memberships/TCS/TSCThree';
import BizZero from './Pages/Memberships/BusinessCompanies/BizZero';
import BizOne from './Pages/Memberships/BusinessCompanies/BizOne';
import BizTwo from './Pages/Memberships/BusinessCompanies/BizTwo';
import BusinessMembership from './Pages/Memberships/BusinessMembership';
import CompanyMembership from './Pages/Memberships/CompanyMembership';
// import SuccessSubmit from './Pages/RegistrationForms/SuccessSubmit';
import DevelopmentLoans from './Pages/ProductCategories/Loans/DevelopmentLoans';
import ShortTermPersonal from './Pages/ProductCategories/Loans/ShortTermPersonal';
import { useRouteMatch } from "react-router-dom";
import LoansProductPage from './Pages/ProductPages/LoansProductPage'
import JoinUsPage from './components/JoinUsPage';
import TSCProfile from './components/AccountDetails/tsc/tsc';
import BuisnessProfile from './components/AccountDetails/buisness/buisness';
import EmployedProfile from './components/AccountDetails/employeed/employed';
import GroupsProfile from './components/AccountDetails/groups/groups';
import InsuaranceDetails from './Pages/ProductPages/InsuaranceDetails';
import LandingPage from './Profile/LandingPage';
import Careers from './Pages/Careers';
import LoanForm from './Pages/RegistrationForms/LoanForm';
import SavingsProductDetails from './Pages/ProductPages/SavingsProductDetails';
import { PrivateRoute } from '../src/helpers/PrivateRoute'
import { Dashboard } from './Navigation/Dashboard'

function App() {
 /*  const location = useLocation(); */
 /* let match = useRouteMatch("/"); */
  return (
    <div className='main'>
    <Router>
      {/* {window.location.pathname !== "/" ? <Header/> : null} */}
      
        <Route path="/" component={Home} exact />
        <Route path="/services" component={Solutions}  exact/>
        <Route path="/memberships" component={Memberships}  exact/>
        <Route exact path="/joinas/:name" component={JoinUsPage} />
        <Route path="/about-us" component={AboutUs} exact/>
        <Route path='/dashboard' component={Dashboard} exact />


        <PrivateRoute exact path="/user/landing" component={LandingPage} />
        <PrivateRoute path="/user/profile" component={UserProfile} exact/>

        <Route exact path="/save-money" component={SavingsList} />
        <Route exact path="/savingsproduct/:name" component={SavingsProductDetails} />
        <Route exact path="/borrow" component={LoansList} />
        <Route exact path="/saccoservices" component={BankingList} />
        <Route exact path="/insure" component={InsureList} />
        <Route exact path="/invest" component={InvestList} />
        {/* <Route path="/finwit" component={CompanyPage} /> */}

        {/* Product pages */}
        <Route path="/solutions/personal_services" component={Personal} />
        <Route path="/solutions/development_loans_services" component={DevelopmentLoans} />
        <Route path="/solutions/short_term_personal_services" component={ShortTermPersonal} />
        <Route path="/solutions/business_services" component={Business} />
        <Route path="/solutions/corporate_services" component={Corporate} />

        {/* Memberships */}
        <Route path="/membership/tsc" component={TSC} />
        <Route path="/membership/groups_chamas" component={GroupsChamas} />
        <Route path="/membership/businesses_companies" component={BusinessCompanies} />
        <Route path="/membership/businesses" component={BusinessMembership} />
        <Route path="/membership/companies" component={CompanyMembership} />
        <Route path="/membership/terms_conditions" component={TermsConditions} />
        <Route path="/membership/employed" component={Employed} />


        <Route path="/membership/tsc_account_creation" component={TSCZero} />
        <Route path="/membership/personal_information" component={TSCOne} />
        <Route path="/membership/next_of_kin" component={TSCTwo} />
        <Route path="/membership/remittance_details" component={TSCThree} />

        <Route path="/business_groups/account_creation" component={BizZero} />
        <Route path="/business_groups/account_operation" component={BizOne} />
        <Route path="/business_groups/remittance_details" component={BizTwo} />


        {/* Memberships */}

        
        <Route path="/product/loans" component={LoansList} exact />
        <Route path="/product/loan" component={LoanDetail} exact />
        <Route path="/product/loan_estimate" component={LoanEstimate} exact />

        {/* News */}
        <Route path="/sacco_news/news_title" component={NewsDetail} exact />
        <Route exact path="/sacco_news/press_release" component={PressReleaseComponent} />

        {/* Events */}

        <PrivateRoute path="/events" component={EventList} exact />
        <PrivateRoute path="/event/details" component={EventDetails} exact />


        {/* Member Registration */}
        {/* <Route path="/registration/elligibility" component={WelcomeScreen} />
        <Route path="/registration/account_register" component={ScreenZero} />
        <Route path="/registration/member_details" component={ScreenOne} />
        <Route path="/registration/next_of_kin_details" component={ScreenTwo} />
        <Route path="/registration/account_creation" component={TSCThree} /> */}
        {/* <Route path="/registration/account_confirmation" component={ScreenFour} /> */}
        <Route path="/registration/account_creation_success" component={Confirmation} />
        <Route path="/user/member_login" component={MemberLogin} />

        {/* Member complete registration */}
         {/* <PrivateRoute exact path='/accountdetails/tsc' component={TSCProfile} />
         <PrivateRoute exact path='/accountdetails/buisness' component={BuisnessProfile} />
         <PrivateRoute exact path='/accountdetails/groups' component={GroupsProfile} />
         <PrivateRoute exact path='/accountdetails/employed' component={EmployedProfile} /> */}

         <Route exact path='/accountdetails/tsc' component={TSCProfile} />
         <Route exact path='/accountdetails/buisness' component={BuisnessProfile} />
         <Route exact path='/accountdetails/groups' component={GroupsProfile} />
         <Route exact path='/accountdetails/employed' component={EmployedProfile} />

        {/* Successpages */}
        <Route path="/event/register" component={RegisterSuccess} />

        {/* Footer Links */}
        <Route path="/help/faqs" component={FAQs} />
        <Route path="/news" component={NewsList} exact />
        <Route path="/csr/gallery" component={ImageGallery} exact />
        <Route path="/location" component={Location} exact />
        <Route path="/dividends" component={Dividends} exact />
        <Route exact path='/careers' component={Careers} />


        {/* Loan Categories */}
        <Route path="/loans/personal" component={PersonalLoans} exact />
        <Route path="/loans/business" component={BusinessLoans} exact />
        <Route path="/loans/corporate" component={CorporateLoans} exact />
        <Route exact path="/loaninfo/:name" component={LoansProductPage} />
        <Route exact path={"/applyLoan"} component={LoanForm} />

        {/* Insurance Products */}
        <Route path="/insurance/life" component={Life} exact />
        <Route path="/insurance/health" component={Health} exact />
        <Route path="/insurance/auto" component={Auto} exact />
        <Route path="/insurance/education" component={Education} exact />
        <Route path="/insurance/property" component={PropertyInsurance} exact />
        <Route exact path="/insuaranceproduct/:name" component={InsuaranceDetails} />

        {/* Registration Forms */}
        <Route path="/mobile_banking/register" component={MobileBanking} />
        <Route path="/atm_card/register" component={ATMApplication} />
        <Route path="/fosa_loan/application" component={FosaLoan} />
        <Route path="/bosa_loan/application" component={BosaLoan} />
        <Route path="/funds_transfer/application" component={FundsTransfer} />
        <Route path="/salary_advance/application" component={SalaryAdvance} />
        <Route path="/standing_order/application" component={StandingOrderVariation} />
        <Route path="/account_statement_request/application" component={AccountStatementRequest} />
        <Route path="/joint_account/application" component={JointAccountApplication} />
        <Route path="/business_account/registration" component={BusinessAccountRegistration} />
        {/* <Route path="/submit/success" component={SuccessSubmit} /> */}

        {/* Our Team */}
        <Route path="/our_team/board_members" component={OurTeam} />

        
      <Footer />
      

      <CookieConsent
        debug='true'
        location="bottom"
        buttonText="I agree"
        cookieName="mentorSaccoCookie"
        style={{ background: "#515354" }}
        buttonStyle={{ background: "#067C4B", fontSize: "15px", color:"white", borderRadius:"0.2rem" }}
        expires={150}
      >
      Mentor Sacco is dedicated to upholding data privacy. Our website uses cookies to enhance the user experience. By continuing to use this website, you agree to our <Link to="">privacy policy.</Link>{" "}
      {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
    </CookieConsent>
    </Router>
    </div>
  );
}

export default App;
