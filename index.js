function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [254, 45, 212, 365, 2543];


const textarea = document.getElementById('message');

// ✅ Append text
textarea.value += 'New';

const btn = document.getElementById('btn');

// ✅ Append text on button click
btn.addEventListener('click', function handleClick() {
  textarea.value += random_item(items);
});
