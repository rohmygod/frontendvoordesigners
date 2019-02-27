/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

let payload;
const available = document.querySelectorAll('ul.source > li');
available.forEach(li => {
  li.draggable = true;
  li.addEventListener('dragstart',e=>{
    e.dataTransfer.effectAllowed = 'move';
    e.target.classList.add('moving');
    e.dataTransfer.setData('text',li.id);
    payload = li;
  });
  li.addEventListener('dragend',e=>{
    e.target.classList.remove('moving');
  });
  li.addEventListener('dragleave',e=>{
      e.target.classList.remove('insert-after');
      e.target.classList.remove('insert-before');
  });
  li.addEventListener('dragover',e=>{
    e.preventDefault();
    const rect = e.target.getBoundingClientRect()
    const offset = rect.y + (rect.height/2);
    // e.target.parentNode.querySelectorAll('.placeholder').forEach(placeholder=>placeholder.parentNode.removeChild(placeholder));
    // const placeholder = payload;
    // placeholder.classList.add('placeholder');
    // console.log(placeholder);
    if ( e.clientY - offset > 0 ) {
      e.target.after(payload);
    } else {
      e.target.parentNode.insertBefore(payload,e.target);
    }
  });

  // li.addEventListener('drop',e=> {
  //   // const id = e.dataTransfer.getData('text');
  //   // const rect = e.target.getBoundingClientRect()
  //   // const offset = rect.y + (rect.height/2);
  //   // if ( e.clientY - offset > 0 ) {
  //   //   console.log('below');
  //   //   e.target.after(document.getElementById(id));
  //   // } else {
  //   //   console.log('above');
  //   //   e.target.parentNode.insertBefore(document.getElementById(id),e.target);
  //   // }
  // });
});

document.getElementById('target').addEventListener('dragover',e=>{
  e.preventDefault();
  if (e.target === e.currentTarget && e.target.querySelector('li') === null) {
    e.target.appendChild(payload);
  }
});

// document.getElementById('target').addEventListener('drop',e=>{
//   const id = e.dataTransfer.getData('text');
//   if (e.target === e.currentTarget) {
//     e.target.appendChild(document.getElementById(id));
//   }
// });

document.querySelector('.source').addEventListener('dragover',e=>{
  e.preventDefault();
  if (e.target === e.currentTarget && e.target.querySelector('li') === null) {
    e.target.appendChild(payload);
  }
});

// document.querySelector('.source').addEventListener('drop',e=>{
//   const id = e.dataTransfer.getData('text');
//   if (e.target === e.currentTarget) {
//     e.target.appendChild(document.getElementById(id));
//   }
// });