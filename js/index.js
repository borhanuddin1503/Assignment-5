
const complete_btns = document.querySelectorAll('.complete_btn');
for (const btn of complete_btns) {
    btn.addEventListener('click', function () {
        // show the title in alert
        alert('Board updated Successfully')

        // change the task assigned number
        const taskAssigned = getNumericTextById('task_assigned');
        setInnerText('task_assigned', taskAssigned - 1);

        // disable button
        btn.setAttribute('disabled', true);
        btn.style.opacity = '0.3';

        // increase task count
        const taskCount = getNumericTextById('task_count');
        setInnerText('task_count', taskCount + 1);

        
        // make the time
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const amOrPm = hours >= 12 ? 'PM' : 'AM';
        hours > 12 ? hours - 12 : hours;
        const accurateTime = `${hours}:${minutes}:${seconds} ${amOrPm}`

        // add the task in the Activity log
        const activityContainer = document.getElementById('activity_container');

        const card = btn.parentNode.parentNode;
        const taskTitle = card.children[1].innerText;

        const p = document.createElement('p');
        p.innerText = `You have Complete The Task ${taskTitle} at ${accurateTime}
        `;
        p.classList.add('p-[10px]' , 'mb-5' , 'rounded-[8px]' , 'bg-[#F4F7FF]' , 'leading-6' , 'font-medium');
        activityContainer.appendChild(p);
    });
}


// add event in clear history btn
document.getElementById('clear_history_btn').addEventListener('click',function(){
    document.getElementById('activity_container').innerHTML = ``;
})

// add event in blog button
document.getElementById('discover_something').addEventListener('click', function(){
    window.location.href ='blog.html'
})