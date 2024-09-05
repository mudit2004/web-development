document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/read-json')
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('jsonTable');

            const headerRow = table.insertRow(0);
            Object.keys(data).forEach(key => {
                const cell = document.createElement('th');
                cell.textContent = key.charAt(0).toUpperCase() + key.slice(1);
                headerRow.appendChild(cell);
            });

            const dataRow = table.insertRow(1);
            Object.values(data).forEach(value => {
                const cell = dataRow.insertCell();
                cell.textContent = value;
            });
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
            document.getElementById('jsonTable').textContent = 'Error fetching JSON data.';
        });
});

/*
    fetch('http://localhost:3000/read-file')
        .then(response => response.text())
        .then(data => {
            document.getElementById('fileContent').textContent = data;
        })
        .catch(error => {
            console.error('Error fetching file:', error);
            document.getElementById('fileContent').textContent = 'Error fetching file content.';
        });
});
 */
