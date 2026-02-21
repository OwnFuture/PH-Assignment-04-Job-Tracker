let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
let sectionJobCount = document.getElementById('section-job-count');

const jobContainerId = document.getElementById('job-container-id');

const filterSection = document.getElementById('filter-section');

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

    if(id=='interview-btn'){
        jobContainerId.classList.add('hidden'); 
        filterSection.classList.remove('hidden');
    }else if(id=='all-btn'){
        jobContainerId.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
}


//Job container

const jobContainer = document.getElementById('job-container-id').addEventListener('click',function(event){
    if(event.target.classList.contains('interview')){
        const parentNode = event.target.parentNode;
        const companyName = parentNode.querySelector('.company-name').innerText
        const jobTitle = parentNode.querySelector('.job-title').innerText
        const jobType = parentNode.querySelector('.job-type').innerText
        const jobStatus = parentNode.querySelector('.job-status').innerText
        const jobDesc = parentNode.querySelector('.job-desc').innerText
        parentNode.querySelector('.job-status').innerText = 'Interview';
    

        const jobInfo ={
        companyName,
        jobTitle,
        jobType,
        jobStatus :'Interview',
        jobDesc
    }

    const companyExist =interviewList.find(item=>item.companyName == jobInfo.companyName);
    
    if(!companyExist){
        interviewList.push(jobInfo);
    }
    renderInterview();
    
    }
})

let interviewList = [];
let rejectedList = [];



function renderInterview(){
    filterSection.innerHTML='';

    for(let inter of interviewList){
        let div = document.createElement('div');

        div.className ='bg-white mt-7 flex justify-between p-4 rounded-md mx-4';
        div.innerHTML=`
           <div class="left space-y-2">
                <h2 class="company-name text-[#002C5C] font-bold text-[20px]">${inter.company-name}</h2>
                <p class="job-title">React Native Developer</p>
                <p class="job-type">Remote • Full-time • $130,000 - $175,000</p>
                <p class="job-status bg-base-300 inline-block p-3 rounded-[5px]">Not Applied</p> <!--Status-->
                <p class="job-desc">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>

                <button class="interview btn btn-success">Interview</button>
                <button class="rejected btn btn-error">Rejected</button>
            </div>

            <div class="right">
                <button class="btn rounded-full btn-error"><i class="fa-solid fa-trash"></i></button>
            </div>
        `
        filterSection.appendChild(div);
    }
}