const btn = document.querySelector('button');

btn.addEventListener('click',(event) =>
{
    // console.log(event);
    // client top and left and client x and y are two different things
    // console.log(event.target.clientTop);
    // console.log(event.target.clientLeft);
    const span = document.createElement('span');
    btn.append(span);

    // 1st apporch
    // span.style.width='120px'
    // const width =  btn.clientWidth - event.offsetX;
    // const height = btn.clientHeight - event.offsetY;
    // span.style.width = `${width +20}px`;
    // span.style.height = `${height + 20}px`;

    // 2nd apporch
    span.style.top=`${event.offsetY - 20}px`;
    span.style.left=`${event.offsetX - 20}px`;
    span.style.transform='scale(4)';
    // span.textContent='asdfs';   
    span.style.opacity=0.2;
    setTimeout(() => {
       span.remove();
    },300);
    // btn.style.width =`1000px`;
    // console.log(event.offsetX);
    // console.log(event.offsetY);
    // console.log(btn.clientHeight);
    // console.log(btn.clientWidth);
})
