
const targetDate = new Date('2024-10-12');


const formattedDate = targetDate.toLocaleDateString('ja-JP', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

console.log(formattedDate); 
