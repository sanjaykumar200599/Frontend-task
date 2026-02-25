// State Management
let students = [
    { id: 1, name: "Jane Cooper", studentId: "STU-2023-089", department: "Computer Science", percentage: 85, joined: "Oct 12, 2023" },
    { id: 2, name: "Alex Smith", studentId: "STU-2023-102", department: "Software Engineering", percentage: 92, joined: "Nov 05, 2023" },
    { id: 3, name: "Michael Wong", studentId: "STU-2024-012", department: "Data Science", percentage: 45, joined: "Jan 15, 2024" },
    { id: 4, name: "Sarah Lane", studentId: "STU-2024-045", department: "Information Technology", percentage: 78, joined: "Feb 01, 2024" },
    { id: 5, name: "David Brown", studentId: "STU-2024-067", department: "Computer Science", percentage: 65, joined: "Feb 12, 2024" }
];


const studentListContainer = document.getElementById('studentList');
const addStudentForm = document.getElementById('addStudentForm');
const searchInput = document.getElementById('searchInput');
const visibleCountLabel = document.getElementById('visibleCount');
const totalCountLabel = document.getElementById('totalCount');

// Helper Function: Get Initials for Avatar
function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
}

// Helper Function: Format Current Date
function getCurrentDate() {
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
}

// RENDER FUNCTIONALITY
function renderStudents(data = students) {
    studentListContainer.innerHTML = ''; 
    
    visibleCountLabel.textContent = data.length;
    totalCountLabel.textContent = students.length;

    if (data.length === 0) {
        studentListContainer.innerHTML = '<div style="padding: 30px; text-align: center; color: var(--text-secondary);">No students match your criteria.</div>';
        return;
    }

    data.forEach(student => {
        const isPass = student.percentage >= 50; 
        const statusClass = isPass ? 'pass' : 'fail';
        const statusText = isPass ? 'PASS' : 'FAIL';
        const barColor = isPass ? 'var(--status-pass)' : 'var(--status-fail)';

        const row = document.createElement('div');
        row.className = 'student-row';
        row.innerHTML = `
            <div class="info-cell">
                <div class="avatar">${getInitials(student.name)}</div>
                <div>
                    <div class="student-name">${student.name}</div>
                    <div class="student-sub">Joined: ${student.joined}</div>
                </div>
            </div>
            
            <div>
                <div class="student-id">${student.studentId}</div>
                <div class="student-sub">${student.department}</div>
            </div>

            <div class="progress-container">
                <span class="progress-text">${student.percentage}%</span>
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${student.percentage}%; background-color: ${barColor};"></div>
                </div>
            </div>

            <div class="actions-cell">
                <span class="badge ${statusClass}">${statusText}</span>
                <button class="btn-delete" onclick="deleteStudent(${student.id})" title="Delete">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </button>
            </div>
        `;
        studentListContainer.appendChild(row);
    });
}

//  ADD FUNCTIONALITY 
addStudentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const studentId = document.getElementById('studentId').value;
    const department = document.getElementById('department').value;
    const percentage = parseInt(document.getElementById('percentage').value);

    const newStudent = {
        id: Date.now(), 
        name,
        studentId,
        department,
        percentage,
        joined: getCurrentDate()
    };

    students.unshift(newStudent); 
    searchInput.value = ''; 
    renderStudents(); 
    addStudentForm.reset(); 
});

// DELETE FUNCTIONALITY 
window.deleteStudent = function(id) {
    if(confirm('Are you sure you want to remove this student?')) {
        students = students.filter(student => student.id !== id);
        renderStudents();
    }
};

//  SEARCH FUNCTIONALITY
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    
    const filtered = students.filter(student => 
        student.name.toLowerCase().includes(term) || 
        student.studentId.toLowerCase().includes(term) ||
        student.department.toLowerCase().includes(term)
    );
    
    renderStudents(filtered);
});


renderStudents();