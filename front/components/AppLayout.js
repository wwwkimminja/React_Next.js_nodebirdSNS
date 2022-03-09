import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({children}) =>{
    return (
        <div>
            <div>
                <Link href="/">node bird</Link>
                <Link href="/profile">my profile</Link>
                <Link href="/signup">sign up</Link>
            </div>
{children}
        </div>
    );
};
AppLayout.propTypes={
    children: PropTypes.node.isRequired,
}
export default AppLayout;