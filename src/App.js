// /*eslint-disable*/

import './App.css';
import { useState } from 'react';

function App() {

  // let post = '강남 우동 맛집';
  // document.querySelector('h4').innerHTML = post
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학'])
  // let [글제목2,b2] = useState('강남 우동 맛집')
  // let [글제목3,b3] = useState('파이썬 독학')
  let [좋아요,좋아요변경] = useState([0,0,0])
  let [modal, setModal] = useState(false) //닫힘 or 열림 등등 false true, 1 0 등등

  // function 함수() {
  //   console.log(1)
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'yellow', fontSize : '26px'}}>ReactBlog</h4>
      </div>
      {/* <h4>블로그 글 제목</h4> */}
      {/* <button onClick={()=>{
        let 글제목정렬 = [...글제목]
        글제목정렬.sort()
        글제목변경(글제목정렬)
      }} >제목 정렬</button> */}

        <button onClick={()=>{ 
          let copy = [...글제목]
          copy[0] = '여자 코트 추천'
          글제목변경(copy) 
        }}>여자버전</button>

{/* map함수 = array자료개수만큼 함수 안의 코드 반복실핼 */}
{/* return에 뭐 적으면 array로 담아줌 */}

      {/* <div className='list'>
        <h4>{글제목[0]} <span onClick={()=>{ 좋아요변경(좋아요+1) }}>❤️</span> {좋아요} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4 onClick={()=>{ 
          setModal(!modal) }} >{글제목[2]}</h4>
        <p>2월 17일 발행</p>
        {
          //삼항연산자 사용
          modal == true ? <Modal/> : null 
        }
      </div> */}

      {
        글제목.map(function(a,i){
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{ 
                setModal(!modal) }} >{i+1}. {a} 
                <span onClick={()=>{
                  let copy = [...좋아요]
                  copy[i] = copy[i]+1
                  좋아요변경(copy) }}>❤️</span> {좋아요[i]} </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
      {
        //삼항연산자 사용
        modal == true ? <Modal/> : null 
      }
      
    </div>
  );
}


// 1. 반복적인 html 축약할떼
// 2. 큰 페이지들
// 3. 자주 변겨경되는것들 
// -> component로 만들어

// const Modal = () => {
//   return
// }

function Modal(){
  return(
    <>
      <div className='modal'>
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세내용</p>
      </div>
    </>
  )
}

export default App;
