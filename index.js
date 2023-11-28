const toggleButton = document.querySelector('#toggleButton');
const links = document.querySelector('#links');


toggleButton.addEventListener('click', () => {
   links.classList.toggle('active');
});

/*
لكود التالي يقوم بتعريف زر تبديل 

toggleButton

 وعنصر الروابط

 links على صفحة

 HTML. 

ثم يتم إضافة حدث يستجيب للنقر على زر 

toggleButton. 

عند النقر على الزر،

 يتم تطبيق التبديل

 toggle 

على عنصر الروابط 

links

 بإضافة أو إزالة الصنف

 'active'.

 هذا يتيح للمستخدم تبديل ظهور عنصر الروابط.


*/