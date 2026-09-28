// ========================================
// Student Data Processor
// Nama   : Santri HSI
// Kelas  : XI Rombel 1 Mr Izan
// ========================================

// ========================================
// 📦 RAW DATA
// ========================================
const studentName = "  aHmAd fAuZaN  ";
const ageText = "17 tahun";
const scoreText = "85.678";
const registrationText = "21-08-2026";

// ========================================
// 🧩 PART 1 — 🧹 CLEAN THE NAME
// ========================================

// Bersihkan spasi berlebih
const trimmedName = studentName.trim();

// Pisahkan menjadi array kata
const nameParts = trimmedName.split(" ");

// Format setiap kata: huruf pertama kapital, sisanya lowercase
const cleanName = nameParts
  .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
  .join(" ");

// Buat username: lowercase + join dengan titik
const username = nameParts.join(".").toLowerCase();

console.log('👤 Original Name : "' + studentName + '"');
console.log("🧹 Clean Name    : " + cleanName);
console.log("🔑 Username      : " + username);

// ========================================
// 🧩 PART 2 — 🔍 ANALYZE THE NAME
// ========================================

// Cek apakah nama mengandung "Ahmad"
const containsAhmad = cleanName.includes("Ahmad");

// Ambil 5 karakter pertama
const firstFiveChars = cleanName.slice(0, 5);

// Ganti "Ahmad" menjadi "Budi"
const replacement = cleanName.replace("Ahmad", "Budi");

console.log("🔎 Contains Ahmad : " + containsAhmad);
console.log("✂️ First 5 chars  : " + firstFiveChars);
console.log("🔄 Replacement    : " + replacement);

// ========================================
// 🧩 PART 3 — 🎂 PROCESS THE AGE
// ========================================

// Ambil angka dari string umur
const age = parseInt(ageText);

// Hitung tahun lahir
const currentYear = new Date().getFullYear();
const birthYear = currentYear - age;

console.log("🎂 Age Text     : " + ageText);
console.log("🎂 Age          : " + age);
console.log("📅 Current Year : " + currentYear);
console.log("📆 Birth Year   : " + birthYear);

// ========================================
// 🧩 PART 4 — 📊 PROCESS THE SCORE
// ========================================

// Konversi string ke float
const score = parseFloat(scoreText);

// Format 2 angka di belakang koma
const formattedScore = score.toFixed(2);

// Pembulatan
const roundScore = Math.round(score);
const floorScore = Math.floor(score);
const ceilScore = Math.ceil(score);

console.log("📊 Original Score : " + scoreText);
console.log("📊 Score          : " + score);
console.log("🎯 Formatted      : " + formattedScore);
console.log("🔵 Round          : " + roundScore);
console.log("⬇️ Floor          : " + floorScore);
console.log("⬆️ Ceil           : " + ceilScore);

// ========================================
// 🧩 PART 5 — 🏆 DETERMINE THE GRADE
// ========================================

let grade;

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 80 && score < 90) {
  grade = "B";
} else if (score >= 70 && score < 80) {
  grade = "C";
} else if (score >= 60 && score < 70) {
  grade = "D";
} else {
  grade = "E";
}

console.log("🏆 Grade : " + grade);

// Bonus: status kelulusan
const status = score >= 60 ? "LULUS" : "BELUM LULUS";
console.log("🎓 Status : " + status);

// ========================================
// 🧩 PART 6 — 📅 PROCESS REGISTRATION DATE
// ========================================

// Pisahkan tanggal berdasarkan "-"
const dateParts = registrationText.split("-");

// Konversi setiap bagian ke Number
const regDay = Number(dateParts[0]);
const regMonth = Number(dateParts[1]);
const regYear = Number(dateParts[2]);

console.log("📅 REGISTRATION DATE");
console.log("Day   : " + regDay);
console.log("Month : " + regMonth);
console.log("Year  : " + regYear);

// ========================================
// 🧩 PART 7 — ⏰ CURRENT DATE & TIME
// ========================================

const now = new Date();

const nowYear = now.getFullYear();
const nowMonth = now.getMonth() + 1; // +1 karena getMonth() dimulai dari 0
const nowDate = now.getDate();
const nowDay = now.getDay();
const nowHours = now.getHours();
const nowMinutes = now.getMinutes();

console.log("🕐 REPORT GENERATED");
console.log("Year   : " + nowYear);
console.log("Month  : " + nowMonth);
console.log("Date   : " + nowDate);
console.log("Day    : " + nowDay);
console.log("Time   : " + nowHours + ":" + String(nowMinutes).padStart(2, "0"));

// ========================================
// 🧩 PART 8 — 📅 CREATE DATE FORMATTER
// ========================================

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return day + "/" + month + "/" + year;
}

console.log("📅 Report Date : " + formatDate(now));

// ========================================
// 🧩 PART 9 — 🎲 LUCKY DICE
// ========================================

const dice = Math.floor(Math.random() * 6) + 1;

let diceResult;
if (dice === 6) {
  diceResult = "🔥 JACKPOT!";
} else if (dice === 1) {
  diceResult = "💀 BAD LUCK!";
} else {
  diceResult = "😎 GOOD LUCK!";
}

console.log("🎲 Lucky Dice : " + dice);
console.log(diceResult);

// ========================================
// 🧩 PART 10 — 🖥️ FINAL REPORT
// ========================================

console.log("╔════════════════════════════════════╗");
console.log("║      🎓 STUDENT DATA PROCESSOR     ║");
console.log("╚════════════════════════════════════╝");
console.log("");
console.log("👤 STUDENT");
console.log("────────────────────────────────────");
console.log('Original Name : "' + studentName + '"');
console.log("Clean Name    : " + cleanName);
console.log("Username      : " + username);
console.log("");
console.log("🔎 NAME ANALYSIS");
console.log("────────────────────────────────────");
console.log("Contains Ahmad : " + containsAhmad);
console.log("First 5 chars  : " + firstFiveChars);
console.log("Replacement    : " + replacement);
console.log("");
console.log("🎂 AGE");
console.log("────────────────────────────────────");
console.log("Age Text       : " + ageText);
console.log("Age            : " + age);
console.log("Birth Year     : " + birthYear);
console.log("");
console.log("📊 SCORE");
console.log("────────────────────────────────────");
console.log("Original Score : " + scoreText);
console.log("Formatted      : " + formattedScore);
console.log("Round          : " + roundScore);
console.log("Floor          : " + floorScore);
console.log("Ceil           : " + ceilScore);
console.log("Grade          : " + grade);
console.log("");
console.log("📅 REGISTRATION");
console.log("────────────────────────────────────");
console.log("Date           : " + formatDate(new Date(regYear, regMonth - 1, regDay)));
console.log("");
console.log("🕐 REPORT GENERATED");
console.log("────────────────────────────────────");
console.log("Date           : " + formatDate(now));
console.log("Time           : " + nowHours + ":" + String(nowMinutes).padStart(2, "0"));
console.log("");
console.log("🎲 LUCKY DICE");
console.log("────────────────────────────────────");
console.log("Dice           : " + dice);
console.log("Result         : " + diceResult);
console.log("");
console.log("╔════════════════════════════════════╗");
console.log("║       🚀 PROCESS COMPLETE!         ║");
console.log("╚════════════════════════════════════╝");

// ========================================
// ⭐ BONUS KREATIVITAS (+5)
// ========================================

// 1. Hitung jumlah karakter nama
const nameLength = cleanName.length;
console.log("🔤 Jumlah karakter nama : " + nameLength);

// 2. Generate email otomatis
const email = username + "@student.hsi.sch.id";
console.log("📧 Email otomatis       : " + email);

// 3. Greeting berdasarkan jam
let greeting;
if (nowHours >= 4 && nowHours < 11) {
  greeting = "🌅 Selamat Pagi!";
} else if (nowHours >= 11 && nowHours < 15) {
  greeting = "☀️ Selamat Siang!";
} else if (nowHours >= 15 && nowHours < 18) {
  greeting = "🌇 Selamat Sore!";
} else {
  greeting = "🌙 Selamat Malam!";
}
console.log("⏰ Greeting             : " + greeting);

// 4. Dua buah dadu
const dice1 = Math.floor(Math.random() * 6) + 1;
const dice2 = Math.floor(Math.random() * 6) + 1;
console.log("🎲🎲 Dua Dadu           : " + dice1 + " & " + dice2 + " (Total: " + (dice1 + dice2) + ")");

// 5. Nama hari
const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
console.log("📅 Nama Hari            : " + dayNames[nowDay]);

// 6. Status kelulusan (sudah ditampilkan di Part 5)
console.log("🏆 Status               : " + status);