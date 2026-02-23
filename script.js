let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
let sectionJobCount = document.getElementById('section-job-count');


const jobContainerId = document.getElementById('job-container-id');
const filterSection = document.getElementById('filter-section');

const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');


let interviewList = [];
let rejectedList = [];

// total and job count function
function totalJobCount(){
    totalCount.innerText = jobContainerId.children.length;
    sectionJobCount.innerText = jobContainerId.children.length;
}
totalJobCount();


//Button div clicked



function toggleStyle(id){
    allBtn.classList.remove('btn-primary');
    interviewBtn.classList.remove('btn-primary');
    rejectedBtn.classList.remove('btn-primary');

    const clickedBtn = document.getElementById(id);
    clickedBtn.classList.add('btn-primary');

    if(id=='interview-btn'){
        jobContainerId.classList.add('hidden'); 
        filterSection.classList.remove('hidden');
        renderInterview();
    }else if(id == 'rejected-btn'){
        jobContainerId.classList.add('hidden'); 
        filterSection.classList.remove('hidden');
        renderRejected();
    }
    else if(id=='all-btn'){
        jobContainerId.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
}


//Job container


function handleJobClick(event){

      // Delete
    if(event.target.closest('.right')){
        const jobDiv = event.target.closest('.bg-white');
        const delCompany = jobDiv.querySelector('.company-name').innerText;

        // Remove from lists if exists
        interviewList = interviewList.filter(item => item.companyName !== delCompany);
        rejectedList = rejectedList.filter(item => item.companyName !== delCompany);

        jobDiv.remove();
        updateInterview();
        updateRejected();
        totalJobCount();
        checkNoJobs();
    }

    const parentNode = event.target.closest('.left');
    if(!parentNode) return;

    const companyName = parentNode.querySelector('.company-name').innerText;
    const jobTitle = parentNode.querySelector('.job-title').innerText;
    const jobType = parentNode.querySelector('.job-type').innerText;
    const jobDesc = parentNode.querySelector('.job-desc').innerText;

    //Interview
    if(event.target.classList.contains('interview')){
        parentNode.querySelector('.job-status').innerText = 'Interview';


        rejectedList = rejectedList.filter(item => item.companyName !== companyName);
        updateRejected();


        if(!interviewList.find(item => item.companyName === companyName)){
            interviewList.push({
                companyName,
                jobTitle,
                jobType,
                jobStatus: 'Interview',
                jobDesc
            });
        }

        updateInterview();
        renderInterview();
    }

    //Rejected
    if(event.target.classList.contains('rejected')){
        parentNode.querySelector('.job-status').innerText = 'Rejected';

    
        interviewList = interviewList.filter(item => item.companyName !== companyName);
        updateInterview();

        if(!rejectedList.find(item => item.companyName === companyName)){
            rejectedList.push({
                companyName,
                jobTitle,
                jobType,
                jobStatus: 'Rejected',
                jobDesc
            });
        }

        updateRejected();
        renderRejected();
    }

  
}

//Render function interview

function renderInterview(){
    filterSection.innerHTML = '';
    if(interviewList.length === 0){
        showNoJobs();
        return;
    }

    for(let job of interviewList){
        const div = document.createElement('div');
        div.className = 'bg-white mt-7 flex justify-between p-4 rounded-md mx-4';
        div.innerHTML = `
            <div class="left space-y-2">
                <h2 class="company-name text-[#002C5C] font-bold text-[20px]">${job.companyName}</h2>
                <p class="job-title">${job.jobTitle}</p>
                <p class="job-type">${job.jobType}</p>
                <p class="job-status bg-base-300 inline-block p-3 rounded-[5px]">Interview</p>
                <p class="job-desc">${job.jobDesc}</p>
                <button class="interview btn btn-success">Interview</button>
                <button class="rejected btn btn-error">Rejected</button>
            </div>
            <div class="right">
                <button class="btn rounded-full btn-error"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        filterSection.appendChild(div);
    }
}

//Render function rejected

function renderRejected(){
    filterSection.innerHTML = '';
    if(rejectedList.length === 0){
        showNoJobs();
        return;
    }

    for(let job of rejectedList){
        const div = document.createElement('div');
        div.className = 'bg-white mt-7 flex justify-between p-4 rounded-md mx-4';
        div.innerHTML = `
            <div class="left space-y-2">
                <h2 class="company-name text-[#002C5C] font-bold text-[20px]">${job.companyName}</h2>
                <p class="job-title">${job.jobTitle}</p>
                <p class="job-type">${job.jobType}</p>
                <p class="job-status bg-base-300 inline-block p-3 rounded-[5px]">Rejected</p>
                <p class="job-desc">${job.jobDesc}</p>
                <button class="interview btn btn-success">Interview</button>
                <button class="rejected btn btn-error">Rejected</button>
            </div>
            <div class="right">
                <button class="btn rounded-full btn-error"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        filterSection.appendChild(div);
    }
}

function updateInterview(){ interviewCount.innerText = interviewList.length; }
function updateRejected(){ rejectedCount.innerText = rejectedList.length; }

// No job section
function showNoJobs(){
    filterSection.innerHTML = `
        <div class="bg-white mt-7 text-center p-5 rounded-md mx-4">
            <img src="/B13-A4-PH-Job-Tracker/jobs.png" class="mx-auto" alt="No Jobs">
            <h2 class="text-[#002C5C] font-bold text-[20px] mt-3">No Jobs Available</h2>
            <p class="text-[#64748B]">Check back soon for new job opportunities</p>
        </div>
    `;
}

function checkNoJobs(){
    if(jobContainerId.children.length === 0){
        filterSection.innerHTML = '';
        showNoJobs();
    }
}

jobContainerId.addEventListener('click', handleJobClick);
filterSection.addEventListener('click', handleJobClick);