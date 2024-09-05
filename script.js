function calculateBMI() {
  var heightInput = document.getElementById("height");
  var weightInput = document.getElementById("weight");
  var resultDiv = document.getElementById("result");
  var deteksiColor = document.getElementById("deteksiWarna");
  var kelasKeterangan =  document.getElementById("kelasKeterangan")

  var height = parseFloat(heightInput.value);
  var weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight)) {
    resultDiv.innerHTML = "Tolong Masukkan Angka Tinggi Badan dan Berat Badan yang Valid!";
    //resultDiv.className=""
    return;
  }

  var bmi = weight / ((height / 100) ** 2);
  var category = "";
  var kelasWarna="";

  if (bmi < 18.5) {
    category = "Berat Badan Kurang";
    kelasWarna="BB-kurang"
  } else if (18.5 <= bmi && bmi <= 24.9) {
    category = "Berat Badan Normal";
    kelasWarna = "BB-normal"
  } else if (25<=bmi && bmi <= 29.9) {
    category = "Berat Badan Lebih";
    kelasWarna="BB-lebih"
  } else {
    category = "Obesitas";
    kelasWarna = "BB-obesitas"
  }

  //resultDiv.innerHTML = `Hasil BMI kamu adalah ${bmi.toFixed(2)} (${category})`;
  resultDiv.className=category
  deteksiColor.className=kelasWarna
  kelasKeterangan.innerHTML = `Hasil BMI kamu adalah <span class="${kelasWarna}">${bmi.toFixed(2)}</span> (${category})`;

}
