let currentPage = 1;

        function changePage(page) {
            if (page < 1 || page > 4) return;
            currentPage = page;
            updatePageButtons();
        }

        function updatePageButtons() {
            let buttons = document.getElementsByClassName('btn');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.border = '5px solid #ccc'; 
            }
            for (let i = 0; i < currentPage; i++) {
                buttons[i].style.border = '5px solid blue'  ;
            }
            document.getElementsByClassName('btnprev')[0].disabled = currentPage === 1;

            document.getElementsByClassName('btnnext')[0].disabled = currentPage === 4;
        }

        updatePageButtons();