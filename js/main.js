class Alumns {
  name;
  surname;
  points;

  constructor(nameIn, surnameIn, pointsIn) {
    this.name = nameIn;
    this.surname = surnameIn;
    this.points = pointsIn;

  }
  setPoints(points) {
    this.points = points;
  }
  getPoints() {
    if (this.points >= 5) {
      return "apto"
    }
    else {
      return "no apto"
    }

  }

}

function NewAlumn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let name = document.getElementById("name").value;
      let surname = document.getElementById("surname").value;
      let points = document.getElementById("points").value;

      if (name === "" || surname === "" || points < 0 || points > 10 || points === isNaN || points === "") {
        reject("datos no validos");
      }
      else {

        let alumns1 = new Alumns(name, surname, points);
        resolve(" Nombre: " + alumns1.name + ", Apellidos: " + alumns1.surname + ", Puntuación: " + alumns1.getPoints());

      }
    },
      2000);
  });
}


async function showUserResult() {
  try {
    let alumns1 = await NewAlumn();
    console.log(alumns1);
  } catch (error) {
    console.error(error);
  }
}


