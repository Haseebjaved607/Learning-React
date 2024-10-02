import PropTypes from 'prop-types';
const Container = (props)=>{
    return <div className="child-container">
        {props.children}
    </div>

}
Container.propTypes = {
    children: PropTypes.node.isRequired, // children should be a React node, and it's required
};
export default Container;