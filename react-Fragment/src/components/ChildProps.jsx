import PropTypes from 'prop-types';
const Container = ({children})=>{
    return <div className="child-container">
        {children}
    </div>

}
Container.propTypes = {
    children: PropTypes.node.isRequired, // children should be a React node, and it's required
};
export default Container;