const btn = document.querySelector('button');

btn.addEventListener('click',(event) =>
{
    // console.log(event);
    const span = document.createElement('span');
    btn.append(span);
    // span.style.width='120px'
    const width =  btn.clientWidth - event.offsetX;
    const height = btn.clientHeight - event.offsetY;
    span.style.width = `${width +20}px`;
    span.style.height = `${height + 20}px`;
    span.style.top=`${event.offsetY}px`;
    span.style.left=`${event.offsetX}px`;
    span.style.transform='scale(2)';
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
