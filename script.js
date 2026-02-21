let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
let sectionJobCount = document.getElementById('section-job-count');

const jobContainerId = document.getElementById('job-container-id');

// total and job count function
function totalJobCount(){
    totalCount.innerText = jobContainerId.children.length;
    sectionJobCount.innerText = jobContainerId.children.length;
}
totalJobCount();


//Button div clicked

const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');

function toggleStyle(id){
    allBtn.classList.remove('btn-primary');
    interviewBtn.classList.remove('btn-primary');
    rejectedBtn.classList.remove('btn-primary');

    const clickedBtn = document.getElementById(id);
    clickedBtn.classList.add('btn-primary');
}