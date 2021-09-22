import { connect } from "react-redux";
import Login from "../components/Login";
import { login } from "../redux/auth";

const mapStateToProps = state =>({
    auth:state.auth
})
const mapDispatchToProps = {login}

export default connect(mapStateToProps,mapDispatchToProps)(Login)