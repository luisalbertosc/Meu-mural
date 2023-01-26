module.exports = {
    posts: [
      {
        id: "ugausjavskjbdu",
        title: "Título",
        description: "Descrição",
      },
    ],

    getAll() {
      return this.posts;
    },
  
    newPost(title, description) {
      this.posts.push({ id: generateID(), title, description });
    },
  
    deletePost(id) {
     
      const novo_array = this.posts.filter((element) => {
        return element.id !== id;
      });
      // subsituo o array anterior pelo novo array
      this.posts = novo_array;
    },
  };

  
  function generateID() {
    return Math.random().toString(36).substring(2, 9);
  }