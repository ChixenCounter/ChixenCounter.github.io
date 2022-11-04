const textarea = document.getElementById('message');

// ✅ Append text
textarea.value += 'Appended text';

const btn = document.getElementById('btn');

// ✅ Append text on button click
btn.addEventListener('click', function handleClick() {
  textarea.value += 'Appended text';
});
