import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from '../store/configureStore';


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