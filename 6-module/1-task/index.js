export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    this.render(rows);
    this.remove(this.elem);
  }

  render(rows) {
    let tableCellsData = rows.map(value => `
      <tr><td>${value.name}</td>
      <td>${value.age}</td>
      <td>${value.salary}</td>
      <td>${value.city}</td>
      <td><button>X</button></td></tr>
    `).join('');
    
    this.elem.innerHTML = `
      <thead>
        <tr>
            <td>Имя</td>
            <td>Возраст</td>
            <td>Зарплата</td>
            <td>Город</td>
            <td></td>
        </tr>
      </thead>  
      <tbody>
        ${tableCellsData}
      </tbody>
    `;
  }
  
  remove(element) {
    let trs = element.querySelectorAll('tr');
    for(let tr of trs) {
      let removeButton = tr.querySelector('button');
      if (removeButton) {
        removeButton.addEventListener('click', function() {
          tr.remove();
        });
      }
    }
  }
}
