const updatePost = async (event) => {
  event.preventDefault();
  console.log('this is working')

  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-content').value.trim();
  const post_id = document.querySelector('#edit-post-form').getAttribute('value');

  if (title && content && post_id) {
    const response = await fetch(`/api/posts/`, {
      method: 'PUT',
      body: JSON.stringify({ title, content, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update post');
    }
  }
};

document
  .querySelector('#updateBtn')
  .addEventListener('submit', updatePost);


// const deletePost = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');
//     console.log(id);

//     const response = await fetch(`/api/posts/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to delete post');
//     }
//   }
// };

// document
//   .querySelector('#deleteBtn')
//   .addEventListener('click', deletePost);