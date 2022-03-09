import PropTypes from 'prop-types';
import Head from 'next/head';


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

export default App;