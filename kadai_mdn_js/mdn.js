
const targetDate = new Date();

const formattedDate = targetDate.toLocaleDateString('ja-JP', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

console.log(formattedDate);
