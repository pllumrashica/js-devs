let grade;

function checkGrade(grade) {
  if (grade === 1) {
    document.write(`<div class='so-bad-grade box'>Mjaftuëshëm</div>`);
  } else if (grade === 2) {
    document.write(`<div class='bad-grade box'>Keqë</div>`);
  } else if (grade === 3) {
    document.write(`<div class='medium-grade box'>Mirë</div>`);
  } else if (grade === 4) {
    document.write(`<div class='good-grade box'>Shumë Mirë</div>`);
  } else if (grade === 5) {
    document.write(`<div class='great-grade box'>Shkëlqyeshëm</div>`);
  } else {
    document.write(`<div class='box'>This is not valid grade</div>`);

    console.log("This is not valid grade");
  }
}

checkGrade(5);
