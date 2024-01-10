let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');
let dayRes = document.getElementById('dayRes');
let monthRes = document.getElementById('monthRes');
let yearRes = document.getElementById('yearRes');
let submit = document.getElementById('submit');
let styleError = '0.5x solid hsl(0, 100%, 67%)';


submit.addEventListener('click', () => {
    let d = day.value;
    let m = month.value;
    let y = year.value;
    age = `${y}-${m}-${d}`;

    if(dayValid() && monthValid() && yearValid()) {
        console.log('Done');
    }else {
        return;
    }

    let years = new Date().getFullYear() - new Date(age).getFullYear();
    let months = new Date().getMonth() - new Date(age).getMonth();
    let days = new Date().getDate() - Number(d);
    if (months < 0) {
        years = years - 1;
        months = months + 12;
    }

    if (days < 0) {
        days += getDays(y, m - 1);
    }

    
    dayRes.innerText = days;
    monthRes.innerText = months;
    yearRes.innerText = years;
});


function validDay(y, m, d) {
    if (d > getDays(y, m) || d < 1) return false;
    return true;
  };
  
 
  function validMonth(m) {
    if (m > 12 || m < 1) return false;
    return true;
  };
  

  function validYear(y, m, d) {
    let date = new Date();
    let pastDate = new Date(`${y}-${m}-${d}`);
    if (pastDate.setHours(0, 0, 0, 0) <= date.setHours(0, 0, 0, 0)) {
      return true;
    }
    return false;
  };

const dayValid = () => {
    let d = day.value;
    let m = month.value;
    let y = year.value;

    if (d == '') {
        message(day, 'This field is required', styleError);
        return false;
      } else if (!validDay(y, m, d)) {
        message(day, 'Must be a valid day', styleError);
        return false;
      } else {
        message(day, '', '');
        return true;
      }
};

const monthValid = () => {
    let m = month.value;
    if (m == '') {
        message(month, 'This field is required', styleError);
        return false;
      } else if (!validMonth(m)) {
        message(month, 'Must be a valid month', styleError);
        return false;
      } else {
        message(month, '', '');
        return true;
      }
};

const yearValid = () => {
    let d = day.value;
    let m = month.value;
    let y = year.value;

    if (y == '') {
        message(year, 'This field is required', styleError);
        return false;
      } else if (!validYear(y, m, d)) {
        message(year, 'Must be a valid year', styleError);
        return false;
      } else {
        message(year, '', '');
        return true;
      }
};

function message(element, msg, border){
    element.style.border = border;
    element.nextElementSibling.innerText = msg;

}

function getDays(y, m){
    return new Date(y, m, 0).getDate();
}

day.addEventListener('blur', () => {
    validDay();
  });

  month.addEventListener('blur', () => {
    validMonth();
  });
  
  year.addEventListener('blur', () => {
    validYear();
  });