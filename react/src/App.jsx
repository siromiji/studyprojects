import Counter from "./Counter";
import MiniTimer from "./MiniTimer";
import UserForm from "./UserForm";
export default function App(){
  return(
    <>
    <div>
      <h2>리액트 스타트</h2>
      <Counter/>
    </div>
    <div>
      <MiniTimer/>
    </div>
    <div>
      <UserForm/>
    </div>
    </>
  );
}