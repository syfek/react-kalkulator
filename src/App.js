import React from 'react';

const App = ()=>{

  const oblicz = ()=>{
    var liczba1 = Number(document.getElementsByName("liczba1")[0].value);
    var liczba2 = Number(document.getElementsByName("liczba2")[0].value);
    if(liczba1 == "" || liczba2 == "") alert("Wprowadź obie liczby poprawnie");
    else{
      var wynik;
      const operacja = document.getElementsByTagName("select")[0].value;
      switch(operacja){
        case "+":
          wynik = liczba1 + liczba2;
          break;
        case "-":
          wynik = liczba1 - liczba2;
          break;
        case "*":
          wynik = liczba1 * liczba2;
          break;
        case "/":
          (liczba2 === 0) ? wynik = "niezdefiniowana liczba. Dzielisz przez zero?" : wynik = liczba1 / liczba2;
          break;
        case "%":
          (liczba2 === 0) ? wynik = "niezdefiniowana liczba. Dzielisz przez zero?" : wynik = liczba1 % liczba2;
          break;
        case "**":
          wynik = liczba1 ** liczba2;
          break;
      }
      document.getElementsByTagName("p")[0].textContent = "Wynik to: " + wynik;
    }
  }

  return(
    <div style={{padding: 20}}>
      <form>
        <input name="liczba1" /> <br /><br />
        <input name="liczba2" /> <br /><br />
        <select>
          <option>+</option>
          <option>-</option>
          <option>*</option>
          <option>/</option>
          <option>%</option>
          <option>**</option>
        </select> <br /><br />
        <button type="button" onClick={oblicz}>Oblicz</button>
      </form>
      <br />
      <p>Wynik to: </p>
    </div>
  );
};

export default App;
