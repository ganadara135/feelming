import React, { useEffect } from 'react';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { useDispatch, useSelector, connect } from 'react-redux';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';


const Home = () => {
    const dispatch = useDispatch();
    const { me } = useSelector( state => state.user );
    const { mainPosts } = useSelector( state => state.post );

    useEffect( () => {
        dispatch({
            type: LOAD_MAIN_POSTS_REQUEST,
        });
    }, []);

    return (
        <div>
            {me && <PostForm /> }
            {mainPosts.map( (c,index) => {
                return (
                    <PostCard key={index} post={c} />
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