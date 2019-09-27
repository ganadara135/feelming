import React, { useEffect } from 'react';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { useDispatch, useSelector, connect } from 'react-redux';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';


const Home = () => {
    const dispatch = useDispatch();
    const { me } = useSelector( state => state.user );
    const { mainPosts } = useSelector( state => state.post );

    // useEffect( () => {
    //     dispatch({
            
    //     });
    // }, []);

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

Home.getInitialProps = async (context) => {
    context.store.dispatch({
        type: LOAD_MAIN_POSTS_REQUEST,
    })
};

export default Home;

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


/*

 // Docker 재실행 방법
 docker ps          // 과거 실행 내역 조사 
 docker restart 이름,
 docker exec -it web(이름) /bin/bash
 npm run dev  // 백엔드 프런트엔드 각각 위치에서 실행 

 
 // Docker 초기 실행 방법
 Docker 실행 명령어
 docker mysql 실행
 docker run --name mysql -e MYSQL_ROOT_PASSWORD=mypass -d -p 3306:3306 mysql


 mysql 컨테이너에 접속하기
 docker exec -it mysql /bin/bash

 mysql 데이터베이스에 접근하기
 mysql -u root -p password




 Nodejs 서버 + mysql 연결하여  실행 
 docker run -it -p 3060:3060 -p 3065:3065 --volume=$(pwd):/app/  --name web --link mysql-db  -d node  

 NodeJs 컨테이너에 접속하기 
 docker exec -it web /bin/bash

 mysql 컨테이너 접속 아이피 찾기
 docker inspect bridge

 찾은 아이피를 백엔드 db 설정 파일에 적는다
 /backend/config/config.js

 백엔드와 프런트 서버를 각각 가동한다.
 

*/