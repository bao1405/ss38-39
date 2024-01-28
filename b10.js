
const itemsPerPage = 10;


document.addEventListener('DOMContentLoaded', function () {
    displayData(employees.slice(0, itemsPerPage));
});

function displayData(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    data.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${employee.id}</td>
                         <td>${employee.name}</td>
                         <td>${employee.position}</td>`;
        tableBody.appendChild(row);
    });

    updatePagination();
}

function updatePagination() {
    const totalPages = Math.ceil(employees.length / itemsPerPage);
    document.getElementById('currentPage').textContent = currentPage;

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        const startIdx = (currentPage - 1) * itemsPerPage;
        const endIdx = startIdx + itemsPerPage;
        displayData(employees.slice(startIdx, endIdx));
    }
}

function nextPage() {
    const totalPages = Math.ceil(employees.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        const startIdx = (currentPage - 1) * itemsPerPage;
        const endIdx = startIdx + itemsPerPage;
        displayData(employees.slice(startIdx, endIdx));
    }
}

let currentPage = 1;

        function changePage(page) {
            if (page < 1 || page > 6) return;
            currentPage = page;
            updatePageButtons();
        }

        function updatePageButtons() {
            let buttons = document.getElementsByClassName('btn');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.background = 'white'; 
            }
            for (let i = 0; i < currentPage; i++) {
                buttons[i].style.background = 'blue'  ;
                buttons[i].style.color = 'white'  ;
            }
            document.getElementsByClassName('btnprev')[0].disabled = currentPage === 1;

            document.getElementsByClassName('btnnext')[0].disabled = currentPage === 6;
        }

        updatePageButtons();