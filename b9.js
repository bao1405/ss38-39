document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('searchInput').addEventListener('input', filterTable);

    function filterTable() {
        const searchValue = document.getElementById('searchInput').value.toUpperCase();
        const table = document.getElementById('dataTable');
        const rows = table.getElementsByTagName('tr');

        for (let i = 1; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName('td');
            let found = false;

            for (let j = 0; j < cells.length; j++) {
                const cellValue = cells[j].textContent || cells[j].innerText;

                if (cellValue.toUpperCase().indexOf(searchValue) > -1) {
                    found = true;
                    break;
                }
            }

            if (found) {
                rows[i].style.display = '';
                // Di chuyển dòng lên đầu tiên
                if (i > 1) {
                    const parent = rows[i].parentNode;
                    const previousSibling = rows[i].previousSibling;
                    parent.insertBefore(rows[i], parent.firstChild);
                    parent.insertBefore(previousSibling, rows[i]);
                }
            } else {
                rows[i].style.display = 'none';
            }
        }
    }
});
