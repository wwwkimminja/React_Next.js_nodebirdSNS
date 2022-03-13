import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from '../store/configureStore';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const App = ({Component}) => { 
    return (
        <>
        <div>Menu</div>
        <Component/>
        </>  
    );
};

App.propTypes ={
    Component : PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(App);