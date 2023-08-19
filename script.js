function calculateTriangleArea(){
   const baseField = document.getElementById('triangle-base');
   const baseValueText = baseField.value;
   const base = parseFloat(baseValueText);    
    console.log(baseValueText);
   const heigthField = document.getElementById('triangle-height');
   const heigthValueText = heigthField.value;
   const height = parseFloat(heigthValueText);
   console.log(height);
   const area = 0.5 * base * height;
   console.log(area);
   const areaSpan = document.getElementById('triangle-area');
   areaSpan.innerText = area;



}