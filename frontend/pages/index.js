import React, { useEffect } from 'react';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { useDispatch, useSelector, connect } from 'react-redux';
import { loginAction, logoutAction } from '../reducers/user';


const Home = () => {
    const dispatch = useDispatch();
    const { isLoggedIn, user } = useSelector( state => state.user );
    const { mainPosts } = useSelector( state => state.post );
   // console.log(user);
    
    // useEffect( () => {
    //     dispatch(loginAction);
    //     dispatch(logoutAction);
    //     dispatch(loginAction);
    // }, []);

    return (
        <div>
            {isLoggedIn && <PostForm /> }
            {mainPosts.map( (c) => {
                return (
                    <PostCard key={c} post={c} />
                );
            })}
        </div>
    );
};

// function mapStateToProps(state) {
//     return {
//         user: state.user,
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         login: () => dispatch(loginAction),
//         logout: () => dispatch(logoutAction)
//     };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;