// 이벤트 버블링 (Event Bubbling)
const content = document.querySelector('#content');
const title = document.querySelector('#title');
const list = document.querySelector('#list');
const items = document.querySelectorAll('.item');


// 각 요소 별로 click타입의 이벤트 핸들러를 작성
content.addEventListener('click', function(e) {  // content 영역을 클릭하면 content eventHandler가 동작한다.
  console.log('content Event');
  console.log(e.target); // 버블링이 일어나도 처음에 event가 동작한 target은 변하지 않는다. 
});

title.addEventListener('click', function(e) {  // title 영역을 클릭하면 title eventHandler와 content eventHandler가 동작한다. (bubbling)
  console.log('title Event');
  console.log(e.target); // 버블링이 일어나도 처음에 event가 동작한 target은 변하지 않는다. 
});

list.addEventListener('click', function(e) {  // list 영역을 클릭하면 list eventHandler와 content eventHandler가 동작한다. (bubbling)
  console.log('list Event');
  console.log(e.target); // 버블링이 일어나도 처음에 event가 동작한 target은 변하지 않는다. 
});

for (let item of items) {
  item.addEventListener('click', function(e){  // item 영역을 클릭하면 item eventHandler와 list, content eventHandler가 동작한다. (bubbling)
    console.log('item Event');
    console.log(e.target); // 버블링이 일어나도 처음에 event가 동작한 target은 변하지 않는다. 
    e.stopPropagation(); // 버블링이 일어나지 않는다. (버블링은 가급적으로 막지않는것이 좋다.)
  });
}