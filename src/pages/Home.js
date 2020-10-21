import React from "react"
import { connect } from 'react-redux'

class Home extends React.Component {
    render() {
        return (
            <div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    reducer: state.reducers
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);