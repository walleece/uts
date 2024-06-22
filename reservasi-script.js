document.getElementById('reservasiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const portions = document.getElementById('portions').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const laukElements = document.getElementsByName('lauk');
    
    let lauk = [];
    for (let i = 0; i < laukElements.length; i++) {
        if (laukElements[i].checked) {
            lauk.push(laukElements[i].value);
        }
    }
    
    document.getElementById('resultName').textContent = name;
    document.getElementById('resultPhone').textContent = phone;
    document.getElementById('resultPortions').textContent = portions;
    document.getElementById('resultDate').textContent = date;
    document.getElementById('resultTime').textContent = time;
    document.getElementById('resultLauk').textContent = lauk.join(', ');
    
    document.getElementById('result').style.display = 'block';
    document.getElementById('kembaliButton').style.display = 'inline-block';
    document.getElementById('reservasiForm').style.display = 'none';
});

function resetForm() {
    document.getElementById('reservasiForm').reset();
    document.getElementById('result').style.display = 'none';
    document.getElementById('kembaliButton').style.display = 'none';
    document.getElementById('reservasiForm').style.display = 'block';
}
