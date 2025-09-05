import { useState} from "react";
//import : 자바스크립트에서 다른 파일이나 라이브러리의 기능을 불러오는 키워드
//여기서는 react라는 라이브러리에서 useState라는 기능을 가져온다

//{useState}: React가 제공하는 Hook중 하나
//Hook은 함수형 컴포넌트에서 상태(state)와 같은 React 기능을 쓰게 해주는 특별한 함수 useState는 [값,값을 바꾸는 함수]배열을 반환한다
export default function UserForm(){
//export : 이 파일에서 만든 걸 밖으로 내보내겠다.
//다른 파일에서 import해서 쓸 수 있도록 공개 
const [user,setUser] = useState({name: "",email:""});
//useState는 배열을 반환한다 
//형태는 [현재값,값을 바꾸는 함수]
    return(
        <div style={{textAlign:"center",marginTop:"30px"}}>
            <h2> 사용자 정보 입력</h2>
            {/* 이름 입력 */}
            <input 
            type="text"
            placeholder="이름 입력"
            value={user.name}
            onChange={(e)=>setUser({ ...user, name: e.target.value})}
            //...user는 자바스크립트의 스프레드 연산자(spread Operator)
            //즉 얕은 복사(shadow copy를 의미)
            //그냥 쓰면 email정보가 날아가버린다.
            //왜냐하면 새로운 객체에 email을 넣지 않았기 때문
            //그래서 ...user를 씀
            //기존 user 객체를 얕은 복사 해서 그대로 복사해와서 
            //name:e.target.value 그 복사본에서 name만 덮어씀
            //email 값은 유지되고 name값만 바뀐 새로운 객체가 만들어져서 state로 들어감 
             />
             <br /><br />
             {/* 이메일 입력 */}
             <input
             type="text"
             placeholder="이메일 입력"
             value={user.email}
             onChange={(e) => setUser({...user,email: e.target.value})}
             />
            <br /><br />

        </div>
    )
}