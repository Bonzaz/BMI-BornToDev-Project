function ToMeters(cm){
    // แปลงหน่วยที่ผู้ใช้กรอกจากเซนติเมตร >> เมตร
    cm = Number(cm)
    return cm/100
}

function DisplayBMI(bmi){
    // แสดงผลให้ผู้ใช้เห็น
    document.getElementById("Result").innerHTML = "BMI: " + bmi.toFixed(2) + "<br>"

    description = ""
    if (bmi < 18.5){
        description = "อืม.. น้ำหนักของคุณน้อยกว่ามาตรฐาน หมั่นออกกำลังกายเพิ่มน้ำหนักและทานอาหารให้มากขึ้น"
    }
    else if (bmi <= 22.9){
        description = "ยอดเยี่ยม! น้ำหนักของคุณอยู่ในมาตรฐาน หมั่นออกกำลังกายและทานอาหารที่มีประโยชน์ต่อไป"
    }
    else if (bmi <= 24.9){
        description = "พอได้อยู่.. น้ำหนักของคุณเกินมาตรฐาน หมั่นออกกำลังกายและทานอาหารที่มีประโยชน์"
    }
    else if (bmi <= 29.9){
        description = "ไม่นะ! น้ำหนักของคุณเข้าขั้น อ้วนระดับ 1 หมั่นออกกำลังกายเพื่อลดน้ำหนักและทานอาหารที่มีประโยชน์"
    }
    else if (bmi >= 30){
        description = "ไม่นะ! น้ำหนักของคุณเข้าขั้น อ้วนระดับ 2 หมั่นออกกำลังกายเพื่อลดน้ำหนัก ทานอาหารที่มีประโยชน์และทานให้น้อยลง ไม่เช่นนั้นอาจส่งผลเสียต่อร่างกายคุณในอนาคตได้"
    }

    document.getElementById("ResultDescription").innerHTML = description + "<br><br>"
}

function CalculateBMI(weight, height){
    // คำนวณค่าดัชนีมวลกาย
    height = ToMeters(height)
    weight = Number(weight)

    bmi = weight / Math.pow(height, 2)
    DisplayBMI(bmi)
}